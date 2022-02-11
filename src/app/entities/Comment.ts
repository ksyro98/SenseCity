export interface Comment {
    userName: string;
    text: string;
    replies: Comment[];
    timestamp: number;
    isReply: boolean;
}

