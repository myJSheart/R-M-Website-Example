import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import { withRouter } from 'react-router';
import NavBarRightElementLinks from '/imports/ui/elements/forlayouts/NavBarRightElementLinks.jsx';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleTitleTouch = this.handleTitleTouch.bind(this);
  }

  handleTitleTouch() {
    this.props.router.push('/home');
  }

  render() {
    return (
      <AppBar
        title="J&R"
        titleStyle={{ color: 'white', fontWeight: '800', fontSize: '36px' }}
        style={{ backgroundColor: '#424242' }}
        iconElementLeft={<div />}
        iconElementRight={<NavBarRightElementLinks />}
        onTitleTouchTap={this.handleTitleTouch}
      />
    );
  }
}

NavigationBar.propTypes = {
  router: PropTypes.object.isRequired,
};

export default withRouter(NavigationBar);
