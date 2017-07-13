import * as React from 'react';
const connect = require('react-redux').connect;

import { giphySearch } from '../actions/giphy';

import GifList from '../components/gif-list/gif-list';
import SearchForm from '../components/search-form/search-form';
import Alert from '../components/alert';

import { GiphyGif } from '../types/giphy-gif';

interface ISearchPageProps extends React.Props<any> {
  giphySearch: (term: string, pageNum?: number) => void;
  searchResults: GiphyGif[];
  isLoading: boolean;
  isLoadingMore: boolean;
  hasError: boolean;
  term: string;
  pageNum: number;
  canLoadMore: boolean;
};

function mapStateToProps(state) {
  return {
    searchResults: state.search.searchResults,
    isLoading: state.search.isLoading,
    isLoadingMore: state.search.isLoadingMore,
    hasError: state.search.hasError,
    term: state.search.term,
    pageNum: state.search.pageNum,
    canLoadMore: state.search.canLoadMore,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    giphySearch: (term: string, pageNum?: number): void => dispatch(giphySearch(term, pageNum))
  };
}

class SearchPage extends React.Component<ISearchPageProps, void> {

  componentDidMount() {
    this.props.giphySearch('kittens');
  }

  onSubmit = (event) => {
    this.props.giphySearch(event.term);
  }

  onNext = () => {
    this.props.giphySearch(this.props.term, this.props.pageNum + 1);
  }

  render() {
    const { searchResults, isLoading, isLoadingMore, hasError, canLoadMore } = this.props;

    const errorAlert = (
      <Alert isVisible={ hasError }
        status="error">
        Error getting search GIFs
      </Alert>);

    return (
      <div className="p2">
        <SearchForm onSubmit={ this.onSubmit }
          isLoading={ isLoading }
          hasError={ hasError } />
        <GifList list={ searchResults }
          isLoading={ isLoading }
          isLoadingMore={ isLoadingMore }
          canLoadMore={ canLoadMore }
          onLoadMore={ this.onNext } />
      </div>
    );

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
