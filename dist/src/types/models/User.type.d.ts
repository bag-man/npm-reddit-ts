import { UserResult } from '../UserResult.type';
export declare type User = Omit<UserResult['data'], 'subreddit'>;
