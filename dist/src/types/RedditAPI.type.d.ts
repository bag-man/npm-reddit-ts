export interface Token {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
}
export interface TokenForm {
    grant_type: string;
    username: string;
    password: string;
}
export interface GenericResponse {
    success: boolean;
}
export declare type JQueryResponse = {
    jquery: Array<any[]>;
} & GenericResponse;
