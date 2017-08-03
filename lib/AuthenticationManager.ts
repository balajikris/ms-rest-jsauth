// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

const adal = require("adal-angular");

export class AuthenticationManager {
  /**
   * @prop {adal.Config} authContext - Authentication Contxt supported by adal-js
   */
  private readonly authContext: adal.AuthenticationContext;

  public constructor(config: adal.Config) {
    this.authContext = new adal(config);
  }

  /**
   * Provides the authentication context supported by adal-js.
   */
  getAuthenticationContext() {
    return this.authContext;
  }

  /**
   * Gets the token for the specified resource provided the user is already logged in.
   * @param resource This is the resource uri or token audience for which the token is needed. 
   * For example it can be:
   * - resourcemanagement endpoint "https://management.azure.com/" (default).
   * - management endpoint "https://management.core.windows.net/"
   * - graph endpoint "https://graph.windows.net/", 
   * - sqlManagement endpoint "https://management.core.windows.net:8443/"
   * - keyvault endpoint "https://<keyvault-account-name>.vault.azure.net/"
   * - datalakestore endpoint "https://<datalakestore-account>.azuredatalakestore.net/"
   * - datalakeanalytics endpoint "https://<datalakeanalytics-account>.azuredatalakeanalytics.net/"
   */
  getToken(resource = "https://management.azure.com/"): Promise<string> {
    // Get Cached user needs to be called to ensure that the "this._user" property in adal-js is populated from the token cache.
    this.authContext.getCachedUser();
    return new Promise<string>((resolve, reject) => {
      // adal has inbuilt smarts to acquire token from the cache if not expired. Otherwise sends request to AAD to obtain a new token
      this.authContext.acquireToken(resource, (error, token) => {
        if (error || !token) {
          return reject(error);
        }
        return resolve(token);
      });
    });
  }
}
