import * as React from 'react';
const connect = require('react-redux').connect;

import { giphySearch } from '../actions/giphy';

import SearchResults from '../components/search-results';
import SearchForm from '../components/search-form/search-form';
import { GiphySearchResult } from '../types/giphy-search-result';

interface ISearchPageProps extends React.Props<any> {
  giphySearch: (term: string) => void;
  searchResults: GiphySearchResult[];
  isLoading: boolean;
  hasError: boolean;
};

function mapStateToProps(state) {
  return {
    searchResults: state.giphy.searchResults,
    isLoading: state.giphy.isLoading,
    hasError: state.giphy.hasError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    giphySearch: (term: string): void => dispatch(giphySearch(term))
  };
}

class SearchPage extends React.Component<ISearchPageProps, void> {

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.giphySearch('kittens');
  }

  onSubmit(event) {
    this.props.giphySearch(event.term);
  }

  render() {
    const { searchResults, isLoading, hasError } = this.props;

    return (
      <div>
        <SearchForm onSubmit={ this.onSubmit }
          isPending={ isLoading }
          hasError={ hasError } />
        { searchResults ? <SearchResults results={ searchResults }/> : <div>Loading...</div>}
      </div>
    );

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
