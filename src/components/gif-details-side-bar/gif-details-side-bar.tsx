const connect = require('react-redux').connect;

import * as React from 'react';
import * as classNames from 'classnames';

import { GiphyGif } from '../../types/giphy-gif';

import SideBar from '../side-bar/side-bar';
import Spinner from '../spinner/spinner';
import GifImage from '../gif-image/gif-image';

import { sidebarClose } from '../../actions/ui';

interface IGifDetailsSideBarProps extends React.Props<any> {
  sidebarClose: () => void;
  details: GiphyGif;
  isLoading: boolean;
  sidebarOpen: boolean;
};

function mapStateToProps(state) {
  return {
    details: state.details.gif,
    isLoading: state.details.isLoading,
    sidebarOpen: state.ui.sidebarOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sidebarClose: (): void => dispatch(sidebarClose())
  };
}
function GifDetailsSideBar({
  sidebarClose = null,
  details = null,
  isLoading = false,
  sidebarOpen = false,
}: IGifDetailsSideBarProps) {

  const gif = details && (
    <div className="flex flex-column items-center">
      <div className="mb2">
        <GifImage src={details.images.original.url}/>
      </div>
      <a href={details.url} target="_blank">View in Giphy</a>
    </div>
  );

  return (
    <SideBar open={sidebarOpen} onClose={sidebarClose}>
      <div className="p2">
        { isLoading ? <Spinner/> : gif }
      </div>
    </SideBar>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GifDetailsSideBar);
