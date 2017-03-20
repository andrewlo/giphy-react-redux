import * as React from 'react';
const connect = require('react-redux').connect;

import { giphySearch } from '../actions/giphy';

import SearchResults from '../components/search-results';
import { GiphySearchResult } from '../types/giphy-search-result';

interface ISearchPageProps extends React.Props<any> {
  giphySearch: (term: string) => void;
  searchResults: GiphySearchResult[];
};

function mapStateToProps(state) {
  return {
    searchResults: state.giphy.searchResults,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    giphySearch: (term: string): void => dispatch(giphySearch(term))
  };
}

class SearchPage extends React.Component<ISearchPageProps, void> {

  componentDidMount() {
    this.props.giphySearch('kittens');
  }

  render() {
    const { searchResults } = this.props;

    return searchResults ? (
      <SearchResults
        results={ searchResults }/>
    ) : ( <div>Loading...</div> );

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
