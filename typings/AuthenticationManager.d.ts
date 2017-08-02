/// <reference types="adal" />
import { IAuthenticationManager } from "./IAuthenticationManager";
export declare class AuthenticationManager implements IAuthenticationManager {
    private readonly authContext;
    constructor(config: adal.Config);
    login(): void;
    getToken(resource?: string): Promise<string>;
    handleWindowCallback(): void;
    getCachedUser(): adal.User;
}
