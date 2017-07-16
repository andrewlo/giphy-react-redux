const connect = require('react-redux').connect;

import * as React from 'react';
import * as classNames from 'classnames';

import { GiphyGif } from '../../types/giphy-gif';
import { giphyDetails } from '../../actions/giphy';
import { sidebarOpen } from '../../actions/ui';
import GifImage from '../gif-image/gif-image';

const Styles =  require('./gif-list-item.css');
const VisibilitySensor = require('react-visibility-sensor');


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

class GifListItem extends React.Component<IGifListItemProps, any> {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  onClick = () => {
    this.props.selectGif(this.props.gif.id);
  }

  onChange = (isVisible) => {
    if (!this.state.visible && isVisible) {
      this.setState({visible: true});
    }
  }

  render() {
    const image = this.props.gif.images.fixed_height;

    const style = {
      cursor: 'pointer',
      padding: 0,
      border: 'none',
      width: `${image.width}px`,
      height: `${image.height}px`,
      opacity: this.state.visible ? 1 : 0,
      transition: '0.5s all'
    };
    const classDef = classNames(Styles['gif-list-item']);

    const imageComponent = this.state.visible && <GifImage image={ image } setLoadingDimensions={ true } />;

    return (
      <VisibilitySensor onChange={ this.onChange } partialVisibility={ true }>
        <button onClick={ this.onClick } style={ style } className={ classDef }>
          { imageComponent }
        </button>
      </VisibilitySensor>
    );
  }

}

export default connect(
  null,
  mapDispatchToProps
)(GifListItem);
