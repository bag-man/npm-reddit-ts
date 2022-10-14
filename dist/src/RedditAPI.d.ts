import Http from 'httyp';
import { Post } from './types/models/Post.type';
import { Token } from './types/RedditAPI.type';
import { MeResult } from './types/MeResult.type';
import { SearchResult } from './types/SearchResult.type';
import { User } from './types/models/User.type';
declare type Credentials = {
    user_agent: string;
    o2a?: {
        client_id: string;
        client_secret: string;
        password: string;
        username: string;
    };
    o2a_implicit?: {
        client_id: string;
        client_secret: string;
        redirect_uri: string;
        code: string;
    };
    bearer_token?: string;
};
export default class RedditAPI {
    oauth2: Http;
    constructor(credentials: Credentials);
    set_token(bearer_token: string): void;
    comments(subreddit: string): Promise<Post[]>;
    threads(subreddit: string): Promise<Post[]>;
    reply(thing_id: string, text: string): Promise<void>;
    implicit_token(client_id: string, client_secret: string, redirect_uri: string, code: string): Promise<Token & {
        expires_on: Date;
    }>;
    me(): Promise<MeResult>;
    protected search(username: string, after?: string): Promise<SearchResult>;
    search_all(username: string, max_results?: number): Promise<Post[]>;
    delete(id: string): Promise<void>;
    edit(thing_id: string, text: string): Promise<void>;
    user(username: string): Promise<User>;
    post(thing_id: string): Promise<Post>;
    compose(username: string, subject: string, body: string): Promise<void>;
    trycatch<T>(func: () => Promise<T>): Promise<T>;
}
export {};
