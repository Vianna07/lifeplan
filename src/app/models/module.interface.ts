interface subTopic {
  title?: string;
  description?: string[];
}

interface Step {
  listStyle?: string;
  list?: string[];
}

interface Topic {
  title?: string;
  description?: string[];
  steps?: Step;
  subTopics?: subTopic[]
}

interface Image {
  src: string;
  alt: string;
  description?: string;
}

interface Video {
  src: string;
  description?: string;
  poster?: Image;
}

export interface Module {
  id?: string;
  title?: string;
  description?: string[];
  topics?: Topic[]
  img?: Image;
  video?: Video;
}
