import { OAuth2Token } from 'httyp';
declare type Token = {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token?: string;
    scope?: string;
};
declare type GrantAuthorizationCode = {
    client_id: string;
    client_secret: string;
    code: string;
    redirect_uri: string;
};
export declare class RedditAuthToken extends OAuth2Token {
    cfg: GrantAuthorizationCode;
    tkn: Token & {
        expires_on: Date;
    };
    constructor(config: GrantAuthorizationCode);
    init(): Promise<void>;
    refresh_token(): Promise<void>;
    async_access_token(): Promise<string>;
}
export {};
