<?php

use Cidaas\OAuth2\Client\Provider\Cidaas;

$provider = new Cidaas([
  'clientId' => '{client-id}',
  'clientSecret' => '{client-secret}',
  'redirectUri' => 'https://example.com/callback'
]);
// Get authorization code
if (!isset($GET['code'])) {
  $authUrl = $provider->getAuthorizationUrl();
  $SESSION['oauth2state'] = $provider->getState();
  header('Location: ' . $authUrl);
  exit;
}
// Exchange code for access token
$token = $provider->getAccessToken('authorization_code', [
  'code' => $GET['code']
]);
