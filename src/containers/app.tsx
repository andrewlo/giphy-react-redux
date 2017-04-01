import * as React from 'react';
const connect = require('react-redux').connect;
const Link = require('react-router').Link;

import Button from '../components/button';
import Content from '../components/content';
import LoginModal from '../components/login/login-modal';
import Logo from '../components/logo';
import Navigator from '../components/navigator';
import NavigatorItem from '../components/navigator-item';
import GifDetailsSideBar from '../components/gif-details-side-bar/gif-details-side-bar';

interface IAppProps extends React.Props<any> {

};

function mapStateToProps(state) {
  return {
    router: state.router,
  };
}

class App extends React.Component<IAppProps, void> {
  render() {
    const { children } = this.props;
    const linkClass = 'black';
    const linkActiveClass = 'green';
    const linkStyle = {
      textDecoration: 'none'
    };

    return (
      <div>
        <Navigator testid="navigator">
          <NavigatorItem mr>
            <Logo />
          </NavigatorItem>
          <NavigatorItem mr>
            <Link to="/" className={linkClass} style={linkStyle}
              onlyActiveOnIndex activeClassName={linkActiveClass}>
              <i className="fa fa-search fa-lg mr1"></i>Search
            </Link>
          </NavigatorItem>
          <NavigatorItem >
            <Link to="/about" className={linkClass} style={linkStyle}
              activeClassName={linkActiveClass}>
              <i className="fa fa-user fa-lg mr1"></i>About
            </Link>
          </NavigatorItem>
          <div className="flex flex-auto"></div>
        </Navigator>
        <Content isVisible={ true }>
          { children }
        </Content>
        <GifDetailsSideBar></GifDetailsSideBar>
      </div>
    );
  };
};

export default connect(
  mapStateToProps,
)(App);
