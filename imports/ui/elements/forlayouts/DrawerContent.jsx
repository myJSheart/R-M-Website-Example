import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import { TAPi18n } from 'meteor/tap:i18n';
import IconClose from 'material-ui/svg-icons/content/clear';
import { withRouter } from 'react-router';
import { Grid, Cell } from 'react-mdl';
// import { Routers } from '/imports/ui/layouts/Routers.jsx';
// import { Random } from 'meteor/random';

class DrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
    };
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.open });
  }

  handleClose() {
    this.setState({ open: !this.state.open });
    this.props.sendClose(false);
  }

  render() {
    return (
      <div
        style={{
          textAlign: 'center',
          verticalAlign: 'middle',
          marginTop: '5%',
          opacity: '1',
        }}
      >
        <Grid>
          <Cell offsetDesktop={10} offsetTablet={3} offsetPhone={1} col={2}>
            <IconButton
              tooltip={TAPi18n.__('elements.forlayouts.drawercontent.close')}
              onTouchTap={this.handleClose}
            >
              <IconClose
                color={'white'}
                hoverColor={'black'}
              />
            </IconButton>
          </Cell>
        </Grid>
        <RaisedButton
          labelStyle={{ fontSize: '20px' }}
          buttonStyle={{ height: '60px', backgroundColor: '#1565C0' }}
          label={TAPi18n.__('elements.forlayouts.drawercontent.home')}
          fullWidth
          onTouchTap={() => { this.setState({ open: !this.state.open }); this.props.sendClose(false); this.props.router.push('/home'); }}
        />
        <RaisedButton
          labelStyle={{ fontSize: '20px' }}
          buttonStyle={{ height: '60px', backgroundColor: '#1565C0' }}
          label={TAPi18n.__('elements.forlayouts.drawercontent.subjects')}
          fullWidth
          onTouchTap={() => { this.setState({ open: !this.state.open }); this.props.sendClose(false); this.props.router.push('/subjects'); }}
        />
        <RaisedButton
          labelStyle={{ fontSize: '20px' }}
          buttonStyle={{ height: '60px', backgroundColor: '#1565C0' }}
          label={TAPi18n.__('elements.forlayouts.drawercontent.guides')}
          fullWidth
          onTouchTap={() => { this.setState({ open: !this.state.open }); this.props.sendClose(false); this.props.router.push('/guides'); }}
        />
        <RaisedButton
          labelStyle={{ fontSize: '20px' }}
          buttonStyle={{ height: '60px', backgroundColor: '#1565C0' }}
          label={TAPi18n.__('elements.forlayouts.drawercontent.blog')}
          fullWidth
          onTouchTap={() => { this.setState({ open: !this.state.open }); this.props.sendClose(false); this.props.router.push('/blog'); }}
        />
      </div>
    );
  }
}

DrawerContent.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

DrawerContent.propTypes = {
  open: PropTypes.bool.isRequired,
  sendClose: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,
};

export default withRouter(DrawerContent);
