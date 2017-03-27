const connect = require('react-redux').connect;

import * as React from 'react';
import * as classNames from 'classnames';

import { GiphyGif } from '../../types/giphy-gif';
import { selectGif, giphyDetails } from '../../actions/giphy';

interface IGifListItemProps extends React.Props<any> {
  selectGif: (id: string) => void;
  result: GiphyGif;
};

function mapDispatchToProps(dispatch) {
  return {
    selectGif: (id: string): void => {
      dispatch(selectGif(id));
      dispatch(giphyDetails(id));
    }
  };
}

function GifListItem({
  selectGif = null,
  result = null,
  children = null,
}: IGifListItemProps) {

  const onClick = () => {
    selectGif(result.id);
  };

  const style = {
    cursor: 'pointer'
  };

  return (
    <img onClick={ onClick } style={ style }
      src={ result.images.fixed_height.url }>
    </img>
  );
}

export default connect(
  null,
  mapDispatchToProps
)(GifListItem);
