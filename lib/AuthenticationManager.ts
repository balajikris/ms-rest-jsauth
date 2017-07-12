// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

/// <reference path="../node_modules/@types/adal/index.d.ts" />

import { IAuthenticationManager } from "./IAuthenticationManager";

export class AuthenticationManager implements IAuthenticationManager {

  private readonly authContext: adal.AuthenticationContext;
  private readonly loggedIn: boolean;

  public constructor(private readonly config: adal.Config) {
    this.authContext = new AuthenticationContext(config);

    const loggedInUserInfo = this.authContext.getCachedUser();

    if (!loggedInUserInfo) {
      this.authContext.login();
    } else {
      this.loggedIn = true;
    }
  }

  login(): void {
    this.authContext.login();
  }

  getToken(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      // adal has inbuilt smarts to acquire token from the cache if not expired. Otherwise sends request to AAD to obtain a new token
      this.authContext.acquireToken(this.config.resource, (error, token) => {
          if (error || !token) {
            return reject(error);
          }
          return resolve(token);
        });
    });
  }

}
