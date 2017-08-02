/// <reference types="adal" />
import { IAuthenticationManager } from "./IAuthenticationManager";
export declare class AuthenticationManager implements IAuthenticationManager {
    private readonly config;
    private readonly authContext;
    constructor(config: adal.Config);
    login(): void;
    getToken(): Promise<string>;
    handleWindowCallback(): void;
    getCachedUser(): void;
}
