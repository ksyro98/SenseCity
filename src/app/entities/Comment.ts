export interface Comment {
    user_name: string;
    text: string;
    replies: [Comment];
}
