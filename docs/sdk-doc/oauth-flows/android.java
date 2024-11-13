Cidaas cidaas =new Cidaas(yourActivityContext);

cidaas.loginWithBrowser(yourActivityContext, "NullableColorParameterInColorCode", new EventResult<AccessTokenEntity>() {
     @Override
     public void success(AccessTokenEntity result) {
    	//Your Success Code
     }

     @Override
     public void failure(WebAuthError error) {
		//Your Failure Code
     }
});