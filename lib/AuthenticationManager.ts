// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

const adal = require("adal-angular");

import { IAuthenticationManager } from "./IAuthenticationManager";

export class AuthenticationManager implements IAuthenticationManager {

  private readonly authContext: adal.AuthenticationContext;

  public constructor(config: adal.Config) {
    this.authContext = new adal(config);
  }

  login(): void {
    this.authContext.login();
  }

  getToken(resource = "https://management.azure.com/"): Promise<string> {
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
  handleWindowCallback() {
    this.authContext.handleWindowCallback();
  }
  getCachedUser() {
    return this.authContext.getCachedUser();
  }
}
