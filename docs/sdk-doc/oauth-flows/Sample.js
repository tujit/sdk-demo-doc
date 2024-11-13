const options = {
  authority: 'your domain base url',
  client_id: 'your app id',
  redirect_uri: 'your redirect url',
  post_logout_redirect_uri: 'your post logout redirect url',
  scope: 'openid email roles profile',
}
const cidaas = new CidaasSDK.WebAuth(options);
cidaas.loginWithBrowser();
