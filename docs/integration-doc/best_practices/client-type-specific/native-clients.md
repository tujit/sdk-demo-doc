

# Native Clients (Native Apps)

## What are mobile Clients

Mobile clients refer to applications or software programs designed to run on mobile devices such as smartphones and tablets. These clients can serve a wide range of purposes, including providing users with access to email, social media, enterprise systems, games, and various online services. They are typically designed to take advantage of the unique features and capabilities of mobile devices, such as touchscreens, GPS, cameras, and sensors, to offer a user-friendly and efficient experience.

Mobile clients can be broadly categorized into a few types:

* **Native Apps:** These are applications developed specifically for a particular mobile operating system (OS), such as iOS or Android, using the programming languages and development tools supported by that OS. Native apps usually offer the best performance and a high degree of reliability and can access the full range of device capabilities.
* **Web Apps:**  These are applications that are accessed through a mobile device's web browser. They are not installed on the device but are designed to be responsive and adaptive to different screen sizes. Web apps can be developed using HTML, CSS, and JavaScript.
* **Hybrid Apps:**  Hybrid applications are essentially web apps that are wrapped in a native container. They can be downloaded from app stores just like native apps and can access certain device capabilities through the native container. Hybrid apps offer a balance between the ease of development of web apps and the performance and user experience of native apps.

