// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import { AuthenticationManager } from "../../lib/authenticationManager";

const config: adal.Config = {
  clientId: "<clientId of your app>",
  tenant: "<tenantId of your app>",
  popUp: false,
  cacheLocation: "localStorage",
  redirectUri: "http://localhost:8080/login.html"
};

export const authManager = new AuthenticationManager(config);