const connect = require('react-redux').connect;

import * as React from 'react';
import * as classNames from 'classnames';

import { GiphyGif } from '../../types/giphy-gif';
import { giphyDetails } from '../../actions/giphy';
import { sidebarOpen } from '../../actions/ui';
import GifImage from '../gif-image/gif-image';

const Styles =  require('./gif-list-item.css');


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

  const image = gif.images.fixed_height;

  const style = {
    cursor: 'pointer',
    padding: 0,
    border: 'none',
    width: `${image.width}px`,
    height: `${image.height}px`
  };
  const classDef = classNames(Styles['gif-list-item']);

  return (
    <button onClick={ onClick } style={ style } className={ classDef }>
      <GifImage image={ image } setLoadingDimensions={ true } />
    </button>
  );
}

export default connect(
  null,
  mapDispatchToProps
)(GifListItem);
