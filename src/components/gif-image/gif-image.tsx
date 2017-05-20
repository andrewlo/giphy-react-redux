import * as React from 'react';

interface IGifImageProps {
  src: string;
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
  render() {
    const styles = {
      opacity: this.state.loading ? 0 : 1,
      transition: 'opacity 0.5s',
      height: this.state.loading ? 0 : 'auto',
      width: this.state.loading ? 0 : 'auto'
    };
    const loading = this.state.loading && <div className="gray m3">Loading GIF...</div>;

    return (
      <div className="center">
        { loading }
        <img src={ this.props.src } onLoad={ this.onLoad } style={ styles }/>
      </div>
    );
  }

  onLoad = () => {
    this.setState({ loading: false });
  }
}

export default GifImage;
