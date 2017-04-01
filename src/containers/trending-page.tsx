import * as React from 'react';
const connect = require('react-redux').connect;

import { giphyTrending } from '../actions/giphy';

import GifList from '../components/gif-list/gif-list';
import Button from '../components/button';
import Spinner from '../components/spinner/spinner';

import { GiphyGif } from '../types/giphy-gif';

interface ITrendingPageProps extends React.Props<any> {
  giphyTrending: () => void;
  trendingResults: GiphyGif[];
  isLoading: boolean;
  isLoadingMore: boolean;
  hasError: boolean;
};

function mapStateToProps(state) {
  return {
    trendingResults: state.trending.trendingResults,
    isLoading: state.trending.isLoading,
    hasError: state.trending.hasError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    giphyTrending: (): void => dispatch(giphyTrending())
  };
}

class TrendingPage extends React.Component<ITrendingPageProps, void> {

  componentDidMount() {
    this.props.giphyTrending();
  }

  render() {
    const { trendingResults, isLoading, hasError } = this.props;

    const spinner = isLoading && <Spinner/>;

    return (
      <div className="p2">
        <GifList list={ trendingResults } />
        { spinner }
      </div>
    );

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrendingPage);
