export interface IAuthenticationManager {
    getToken(): Promise<any>;
    login(): void;
}
