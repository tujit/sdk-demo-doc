---
sidebar_position: 3
title: PKCE Flow
description: Implementing PKCE (Proof Key for Code Exchange) flow with Cidaas PHP SDK
---

# PKCE (Proof Key for Code Exchange) Flow

PKCE enhances the security of the Authorization Code flow, making it ideal for mobile and native applications.

## Why Use PKCE?

- Prevents authorization code interception attacks
- Recommended for native apps and SPAs
- No client secret required
- Enhanced security for public clients

## How PKCE Works

1. Generate a Code Verifier and Code Challenge
2. Request authorization with the Code Challenge
3. Exchange authorization code and Code Verifier for tokens

<!-- ## Implementation -->

<!-- ### 1. Generate PKCE Values

php
// Generate and store code verifier
$codeVerifier = bin2hex(random_bytes(32));
$SESSION['code_verifier'] = $codeVerifier;
// Generate code challenge
$codeChallenge = rtrim(strtr(base64_encode(hash('sha256', $codeVerifier, true)), '+/', '-'), '=');


### 2. Request Authorization

```php
$provider = new Cidaas([
'clientId' => 'your-client-id',
'redirectUri' => 'https://your-app.com/callback',
'baseUrl' => 'https://your-cidaas-instance.cidaas.com'
]);
$authUrl = $provider->getAuthorizationUrl([
'code_challenge' => $codeChallenge,
'code_challenge_method' => 'S256',
'scope' => ['openid', 'profile', 'email']
]);
$SESSION['oauth2state'] = $provider->getState();
header('Location: ' . $authUrl);
exit;php
$provider = new Cidaas([
'clientId' => 'your-client-id',
'redirectUri' => 'https://your-app.com/callback',
'baseUrl' => 'https://your-cidaas-instance.cidaas.com'
]);
$authUrl = $provider->getAuthorizationUrl([
'code_challenge' => $codeChallenge,
'code_challenge_method' => 'S256',
'scope' => ['openid', 'profile', 'email']
]);
$SESSION['oauth2state'] = $provider->getState();
header('Location: ' . $authUrl);
exit;
```

### 3. Exchange Code for Tokens

```php
try {
$token = $provider->getAccessToken('authorization_code', [
'code' => $GET['code'],
'code_verifier' => $SESSION['code_verifier']
]);
// Use the token
$user = $provider->getResourceOwner($token);
} catch (\Exception $e) {
exit('Error: ' . $e->getMessage());
}
```

## Security Considerations

- Store the code verifier securely
- Use cryptographically secure random bytes for code verifier
- Always validate state parameter
- Implement proper error handling -->