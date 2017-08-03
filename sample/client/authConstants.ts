// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import { AuthenticationManager } from "../../lib/authenticationManager";

const config: adal.Config = {
  clientId: "4e577d28-b99d-4b38-829a-1adc38b0fab5",
  tenant: "72f988bf-86f1-41af-91ab-2d7cd011db47",
  popUp: false,
  cacheLocation: "localStorage",
  redirectUri: "http://localhost:8080/login.html"
};

export const authManager = new AuthenticationManager(config);