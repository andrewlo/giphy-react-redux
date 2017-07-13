import * as React from 'react';
const connect = require('react-redux').connect;

import { giphyTrending } from '../actions/giphy';

import GifList from '../components/gif-list/gif-list';
import Alert from '../components/alert';

import { GiphyGif } from '../types/giphy-gif';

interface ITrendingPageProps extends React.Props<any> {
  giphyTrending: (pageNum?: number) => void;
  trendingResults: GiphyGif[];
  isLoading: boolean;
  isLoadingMore: boolean;
  hasError: boolean;
  pageNum: number;
  canLoadMore: boolean;
};

function mapStateToProps(state) {
  return {
    trendingResults: state.trending.trendingResults,
    isLoading: state.trending.isLoading,
    isLoadingMore: state.trending.isLoadingMore,
    hasError: state.trending.hasError,
    pageNum: state.trending.pageNum,
    canLoadMore: state.trending.canLoadMore,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    giphyTrending: (pageNum?: number): void => dispatch(giphyTrending(pageNum))
  };
}

class TrendingPage extends React.Component<ITrendingPageProps, void> {

  componentDidMount() {
    this.props.giphyTrending();
  }

  onNext = () => {
    this.props.giphyTrending(this.props.pageNum + 1);
  }

  render() {
    const { trendingResults, isLoading, isLoadingMore, hasError, canLoadMore } = this.props;

    const errorAlert = (
      <Alert isVisible={ hasError }
        status="error">
        Error getting trending GIFs
      </Alert>);

    return (
      <div className="p2">
        { errorAlert }
        <GifList list={ trendingResults }
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
)(TrendingPage);