<!-- theme: info -->
> To create a Native Client cidaas provides you the option to Select between different App Types. To add your native Client in cidaas, please find more information [here](https://docs.cidaas.com/docs/cidaas-iam/96alxnmpit43e-app-management#application-types).


## Challenges of Native Clients vs. Webapps:

Native/Hybrid Clients | Webapps
---------|----------
Update must be available in AppStore which requires approval by the Store Provider | Updates are in the control of the Application Provider
Clients are running on a Device and require an update by the user| All Updates are instantly active


## Best Practices For Integrating cidaas in Native Clients

Best Practices will help to implement in a secure way:

### No. 1: Browserbased Authentication


* **Time-To-Market**: As native apps require an approval by the playstore provider, as well as the user must update the app, such a update process will take a lot of time. Wereas browser are in the control of the launch. Furthermore using Browser and a central Hosted Page, you do not need to implement a feature for multiple clients, so the time to invest is shorter.
* **Implementation and Re-Use of Pages**: Having a browser based implementation allows a reuse of the Login, Registration and all further pages, for all Clients, independent if native client or webapps.
* **Launch of new Verification Methods**: When launching new verification methods it will become very easy to include it in the app.
* **Single Sign On via Multiple App**: When using the browserbased approach then you will achieve a single sign on also in a native device. This means if the user logs in to a your browser based service, then also he will be automatically logged in as soon as he opens the app and clicks the login button. The browser will hold the session. The user can now switch to all your services, which are webapps or native apps, and will be automatically logged in.
* **Segregation of Duty**: The major target by using browser based authentication is also that the Business is not in touch with credentials of the users. 

### No. 2: TWA or SafariViewController for Authentication 

When implementing a browserbased authentication the mechanisms to use are called: [Trusted Web Activity (Android) or SafariViewController (iOS).](why-not-use-webviews-in-native-apps.md)

This allows the user to be able to verify the origin of the page. It increases security as the user is less susceptible to phishing attacks. 

Furthermore by using Single Sign On, the systems are sharing the session based on cookies and the user will be seldom prompted to enter their credentials.


Using SFSafariViewController on iOS or Trusted Web Activity (TWA) on Android instead of traditional webviews like UIWebView or WKWebView on iOS, and WebView on Android, provides several advantages, especially in terms of performance, security, and user experience. Here are the key reasons why developers might choose these technologies for integrating web content into their native apps:



**Authentication and Cookies**
 * These views also support browser features like AutoFill, content blockers, and saved passwords, which are not available in traditional webviews.
 * With SFSafariViewController and TWA, cookies and other local data are shared with the browser. This means that if a user is already logged into a service in their browser, they will be logged in within the app as well. This is particularly useful for social logins or any form of OAuth authentication.
 * Traditional webviews, in contrast, do not share cookies with the browser, which can lead to a disjointed experience where users might need to repeatedly log in.


### No. 3: PKCE Grant Type

PKCE, which stands for Proof Key for Code Exchange, is an extension to the OAuth 2.0 authorization code flow to prevent certain attacks and to be able to perform OAuth exchanges from public clients in a secure manner. It's particularly useful and recommended for applications that are running on devices where the client secret cannot be securely stored, such as single-page applications, native mobile apps, and desktop applications.

<!-- theme: info -->
> The Flow is implemented in the hosted pages, and by using the javascript sdk, it automatically performs to create code_verifier as well as the state. To understand the flow more in depth you can checkout the [authkit.io Playground](https://authkit.io/oauth/playground/auth-code) or the [documentation](https://docs.cidaas.com/docs/cidaas-iam/7t3k9xc18627z-o-auth2-flows).


### No. 4: Refresh Token 

**Refresh Token**: This is a long-lived token that is used to obtain new access tokens after the current access token expires. Unlike access tokens, refresh tokens are meant to be much longer-lived, though the exact duration can vary depending on the authorization server's policies or can be indefinite until explicitly revoked.

The primary purpose of refresh tokens is to allow applications to remain authorized without requiring the user to repeatedly log in, thus enhancing both security and the user experience. Here's how refresh tokens are used in the OAuth 2.0 flow:

* After the initial authentication and authorization process, the authorization server issues both an access token and a refresh token to the application.
* The application uses the access token to access the protected resources on behalf of the user.
* Once the access token expires, the application uses the refresh token to request a new access token from the authorization server. This request is made to a specific endpoint provided by the server and includes the refresh token and the application's credentials.
* If the refresh token is valid and has not been revoked, the authorization server issues a new access token and a new refresh token to the application.

This mechanism ensures that even if an access token is compromised, the damage is limited due to its short lifespan. Meanwhile, refresh tokens are typically only sent over the network when they are being used to obtain a new access token, reducing the risk of exposure. Additionally, authorization servers often implement policies to detect and prevent the misuse of refresh tokens, such as rotation (issuing a new refresh token with every access token refresh) and revocation (the ability to revoke tokens if suspicious activity is detected).

<!-- theme: info -->
> Refresh token rotation is a security mechanism in OAuth 2.0 designed to enhance the security of refresh tokens by issuing a new refresh token with every access token request made using a refresh token. This process effectively limits the lifetime of each refresh token and reduces the risk of refresh token theft.

Implementing refresh token rotation requires careful handling by clients to ensure they properly manage the replacement of old refresh tokens with new ones with each refresh request. This pattern has become more common in modern OAuth 2.0 and OpenID Connect implementations, especially in scenarios where high security is critical.


### No. 5: Use Custom Schemas for redirects

Custom URL schemes for redirecting to native applications are a method used to enable deep linking into an app from a web browser or another app. This approach leverages a unique scheme (the part of a URL that typically specifies http or https) to create a link that, when accessed, opens a specific application on the device, if installed, rather than opening a web page. In the context of OAuth 2.0 and mobile or desktop applications, custom URL schemes can be particularly useful for handling redirects back to the application after an authentication flow.

Here's how custom URL schemes work in the context of redirects to native applications, particularly for OAuth 2.0 authentication:

1. **Application Registration:** The developer registers a custom URL scheme for their application with the operating system (OS). For example, an app might register the custom URL scheme myapp://.
2. **OAuth Redirect URI:** When setting up OAuth 2.0, the application specifies a redirect URI using its custom URL scheme. For instance, myapp://oauth2redirect might be used as the redirect URI in the OAuth authorization request.
3. **Authorization Request:** The user starts the OAuth flow in the application, which opens a web browser or web view for the user to log in with their credentials and authorize the application.
4. **Redirect Back to Application:** After authorization, the authorization server redirects the user to the redirect URI specified by the application, which uses the custom URL scheme (e.g., myapp://oauth2redirect?code=AUTH_CODE). Because the scheme is registered to the application, the OS knows to open the app when this URL is accessed.
5. **Application Handles Redirect:** The application is configured to handle the redirect URI, extract the authorization code (or access token, depending on the flow used), and proceed with the OAuth flow (e.g., exchanging the authorization code for an access token).

This method enables a smooth user experience, allowing the user to be redirected back to the native application after the authentication process without manual intervention. Custom URL schemes must be unique to prevent conflicts with other applications and ensure security.

However, there are some security considerations to keep in mind:

* **URL Scheme Squatting:** Another app could register the same custom URL scheme and intercept the OAuth tokens or authorization codes.
* **Exposure to Other Apps:** Data passed in custom URL schemes can potentially be accessed by other applications on the device.

To mitigate these risks, modern applications and authorization flows often use more secure methods such as claimed HTTPS schemes (Universal Links in iOS and App Links in Android) for deep linking, which provide more robust verification that the link is being handled by the intended application. Additionally, PKCE (Proof Key for Code Exchange) is used in the OAuth flow to ensure that even if an authorization code is intercepted, it cannot be used without the corresponding code verifier that's held by the original application.
