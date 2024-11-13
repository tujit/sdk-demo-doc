---
sidebar_position: 4
title: Implicit Flow
description: Implementing Implicit flow with Cidaas SDK
---

# Implicit Flow

The Implicit flow is designed for client-side applications where the access token is returned immediately without an authorization code exchange.

<!-- ## Important Note

⚠️ The Implicit flow is considered legacy and less secure than other flows. We recommend using Authorization Code flow with PKCE for modern applications.

## When to Use Implicit Flow

- Legacy JavaScript applications
- Scenarios where immediate token access is required
- Applications that can't securely store client secrets

## How Implicit Flow Works

1. Application redirects to authorization endpoint
2. User authenticates
3. Access token is returned directly in the URL fragment
4. Client-side application can immediately use the token

## Implementation

### 1. Configure the Provider

```php
$provider = new Cidaas([
'clientId' => 'your-client-id',
'redirectUri' => 'https://your-app.com/callback',
'baseUrl' => 'https://your-cidaas-instance.cidaas.com'
]);
```

### 2. Request Authorization

```php
$authUrl = $provider->getAuthorizationUrl([
'response_type' => 'token',
'scope' => ['openid', 'profile', 'email']
]);
$SESSION['oauth2state'] = $provider->getState();
header('Location: ' . $authUrl);
exit;
```

### 3. Handle the Response

```javascript
// Client-side JavaScript to handle the response
function handleImplicitFlow() {
const hash = window.location.hash.substr(1);
const result = hash.split('&').reduce((result, item) => {
const [key, value] = item.split('=');
result[key] = value;
return result;
}, {});
if (result.access_token) {
// Store the token securely
// Use the token for API calls
}
}
```

## Security Considerations

- Tokens are exposed in the URL
- No refresh tokens available
- Limited to browser-based applications
- Consider using Authorization Code flow with PKCE instead -->