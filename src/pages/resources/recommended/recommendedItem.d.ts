import {type Timestamp} from "firebase/firestore";

export interface RecommendedItem {
    name: string;
    description: string;
    creationDate: Timestamp;
    imagePath: string;
    link: string;
}