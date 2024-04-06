interface subTopic {
  title: string;
  description: string;
}

export interface Topic {
  title: string;
  description?: string;
  steps?: string[];
  subTopics?: subTopic[]
}

export interface Module {
  id?: string;
  title: string;
  description?: string;
  topics?: Topic[]
}
