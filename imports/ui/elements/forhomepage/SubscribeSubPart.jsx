import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { TAPi18n } from 'meteor/tap:i18n';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CheckBox from 'material-ui/Checkbox';
import Snackbar from 'material-ui/Snackbar';
import { Spin } from 'antd';
import { Accounts } from 'meteor/accounts-base';
import { Random } from 'meteor/random';
import _ from 'underscore';

class SubscribeSubPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      valid: false,
      term: false,
      response: '',
      loading: false,
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.handleSnackClose = this.handleSnackClose.bind(this);
  }

  handleTextChange(event) {
    this.setState({ valid: this.validateEmail(event.target.value), email: event.target.value });
  }

  handleCheck(event, checked) {
    this.setState({ term: checked });
  }

  handleSubmit() {
    if (this.state.valid && this.state.term) {
      this.setState({ loading: true });
      Accounts.createUser(
        { username: 'Subscriber', email: this.state.email, password: Random.secret(), profile: { role: 'subscriber' } },
        (error) => {
          this.setState({ loading: false });
          if (_.isUndefined(error)) {
            this.setState({ response: TAPi18n.__('elements.forhomepage.subscribesubpart.success') });
          } else {
            this.setState({ response: error.reason });
          }
        }
      );
    }
  }

  handleSnackClose() {
    this.setState({ response: '' });
  }

  validateEmail(email) {
    // This validation regex comes from 'http://emailregex.com/' which is used by RFC5322
    const regex = /^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    return regex.test(email);
  }

  render() {
    let errorText = '';
    if (!this.state.valid && this.state.email !== '') {
      errorText = TAPi18n.__('elements.forhomepage.subscribesubpart.errortext');
    } else {
      errorText = '';
    }

    const buttonDisabled = this.state.term && this.state.valid && (this.state.email !== '');

    let open = false;
    if (this.state.response === '') {
      open = false;
    } else {
      open = true;
    }

    const container = (
      <Grid>
        <Cell col={8} tablet={6} phone={6}>
          <TextField
            floatingLabelStyle={{ color: 'white' }}
            style={{ width: '100%' }}
            floatingLabelFixed
            floatingLabelText={TAPi18n.__('elements.forhomepage.subscribesubpart.floatingtext')}
            hintText={TAPi18n.__('elements.forhomepage.subscribesubpart.hinttext')}
            onChange={this.handleTextChange}
            value={this.state.email}
            errorText={errorText}
          />
        </Cell>
        <Cell col={4} tablet={2} phone={6} hidePhone>
          <RaisedButton
            style={{ marginLeft: '10px', marginTop: '30px' }}
            secondary
            disabled={!buttonDisabled}
            label={TAPi18n.__('elements.forhomepage.subscribesubpart.buttontext')}
            onTouchTap={this.handleSubmit}
          />
        </Cell>
        <Cell col={12} tablet={8} phone={6}>
          <CheckBox
            label={TAPi18n.__('elements.forhomepage.subscribesubpart.termtext')}
            onCheck={this.handleCheck}
          />
        </Cell>
        <Cell col={4} tablet={2} phone={4} offsetPhone={1} hideDesktop>
          <RaisedButton
            style={{ marginLeft: '10px', marginTop: '30px' }}
            secondary
            disabled={!buttonDisabled}
            label={TAPi18n.__('elements.forhomepage.subscribesubpart.buttontext')}
            onTouchTap={this.handleSubmit}
          />
        </Cell>
        <Snackbar
          open={open}
          message={this.state.response}
          autoHideDuration={5000}
          onRequestClose={this.handleSnackClose}
        />
      </Grid>
    );

    return (
      <div>
        <Spin tip={TAPi18n.__('shared.loading')} spinning={this.state.loading}>{container}</Spin>
      </div>
    );
  }
}

export default SubscribeSubPart;
