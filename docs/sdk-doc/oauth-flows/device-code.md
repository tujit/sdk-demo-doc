---
sidebar_position: 5
title: Device Code Flow
description: Implementing Device Code flow with Cidaas SDK
---

# Device Code Flow

The Device Code flow is designed for devices with limited input capabilities or no browser interface, such as IoT devices, CLI applications, or smart TVs.

## When to Use Device Code Flow

- Smart TVs
- IoT devices

## How Device Code Flow Works

1. Device requests a device code
2. User is shown a code and URL
3. User enters code on another device
4. Device polls for token
5. Token is issued after user authorization

<!-- ## Implementation

### 1. Request Device Code

```php
$provider = new Cidaas([
'clientId' => 'your-client-id',
'baseUrl' => 'https://your-cidaas-instance.cidaas.com'
]);
try {
$deviceCodeResponse = $provider->requestDeviceCode([
'scope' => ['openid', 'profile', 'email']
]);
// Show these to the user
echo "Please visit: " . $deviceCodeResponse['verification_uri_complete'];
echo "And enter code: " . $deviceCodeResponse['user_code'];
} catch (\Exception $e) {
exit('Error: ' . $e->getMessage());
}
```

### 2. Poll for Token

```php
$interval = $deviceCodeResponse['interval'] ?? 5;
$expiresIn = $deviceCodeResponse['expires_in'] ?? 600;
$startTime = time();
while (true) {
try {
$token = $provider->getAccessToken('device_code', [
'device_code' => $deviceCodeResponse['device_code']
]);
// Token received, break the loop
break;
} catch (\Exception $e) {
if ($e->getMessage() === 'authorization_pending') {
// Wait for the specified interval
sleep($interval);
// Check if expired
if (time() - $startTime >= $expiresIn) {
exit('Device code expired');
}
continue;
}
// Handle other errors
exit('Error: ' . $e->getMessage());
}
}
// Use the token
$user = $provider->getResourceOwner($token);
```

## Example CLI Implementation

```php
// Example command-line implementation
echo "Initializing device authentication...\n";
$deviceCodeResponse = $provider->requestDeviceCode();
echo "\n";
echo "🌐 To authenticate, visit: " . $deviceCodeResponse['verification_uri'] . "\n";
echo "📝 Enter code: " . $deviceCodeResponse['user_code'] . "\n";
echo "\n";
echo "Waiting for authentication...";
// Show a spinner while polling
$spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
$i = 0;
while (true) {
echo "\r" . $spinner[$i % count($spinner)];
// ... polling logic ...
$i++;
usleep(100000);
}
```


## Best Practices

1. **Clear User Instructions**
   - Display the verification URL prominently
   - Show the user code in a clear, readable format
   - Consider using QR codes for the verification URL

2. **Proper Error Handling**
   ```php
   try {
       // ... device code logic ...
   } catch (\Exception $e) {
       switch ($e->getMessage()) {
           case 'authorization_pending':
               // Continue polling
               break;
           case 'expired_token':
               // Restart the flow
               break;
           case 'access_denied':
               // User denied the request
               break;
           default:
               // Handle other errors
       }
   }
   ```

3. **Respect Rate Limits**
   - Always honor the polling interval
   - Implement exponential backoff for errors
   - Handle network issues gracefully

## Security Considerations

- Store device codes securely
- Implement proper timeout handling
- Clear sensitive data after use
- Handle network interruptions -->