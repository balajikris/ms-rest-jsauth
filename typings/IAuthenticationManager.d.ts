export interface IAuthenticationManager {
    getToken(resource: string): Promise<any>;
    login(): void;
}
