import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { TAPi18n } from 'meteor/tap:i18n';
import IconHome from 'material-ui/svg-icons/action/home';
import IconGuides from 'material-ui/svg-icons/action/class';
import IconSubjects from 'material-ui/svg-icons/communication/import-contacts';
import IconBlog from 'material-ui/svg-icons/action/question-answer';
import { withRouter } from 'react-router';
import IconViewList from 'material-ui/svg-icons/action/view-list';
import DrawerSide from '/imports/ui/layouts/DrawerSide.jsx';

class NavBarRightElementLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
    };
    this.handleDrawerState = this.handleDrawerState.bind(this);
    this.handleState = this.handleState.bind(this);
  }

  handleDrawerState() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  handleState(open) {
    this.setState({ drawerOpen: open });
  }

  render() {
    return (
      <div>
        <FlatButton
          label={TAPi18n.__('elements.forlayouts.drawerrightelementlinks.home')}
          icon={<IconHome />}
          onTouchTap={() => this.props.router.push('/home')}
        />
        <FlatButton
          label={TAPi18n.__('elements.forlayouts.drawerrightelementlinks.subjects')}
          icon={<IconSubjects />}
          onTouchTap={() => this.props.router.push('/subjects')}
        />
        <FlatButton
          label={TAPi18n.__('elements.forlayouts.drawerrightelementlinks.guides')}
          icon={<IconGuides />}
          onTouchTap={() => this.props.router.push('/guides')}
        />
        <FlatButton
          label={TAPi18n.__('elements.forlayouts.drawerrightelementlinks.blog')}
          icon={<IconBlog />}
          onTouchTap={() => this.props.router.push('/blog')}
        />
        <FlatButton
          onTouchTap={this.handleDrawerState}
          style={{ minWidth: '36px' }}
          icon={<IconViewList />}
        />
        <DrawerSide
          open={this.state.drawerOpen}
          handleState={this.handleState}
        />
      </div>
    );
  }
}

NavBarRightElementLinks.propTypes = {
  router: PropTypes.object.isRequired,
};

export default withRouter(NavBarRightElementLinks);
