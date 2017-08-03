# Notes:

Recording some information we learnt while trying to use [adal-angular library](https://github.com/AzureAD/azure-activedirectory-library-for-js) to authenticate an app and have it query azure endpoints on our behalf.

1. How should your adal configuration look like?
```javascript
const config: adal.Config = {
  clientId: "your app's client Id",
  tenant: "your app's tenant",
  popUp: false,
  cacheLocation: "localStorage",
  resource: "https://management.azure.com/" //since you are going to query against azure
};
```

2. The page that is loaded after adal-js redirects to after authentication needs to call handleWindowCallback() to complete the handshake.
Until this is done, authentication is not completed.

3. You must call adal-angular's getCachedUser() after authentication flow is complete, to force adal to create the user object and save it.
Without doing this, calling getToken() will simply fail saying "User login required" as adal tries to retrieve "user" object but finds none.

4. Ensure browser does not block scripts or cookies. Please disable all the extensions like adblock, privacybadger, etc. Make sure that your browser stores cookies sent by `https://login.microsoftonline.com/`.

5. use https://jwt.io/ to crack open the token and explore its properties. Mainly look for the token audience property named `"aud"`. The audience should be the resource you will be querying against after being authenticated. it is `management.azure.com` for azure management, `graph.windows.net` for ADgraph and so on.
You cannot use a token issued for audience-A to query against audience-B. If the token audience is the clientId of your app then it is id_token (identity token) issued by ADAL. It is not the access_token that you were probably looking for. 


## Errors and debugging:

1. **Silent sign-in was sent but no user was signed in.**


- **Error response:**
```
AADSTS50058: A silent sign-in request was sent but no user is signed in. The cookies used to represent the user's session were not sent in the request to Azure AD. This can happen if the user is using Internet Explorer or Edge, and the web app sending the silent sign-in request is in different IE security zone than the Azure AD endpoint (login.microsoftonline.com).

Trace ID: 398064ec-25d6-43fc-bfac-a8a9ede90600
Correlation ID: 41c19f51-4e52-400b-be35-f90314167ab3
Timestamp: 2017-08-02 18:33:56Z

index.html:1 Refused to display 'https://login.microsoftonline.com/<tenantId>/oaut…ient-SKU=Js&x-client-Ver=1.0.15&nonce=945da459-1439-4c00-9c8e-12b950521952' in a frame because it set 'X-Frame-Options' to 'deny'.

VM60 bundle-login.js:813 GET https://login.microsoftonline.com/<tenantId>/oaut…ient-SKU=Js&x-client-Ver=1.0.15&nonce=945da459-1439-4c00-9c8e-12b950521952 net::ERR_BLOCKED_BY_RESPONSE
AuthenticationContext.promptUser @ bundle-login.js:813
AuthenticationContext.login @ bundle-login.js:342
login @ bundle-login.js:104
(anonymous) @ bundle-login.js:87
__webpack_require__ @ bundle-login.js:21
Object.defineProperty.value @ bundle-login.js:64
(anonymous) @ bundle-login.js:67
```

- **Diagnosis:** 
  - Data in your localstorage (if thats what you are using) is out of date then clearing it might help.
- **Resolution:** 
  - In our case, this occurred due to a convoluted issue. Chrome was blocking cookies from login.microsoft.com, so a bunch of data weren't being set correctly. 
  - Look for the blocked cookie icon in the addressbar and tweak it to accept cookies from this site.

2. **Two factor auth is required.**

- **Diagnosis:** 
  - You might have this [single sign on extension from Azure AD](https://chrome.google.com/webstore/detail/windows-10-accounts/ppnbnpeolgkicgegkbkbjmhlideopiji/) installed in your browser. 
  - You could have chosen to install this to simplify authentication process or this could have been installed by your IT department.
  - Now consider this: the app skips over 2-FA, and you are developing an app and are working on the authentication flow. 
  - During the token acquisition process, adal figures that you havent 2-FA ed and throws. But you won't ever see the 2FA screen if you have this extension!

- **Resolution:**
  - Remove the extension by following the instructions in a review left by Alex H on the extension in webstore.

