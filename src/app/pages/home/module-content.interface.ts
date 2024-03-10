interface topicContent {
    title: string;
    description: string;
}

export interface moduleContent {
    title: string;
    description: string;
    topics : topicContent[]
}