import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// Action creators and helpers
// import { establishCurrentUser } from '../modules/auth';
// import { isServer } from '../store';

import Navbar from './components/Navbar';
import Routes from './routes';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  handleContextRef = contextRef => this.setState({ contextRef });

  render() {
    const { contextRef } = this.state;

    return (
      <div id="app" ref={this.handleContextRef}>
        <Navbar
          isAuthenticated={this.props.isAuthenticated}
          current={this.props.location.pathname}
          visible={this.state.visible}
          handlePusher={this.handlePusher}
          handleToggle={this.handleToggle}
          context={contextRef}
          contents={<Routes />}
          footers={<Footer />}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: false
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(App)
);