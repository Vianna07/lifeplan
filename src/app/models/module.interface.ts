interface subTopic {
  title?: string;
  description?: string;
}

interface Step {
  listStyle?: string;
  list?: string[];
}

export interface Topic {
  title?: string;
  description?: string;
  steps?: Step;
  subTopics?: subTopic[]
}

export interface Module {
  id?: string;
  title?: string;
  description?: string;
  topics?: Topic[]
}
