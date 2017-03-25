import * as React from 'react';
const connect = require('react-redux').connect;

import { giphySearch } from '../actions/giphy';

import SearchResults from '../components/search-results/search-results';
import SearchForm from '../components/search-form/search-form';
import Button from '../components/button';

import { GiphySearchResult } from '../types/giphy-search-result';

interface ISearchPageProps extends React.Props<any> {
  giphySearch: (term: string, pageNum?: number) => void;
  searchResults: GiphySearchResult[];
  isLoading: boolean;
  isLoadingMore: boolean;
  hasError: boolean;
  term: string;
  pageNum: number;
  canLoadMore: boolean;
};

function mapStateToProps(state) {
  return {
    searchResults: state.giphy.searchResults,
    isLoading: state.giphy.isLoading,
    isLoadingMore: state.giphy.isLoadingMore,
    hasError: state.giphy.hasError,
    term: state.giphy.term,
    pageNum: state.giphy.pageNum,
    canLoadMore: state.giphy.canLoadMore,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    giphySearch: (term: string, pageNum?: number): void => dispatch(giphySearch(term, pageNum))
  };
}

class SearchPage extends React.Component<ISearchPageProps, void> {

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.onNext = this.onNext.bind(this);
  }

  componentDidMount() {
    this.props.giphySearch('kittens');
  }

  onSubmit(event) {
    this.props.giphySearch(event.term);
  }

  onNext() {
    this.props.giphySearch(this.props.term, this.props.pageNum + 1);
  }

  render() {
    const { searchResults, isLoading, isLoadingMore, hasError } = this.props;

    const loadMore = this.props.canLoadMore && (
      <Button onClick={ this.onNext } isLoading={ isLoadingMore }>
        { !isLoadingMore ? 'More' : 'Loading...' }
      </Button>);

    return (
      <div className="p2">
        <SearchForm onSubmit={ this.onSubmit }
          isLoading={ isLoading }
          hasError={ hasError } />
        <SearchResults results={ searchResults }/>
        { loadMore }
      </div>
    );

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
