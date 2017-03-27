import * as React from 'react';
const connect = require('react-redux').connect;
const Link = require('react-router').Link;

import { loginUser, logoutUser } from '../actions/session';
import Button from '../components/button';
import Content from '../components/content';
import LoginModal from '../components/login/login-modal';
import Logo from '../components/logo';
import Navigator from '../components/navigator';
import NavigatorItem from '../components/navigator-item';
import GifDetailsSideBar from '../components/gif-details-side-bar/gif-details-side-bar';

interface IAppProps extends React.Props<any> {
  session: any;
  login: () => void;
  logout: () => void;
};

function mapStateToProps(state) {
  return {
    session: state.session,
    router: state.router,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(loginUser()),
    logout: () => dispatch(logoutUser()),
  };
}

class App extends React.Component<IAppProps, void> {
  render() {
    const { children, session, login, logout } = this.props;

    return (
      <div>
        <Navigator testid="navigator">
          <NavigatorItem mr>
            <Logo />
          </NavigatorItem>
          <NavigatorItem mr>
            <Link to="/">Search</Link>
          </NavigatorItem>
          <NavigatorItem >
            <Link to="/about">About Us</Link>
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
  mapDispatchToProps
)(App);
