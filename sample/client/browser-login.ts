// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import { authManager } from "./authConstants";

const authContext = authManager.getAuthenticationContext();
authManager.handleWindowCallback();
if (!authContext.getCachedUser()) {
  authContext.login();
}