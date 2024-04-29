interface Image {
  src: string;
  alt: string;
}

export interface Option {
  img?: Image
  value: string;
  name: string;
}
