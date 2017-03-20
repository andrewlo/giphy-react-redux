import * as React from 'react';

import { GiphySearchResult } from '../../types/giphy-search-result';

interface ISearchResultsProps extends React.Props<any> {
  results: GiphySearchResult[];
};

export default function SearchResults({
  results,
}: ISearchResultsProps) {

  const listItems = results.map((result) =>
    <img key={ result.id }
      src={ result.images.preview_gif.url }>
    </img>);

  return (
    <div>
      <h1>Search results</h1>
      { listItems }
    </div>
  );
}
