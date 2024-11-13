---
sidebar_position: 2
title: Getting Started
description: Get started with the Cidaas SDKs in your application
---

import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import SamplePhp from '!!raw-loader!./oauth-flows/Sample.php';
import SampleJs from '!!raw-loader!./oauth-flows/Sample.js';
import SampleGo from '!!raw-loader!./oauth-flows/Sample.go';
import SampleAndroid from '!!raw-loader!./oauth-flows/android.java';

# Getting Started with Cidaas SDK

This guide will help you integrate the Cidaas SDKs into your application.

## Prerequisites

Before you begin, make sure you have:

<!-- <Tabs>
  <TabItem value="js" label="Javascript" default>

    - PHP 7.4 or higher
    - Composer installed
    - A Cidaas account and access to the admin dashboard
    - Your application registered in the Cidaas dashboard

  </TabItem>
  <TabItem value="php" label="PHP">
    <CodeBlock language="jsx">{SamplePhp}</CodeBlock>
  </TabItem>
  <TabItem value="go" label="Go">
    <CodeBlock language="jsx">{SampleGo}</CodeBlock>
  </TabItem>
   <TabItem value="kotlin" label="Android">
    <CodeBlock language="jsx">{SampleAndroid}</CodeBlock>
  </TabItem>
</Tabs> -->


<Tabs groupId="pre-req">
  <TabItem value="js" label="Javascript">
    - node 14.0 or higher
    - npm installed
  </TabItem>
  <TabItem value="php" label="Php">
   - PHP 7.4 or higher
   - Download and install the composer
  </TabItem>
   <TabItem value="go" label="Go">
   - Go 18.1 or higher
  </TabItem>
   <TabItem value="kotlin" label="Android">
   - minSdkVersion 21
  </TabItem>
</Tabs>

## Installation

Install the Cidaas SDK:

<Tabs groupId="install">
  <TabItem value="js" label="Javascript">

    ```bash
   npm install cidaas-javascript-sdk
   ```

  </TabItem>
  <TabItem value="php" label="Php">

   ```bash
   composer require cidaas/cidaas-php-sdk
   ```
   
  </TabItem>
   <TabItem value="go" label="Go">

   ```bash
   go get https://cidaas.com/cidaas-go-sdk
   ```

   </TabItem>
   <TabItem value="kotlin" label="Android">

   ```xml
   dependencies {
      implementation 'com.github.Cidaas:cidaas-android-sdk:3.0.0'
   }
   ```

   </TabItem>
</Tabs>


## Configuration

### 1. Get Your Credentials

Log in to your Cidaas dashboard and create a new application or select an existing one. You'll need:

- Client ID
- Client Secret
- Redirect URI
- Base URL

### 2. Initialize the SDK

Initialize the SDK

<Tabs>
  <TabItem value="js" label="Javascript" default>
    <CodeBlock language="jsx">{SampleJs}</CodeBlock>
  </TabItem>
  <TabItem value="php" label="PHP">
    <CodeBlock language="jsx">{SamplePhp}</CodeBlock>
  </TabItem>
  <TabItem value="go" label="Go">
    <CodeBlock language="jsx">{SampleGo}</CodeBlock>
  </TabItem>
   <TabItem value="kotlin" label="Android">
    <CodeBlock language="jsx">{SampleAndroid}</CodeBlock>
  </TabItem>
</Tabs>



## Basic Usage

### 1. Implement Login
<Tabs>
  <TabItem value="js" label="Javascript" default>
    <CodeBlock language="jsx">{SampleJs}</CodeBlock>
  </TabItem>
  <TabItem value="php" label="PHP">
    <CodeBlock language="jsx">{SamplePhp}</CodeBlock>
  </TabItem>
  <TabItem value="go" label="Go">
    <CodeBlock language="jsx">{SampleGo}</CodeBlock>
  </TabItem>
   <TabItem value="kotlin" label="Android">
    <CodeBlock language="jsx">{SampleAndroid}</CodeBlock>
  </TabItem>
</Tabs>



### 2. Handle the Callback
<Tabs>
  <TabItem value="js" label="Javascript" default>
    <CodeBlock language="jsx">{SampleJs}</CodeBlock>
  </TabItem>
  <TabItem value="php" label="PHP">
    <CodeBlock language="jsx">{SamplePhp}</CodeBlock>
  </TabItem>
  <TabItem value="go" label="Go">
    <CodeBlock language="jsx">{SampleGo}</CodeBlock>
  </TabItem>
   <TabItem value="kotlin" label="Android">
    <CodeBlock language="jsx">{SampleAndroid}</CodeBlock>
  </TabItem>
</Tabs>




<!-- ## Security Best Practices

1. **Store Tokens Securely**
   ```php
   // Store tokens in secure session
   $_SESSION['token'] = [
       'access_token' => $token->getToken(),
       'refresh_token' => $token->getRefreshToken(),
       'expires' => $token->getExpires(),
   ];
   ```

2. **Validate State Parameter**
   Always verify the state parameter to prevent CSRF attacks.

3. **Use HTTPS**
   Always use HTTPS in production environments.

4. **Handle Token Expiration**
   ```php
   if ($token->hasExpired()) {
       $newToken = $provider->getAccessToken('refresh_token', [
           'refresh_token' => $token->getRefreshToken()
       ]);
   }
   ``` -->
<!-- 
## Error Handling

Implement proper error handling for common scenarios:

```php
try {
$token = $provider->getAccessToken('authorization_code', [
'code' => $GET['code']
]);
} catch (\League\OAuth2\Client\Provider\Exception\IdentityProviderException $e) {
// Handle OAuth errors
echo 'OAuth Error: ' . $e->getMessage();
} catch (\Exception $e) {
// Handle general errors
echo 'Error: ' . $e->getMessage();
}
```

## Next Steps

Now that you have basic authentication working, you can:

1. [Explore different OAuth flows](oauth-flows/overview)
2. Implement additional features:
   - Single Sign-On (SSO)
   - Multi-factor Authentication (MFA)
   - Social Login
3. Set up user management
4. Configure custom scopes and claims -->

## Example Projects

Check out our example implementations:
- [Single Page Application](https://github.com/Cidaas/cidaas-javascript-sdk)
