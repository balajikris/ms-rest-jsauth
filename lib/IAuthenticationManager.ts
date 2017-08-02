// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

export interface IAuthenticationManager {
  getToken(resource: string): Promise<any>;
  login(): void;
}
