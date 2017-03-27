import * as React from 'react';

import { GiphyGif } from '../../types/giphy-gif';

import GifListItem from '../gif-list-item/gif-list-item';

interface IGifListProps extends React.Props<any> {
  list: GiphyGif[];
};

export default function GifList({
  list,
}: IGifListProps) {

  if (!list) {
    return null;
  }

  const listItems = list
    .map((listItem) => <GifListItem key={ listItem.id } result={listItem} />);

  return (
    <div>
      { listItems }
    </div>
  );
}
