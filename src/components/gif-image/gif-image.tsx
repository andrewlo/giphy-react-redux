import * as React from 'react';

import { Image } from '../../types/giphy-gif';

interface IGifImageProps {
  image: Image;
  setLoadingDimensions?: boolean;
};

interface IGifImageState {
  loading: boolean;
};

class GifImage extends React.Component<IGifImageProps, IGifImageState> {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  randomBgColorClass() {
    const colors = ['bg-teal', 'bg-aqua', 'bg-blue', 'bg-orange', 'bg-olive',
      'bg-lime', 'bg-yellow', 'bg-navy'];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }

  render() {
    const { url, width, height } = this.props.image;

    const containerStyles = {
      width: this.props.setLoadingDimensions ? `${width}px` : null,
      height: this.props.setLoadingDimensions ? `${height}px` : null,
      position: 'relative'
    };

    const loadingStyles = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      opacity: 0.5
    };
    const bgColor = this.randomBgColorClass();

    const loading = this.state.loading &&
      <div className={ bgColor } style={ loadingStyles }></div>;

    const styles = {
      opacity: this.state.loading ? 0 : 1,
      transition: 'opacity 0.5s',
    };
    return (
      <div style={ containerStyles }>
        { loading }
        <img src={ url } onLoad={ this.onLoad } style={ styles }/>
      </div>
    );
  }

  onLoad = () => {
    this.setState({ loading: false });
  }
}

export default GifImage;
