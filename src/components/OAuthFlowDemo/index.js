import React, { useState } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import styles from './styles.module.css';

const FLOW_TYPES = {
  AUTHORIZATION_CODE: 'authorization_code',
  PKCE: 'pkce',
  IMPLICIT: 'implicit',
  DEVICE_CODE: 'device_code',
};

const LANGUAGES = {
  JAVASCRIPT: 'javascript',
  PHP: 'php',
  ANDROID: 'kotlin',
};

const CODE_SNIPPETS = {
  [FLOW_TYPES.AUTHORIZATION_CODE]: {
    [LANGUAGES.JAVASCRIPT]:
      `const options = {
    authority: 'your domain base url',
    client_id: 'your app id',
    redirect_uri: 'your redirect url',
    post_logout_redirect_uri: 'your post logout redirect url',
    scope: 'openid email roles profile',
};
const cidaas = new CidaasSDK.WebAuth(options);
cidaas.loginWithBrowser();
`,

    [LANGUAGES.PHP]:
      `$provider = new Cidaas(
'https://yourcidaasinstance.cidaas.de',
'client id',
'client secret',
'https://yourwebsite/redirectAfterLogin');
$provider->loginWithBrowser();
$parameters = $provider->loginCallback();
if (array_key_exists('code', $parameters)) {
    $loginResultCode = $parameters['code'];     
}
`,

    [LANGUAGES.ANDROID]:
      `cidaas.loginWithBrowser(
yourActivityContext,
"NullableColorParameterInColorCode",
new EventResult<AccessTokenEntity>()
{
     @Override
     public void success(AccessTokenEntity result) {
    	//Your Success Code
     }

     @Override
     public void failure(WebAuthError error) {
		//Your Failure Code
     }
}
);`
  },

  [FLOW_TYPES.PKCE]: {
    [LANGUAGES.JAVASCRIPT]:
      `const login = async () => {
  await auth.loginWithPKCE({
    redirect_uri: window.location.origin,
    code_challenge_method: 'S256'
  });
};`,

    [LANGUAGES.PHP]:
      `function login() {
  $auth->loginWithPKCE([
    'redirect_uri' => 'http://localhost:8000',
    'code_challenge_method' => 'S256'
  ]);
}`,

    [LANGUAGES.ANDROID]:
      `fun login() {
  auth.loginWithPKCE(
    redirectUri = "com.example.app:/callback",
    codeChallengeMethod = "S256"
  )
}`
  },

  [FLOW_TYPES.IMPLICIT]: {
    [LANGUAGES.JAVASCRIPT]:
      `const login = async () => {
  await auth.loginWithImplicit({
    redirect_uri: window.location.origin,
    response_type: 'token'
  });
};`,

    [LANGUAGES.PHP]:
      `function login() {
  $auth->loginWithImplicit([
    'redirect_uri' => 'http://localhost:8000',
    'response_type' => 'token'
  ]);
}`,

    [LANGUAGES.ANDROID]:
      `fun login() {
  auth.loginWithImplicit(
    redirectUri = "com.example.app:/callback",
    responseType = "token"
  )
}`
  },

  [FLOW_TYPES.DEVICE_CODE]: {
    [LANGUAGES.JAVASCRIPT]:
      `const login = async () => {
  const response = await auth.requestDeviceCode();
  console.log("Please enter code:", response.user_code);
  await auth.loginWithDeviceCode(response.device_code);
};`,

    [LANGUAGES.PHP]:
      `function login() {
  $response = $auth->requestDeviceCode();
  echo "Please enter code: " . $response->user_code;
  $auth->loginWithDeviceCode($response->device_code);
}`,

    [LANGUAGES.ANDROID]:
      `fun login() {
  val response = auth.requestDeviceCode()
  println("Please enter code: " + response.userCode)
  auth.loginWithDeviceCode(response.deviceCode)
}`
  }
};

export default function OAuthFlowDemo() {
  const [selectedFlow, setSelectedFlow] = useState(FLOW_TYPES.AUTHORIZATION_CODE);
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES.JAVASCRIPT);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CODE_SNIPPETS[selectedFlow][selectedLanguage]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.flowSelector}>
        {Object.entries(FLOW_TYPES).map(([key, value]) => (
          <button
            key={value}
            className={`${styles.flowButton} ${selectedFlow === value ? styles.selected : ''}`}
            onClick={() => setSelectedFlow(value)}
          >
            {key.replace(/_/g, ' ')}
          </button>
        ))}
      </div>

      {/* <div className={styles.codeContainer}>
        <div className={styles.codeHeader}>
          <div className={styles.languageSelector}>
            {Object.entries(LANGUAGES).map(([key, value]) => (
              <button
                key={value}
                className={`${styles.languageButton} ${selectedLanguage === value ? styles.selected : ''}`}
                onClick={() => setSelectedLanguage(value)}
              >
                <i>{key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}</i>
              </button>
            ))}
          </div>
          <button onClick={handleCopy} className={styles.copyButton}>
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <CodeBlock language={selectedLanguage}>
          {CODE_SNIPPETS[selectedFlow][selectedLanguage]}
        </CodeBlock>
      </div> */}
    </div>
  );
}