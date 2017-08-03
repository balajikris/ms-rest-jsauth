/// <reference types="adal" />
export declare class AuthenticationManager {
    /**
     * @prop {adal.Config} authContext - Authentication Contxt supported by adal-js
     */
    private readonly authContext;
    constructor(config: adal.Config);
    /**
     * Provides the authentication context supported by adal-js.
     */
    getAuthenticationContext(): adal.AuthenticationContext;
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
    getToken(resource?: string): Promise<string>;
    /**
     * A simple wrapper around adal-js' handleWindowCallback() method
     * Handles redirection after login operation. Gets access token from url and saves token to the (local/session) storage
     * or saves error in case unsuccessful login.
     */
    handleWindowCallback(): void;
}
