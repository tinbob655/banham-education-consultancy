import type {Timestamp} from "firebase/firestore";

export interface Blog {
    creationDate: Timestamp;
    description: string;
    linkPath?: string;
    linkText?: string;
    title: string;
    imageUrl?: string;
}