// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import { authManager } from "./authConstants";

const subscriptionId = "<your-subscription-id>";
authManager.getToken().then((t) => {
  let req: RequestInit = {
    method: "GET",
    credentials: "include",
    headers: {
      "accept-language": "en-US",
      "x-ms-client-request-id": "9e932adc-7b1c-4d4b-aab6-984f2923bfa5",
      "Content-Type": "application/json; charset=utf-8",
      "authorization": `Bearer ${t}`
    }
  };
  return fetch(`https://management.azure.com/subscriptions/${subscriptionId}/providers/Microsoft.Storage/storageAccounts?api-version=2015-06-15`, req);
}).then((res) => {
  return res.json();
}).then((parsedResponse) => {
  document.write(JSON.stringify(parsedResponse, null, 2));
  console.dir(parsedResponse, { depth: null });
}).catch((err) => {
  document.write(JSON.stringify(err, null, 2));
  console.dir(err, { depth: null });
});