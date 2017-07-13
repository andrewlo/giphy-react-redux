import * as React from 'react';

import { GiphyGif } from '../../types/giphy-gif';

import GifListItem from '../gif-list-item/gif-list-item';
import Button from '../button';
import Spinner from '../spinner/spinner';

interface IGifListProps extends React.Props<any> {
  list: GiphyGif[];
  isLoading: boolean;
  isLoadingMore: boolean;
  canLoadMore: boolean;
  onLoadMore: () => void;
};

export default function GifList({
  list,
  isLoading,
  isLoadingMore,
  canLoadMore,
  onLoadMore,
}: IGifListProps) {

  const loadMore = !isLoading && !isLoadingMore && canLoadMore && (
    <Button className="mt2 black bg-silver col-12" onClick={ onLoadMore } isLoading={ isLoadingMore }>
      { !isLoadingMore ? 'More' : 'Loading...' }
    </Button>);

  const spinner = (isLoading || isLoadingMore) && <Spinner/>;


  const listItems = list && list
    .map((listItem) => <GifListItem key={ listItem.id } gif={ listItem } />);

  return (
    <div>
      <div className="flex flex-wrap">
        { listItems }
      </div>
      { loadMore }
      { spinner }
    </div>
  );
}
