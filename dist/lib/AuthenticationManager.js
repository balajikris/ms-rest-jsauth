// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
const adal = require("adal-angular");
export class AuthenticationManager {
    constructor(config) {
        this.authContext = new adal(config);
    }
    login() {
        this.authContext.login();
    }
    getToken(resource = "https://management.azure.com/") {
        return new Promise((resolve, reject) => {
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
//# sourceMappingURL=AuthenticationManager.js.map