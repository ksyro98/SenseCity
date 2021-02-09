import { Comment } from './Comment';

export interface Consultation {
    name: string;
    text: string;
    files: string[];
    comments: Comment[];
    follows: boolean;
    rating: number;
    likes: number;
    dislikes: number;
    date: Date;
}
