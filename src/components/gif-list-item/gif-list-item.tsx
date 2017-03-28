const connect = require('react-redux').connect;

import * as React from 'react';
import * as classNames from 'classnames';

import { GiphyGif } from '../../types/giphy-gif';
import { giphyDetails } from '../../actions/giphy';
import { sidebarOpen } from '../../actions/ui';

interface IGifListItemProps extends React.Props<any> {
  selectGif: (id: string) => void;
  gif: GiphyGif;
};

function mapDispatchToProps(dispatch) {
  return {
    selectGif: (id: string): void => {
      dispatch(sidebarOpen());
      dispatch(giphyDetails(id));
    }
  };
}

function GifListItem({
  selectGif = null,
  gif = null,
  children = null,
}: IGifListItemProps) {

  const onClick = () => {
    selectGif(gif.id);
  };

  const style = {
    cursor: 'pointer'
  };

  return (
    <img onClick={ onClick } style={ style }
      src={ gif.images.fixed_height.url }>
    </img>
  );
}

export default connect(
  null,
  mapDispatchToProps
)(GifListItem);
