
export interface GiphyGif {
  id: string;
  images: {
    fixed_height: {
      url: string;
    },
    original: {
      url: string;
    }
  };
  url: string;
};
