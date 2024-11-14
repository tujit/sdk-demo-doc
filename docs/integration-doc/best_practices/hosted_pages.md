---
title: 'Hosted page decisions'
sidebar_position: 3
---

# Hosted page decisions

Before you start to design or configure your hosted pages, you have to decide multiple things. Most of them can also change afterwards but could generate additional effort.

## Login

There are several things to consider for the login. Besides the login name, you could also offer different authentification methods or login providers to make the login as simple as possible, as safe as necessary.

### Login name

In the most cases the E-Mail is used as login name, also the mobile number is a very good option. Both have the advantage to be a communication address to contact the user. Which makes it easier to provide processes like password forgot. The third option is to use a username like a random string or a business value like *customer number*, *contract-ID*. Of course, it is also possible to offer several options.

<!--
theme: success
-->
> Our suggestion: Use at least E-Mail or mobile number.

### Authentification methods

Digital identities are in the sights of cybercriminals. Support users with secure, passwordless authentication methods such as biometrics - because every new, secure password becomes a challenge for them.

If you want to provide password as well, you have to define password policies. They should be strong but should not lead to unsolvable puzzles.

A minimum length (e.g., 8 characters) and the use of different character types (e.g. 3 - lowercase, uppercase and numeric) should be sufficient. This way, secure passwords predefined by the browser can also be used. A time limit of passwords is not possible in cidaas and not recommended, because this rather tempts the user to apply a pattern for his passwords (january2022, february2022 etc.).

Traditional passwords are obsolete, partly because they are difficult to type on mobile devices – too small keys, too many typos. This takes time and it lowers desire to use the application.

Biometric features, uniquely generated codes or social login: cidaas out-of-the-box allows you to offer your users simple, fast and secure password alternatives. Surprise your users with more convenience through password-free authentication and in the real world with Digital Access Management.


<!--
theme: success
-->
> Our suggestion: Provide passwordless to increase the security and optimize usability - [bye bye password](https://www.tschuesspasswort.de/)

### Login Provider

Another option to login is to use another login provider, like social provider (facebook, google, apple, paypal etc.). In that case the user could reuse an existing account and doesn't need to perform another registration process.

The option can also be used to connect to legacy systems like LDAP or ActiveDirectory.

[Login Providers](https://docs.cidaas.com/docs/cidaas-iam/6468645cb81b0-login-providers)

## Registration

Self-registration is often provided in CIAM cases, but also in some IAM cases. If you provide a self-registration you have to define which data you need. cidaas provides the feature [progressive registration](https://docs.cidaas.com/docs/cidaas-iam/4e18d0d35d9ee-progressive-registration) to avoid huge registration formulars.

### Registration fields

There is a list of user attributes (System fields) which are mainly derived from the oidc standard. Additionally, it is possible to create multiple *custom-fields* in different datatypes.

[Registration Page](https://docs.cidaas.com/docs/cidaas-iam/480b608de7257-registration-page)

### UserID Verification

If you use E-Mail or mobile number as user-id (login name), we suggest requiring verification of those. With that you can avoid fake accounts. During the registration process the user will get a message with a code or a link to verify his communication medium. The user is not able to login without verification. At each login attempt he will be asked again. The verification could also be optional or disabled.

## User profile

A central user profile could be used in all applications and can provide a lot of self-services like

- password reset
- change E-Mail / mobile number
- edit user data
- configure authentification methods
- accept/decline consents
- list of user activities
- manage devices
- delete account

## Communication

In cidaas we could send message for multiple events like *welcome_user*, *password_reset* and many more. Most of them could be disabled. It is your decision to send a welcome mail or a new-device mail.

## Design

At the end you have to decide about the design. Do you want to provide different designs per touchpoint or do you want to provide a unique corporate styling for all of them. cidaas offers possibilities to change the design on a configuration way, but if you like you can implement your own hosted pages - [technical description](https://docs.cidaas.com/docs/cidaas-iam/1113d2a427e98-hosted-pages-webapp-technical-description#hosted-pages-webapp---technical-description)

