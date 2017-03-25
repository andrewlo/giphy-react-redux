import * as React from 'react';

import { GiphySearchResult } from '../../types/giphy-search-result';

interface ISearchResultsProps extends React.Props<any> {
  results: GiphySearchResult[];
};

export default function SearchResults({
  results,
}: ISearchResultsProps) {

  if (!results) {
    return null;
  }

  const listItems = results
    .filter((result) => result.images && result.images.preview_gif && result.images.preview_gif.url)
    .map((result) =>
      <img key={ result.id }
        src={ result.images.preview_gif.url }>
      </img>);

  return (
    <div>
      <h3>Search results</h3>
      { listItems }
    </div>
  );
}
