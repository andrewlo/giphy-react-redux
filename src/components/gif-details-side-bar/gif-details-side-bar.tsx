const connect = require('react-redux').connect;

import * as React from 'react';
import * as classNames from 'classnames';

import { GiphyGif } from '../../types/giphy-gif';

import SideBar from '../side-bar/side-bar';

import { selectGif } from '../../actions/giphy';

interface IGifDetailsSideBarProps extends React.Props<any> {
  selectNone: () => void;
  details: GiphyGif;
  isLoading: boolean;
};

function mapStateToProps(state) {
  return {
    details: state.details.gif,
    isLoading: state.details.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectNone: (): void => dispatch(selectGif(null))
  };
}
function GifDetailsSideBar({
  selectNone = null,
  details = null,
  isLoading = false,
}: IGifDetailsSideBarProps) {

  const gif = details && (
    <div className="flex flex-column items-center">
      <img src={details.images.original.url} className="mb2" />
      <a href={details.url} target="_blank">View in Giphy</a>
    </div>
  );
  const open = !!details || isLoading;

  const onClose = () => {
    if (!isLoading) {
      selectNone();
    }
  };

  return (
    <SideBar open={open} onClose={onClose}>
      <div className="p2">
        { isLoading ? 'Loading...' : gif }
      </div>
    </SideBar>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GifDetailsSideBar);
