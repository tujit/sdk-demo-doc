---
title: 'Introduction'
sidebar_position: 1
# stoplight-id: 2detcuwtr3md0
---

# Guidance for Migration

The problem with apps is basically **Updates of an App is hard to schedule**:

* Update must be available in AppStore which requires approval by the Store Provider. 
* Clients are running on a Device and require an update by the user


## Key Considerations
1. Do you have a authentication?
2. Is this authentication native or browser based?
3. Does the authentication follow the OAuth2 Standard?
4. Is the Wellknown Endpoint (Discovery) requested to retrieve the information about Token-Endpoint, User Endpoint, JWKS.json etc.?

The more questions you can answer with yes, the easier it is to switch e.g. client ids or domains and move directly to cidaas. If the answers are no, then there will be cutbacks. 

## Migration Steps for an OAuth2-based Implementation

We will below construct the scenario:

You have two apps out in the market, one android and one ios App.

The app does has one client_id, which is hardcoded in the application. 

**Step 1:** This client_id must be "exactly same" created in cidaas. 

1. The client_id must remain same
2. The redirect URI must be allowed to this particular client

The next step is, the Token and Authorization-Endpoint might change when switching to cidaas: https://demo.cidaas.de/.well-known/openid-configuration

**Step 2:** Ideally you will find that the wellknown is pulled from remote, and in a quite decent frequency. If not , then change you implementation to use the Wellknown Endpoint of your existing IAM system and parse the JSON to find `token_endpoint` and `authorization_endpoint`.


**Step 3:** Go Live:  Ideally to go live, you can change the existing response of the discovery URL, to the cidaas wellknown data. If this is not possible, a redirect to the cidaas well-known endpoint must be created.



## Migration Scenario for Custom or Native Authentication

If you are having difficulties to directly move to cidaas. 

Another option is to maintain both systems in parallel, whereas all webapps are pointing to cidaas, and the new App Update contains to also use a browserbased Authentication which directly implements the PKCE Flow with cidaas.

During the Migration-Phase the old system will continuously synch the user data to cidaas, so that the user is able to register and login in the app, but also at the same time login whereever he wants to access your services. 