
export interface Image {
  url: string;
  width: number;
  height: number;
}

export interface GiphyGif {
  id: string;
  images: {
    fixed_height: Image,
    original: Image
  };
  url: string;
};
