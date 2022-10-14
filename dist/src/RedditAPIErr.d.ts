declare class General extends Error {
    constructor(msg: string);
}
declare class PostLimit extends General {
    constructor(msg: string);
}
declare class ServerBusy extends General {
    constructor(msg: string);
}
declare class Failed extends General {
    constructor(msg: string);
}
declare class Null extends General {
    constructor(msg: string);
}
declare class Unauthorized extends General {
    constructor(msg: string);
}
export declare const RedditAPIErr: {
    General: typeof General;
    PostLimit: typeof PostLimit;
    ServerBusy: typeof ServerBusy;
    Failed: typeof Failed;
    Null: typeof Null;
    Unauthorized: typeof Unauthorized;
};
export {};
