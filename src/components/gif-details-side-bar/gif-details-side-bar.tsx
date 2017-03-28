const connect = require('react-redux').connect;

import * as React from 'react';
import * as classNames from 'classnames';

import { GiphyGif } from '../../types/giphy-gif';

import SideBar from '../side-bar/side-bar';

interface IGifDetailsSideBarProps extends React.Props<any> {
  details: GiphyGif;
  isLoading: boolean;
};

function mapStateToProps(state) {
  return {
    details: state.details.gif,
    isLoading: state.details.isLoading,
  };
}

function GifDetailsSideBar({
  details = null,
  isLoading = false,
}: IGifDetailsSideBarProps) {

  const gif = details && <img src={details.images.original.url} />;
  const open = !!details || isLoading;

  return (
    <SideBar open={open}>
      <div className="p2">
        { isLoading ? 'Loading...' : gif }
      </div>
    </SideBar>
  );
}

export default connect(
  mapStateToProps,
)(GifDetailsSideBar);
