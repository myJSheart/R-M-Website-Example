import React, { Component, PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import DrawerContent from '/imports/ui/elements/forlayouts/DrawerContent.jsx';
import { withRouter } from 'react-router';

class DrawerSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
    };
    this.handleRequestChange = this.handleRequestChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.open });
  }

  handleRequestChange(open) {
    this.setState({ open });
    this.props.handleState(open);
  }

  handleClose() {
    this.setState({ open: false });
    this.props.handleState(false);
  }

  render() {
    const width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    return (
      <Drawer
        docked={false}
        open={this.state.open}
        onRequestChange={this.handleRequestChange}
        openSecondary
        width={width}
        containerStyle={{ opacity: '0.8', backgroundColor: '#1565C0' }}
      >
        <DrawerContent
          open={false}
          sendClose={this.props.handleState}
          router={this.props.router}
        />
      </Drawer>
    );
  }
}

DrawerSide.propTypes = {
  open: PropTypes.bool.isRequired,
  handleState: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,
};

DrawerContent.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default withRouter(DrawerSide);
