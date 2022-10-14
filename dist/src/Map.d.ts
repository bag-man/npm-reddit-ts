import { Comment } from './types/CommentsResult.type';
import { Post } from './types/models/Post.type';
import { Thread } from './types/ThreadsResult.type';
import { Child } from './types/SearchResult.type';
export declare function map_t1(it: Comment): Post;
export declare function map_t3(it: Thread): Post;
export declare function map_search(it: Child): Post;
