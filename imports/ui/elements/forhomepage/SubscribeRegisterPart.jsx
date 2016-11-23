import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import { Spin } from 'antd';
import { TAPi18n } from 'meteor/tap:i18n';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import zxcvbn from 'zxcvbn';
import { Accounts } from 'meteor/accounts-base';
import _ from 'underscore';

class SubscribeRegisterPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      usernameValid: false,
      emailValid: false,
      passwordValid: false,
      confirmPasswordValid: false,
      term: false,
      respond: '#',
      loading: false,
    };
    this.handleUserName = this.handleUserName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validateUsername = this.validateUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleTerm = this.handleTerm.bind(this);
    this.handleSnackClose = this.handleSnackClose.bind(this);
  }

  handleRegister() {
    this.setState({ loading: true });
    const email = this.state.email;
    const username = this.state.username;
    const password = this.state.password;
    const profile = { role: 'student' };
    Accounts.createUser({ email, username, password, profile }, (error) => {
      this.setState({ loading: false });
      if (_.isUndefined(error)) {
        this.setState({ respond: TAPi18n.__('elements.forhomepage.subscriberegisterpart.respond.success') });
      } else {
        console.log(error.reason);
        this.setState({ respond: error.reason });
      }
    });
  }

  handleUserName(event) {
    if (this.validateUsername(event.target.value.trim())) {
      this.setState({ usernameValid: true });
    } else {
      this.setState({ usernameValid: false });
    }
    this.setState({ username: event.target.value });
  }

  handleEmail(event) {
    if (this.validateEmail(event.target.value)) {
      this.setState({ emailValid: true });
    } else {
      this.setState({ emailValid: false });
    }
    this.setState({ email: event.target.value });
  }

  handlePassword(event) {
    const result = zxcvbn(event.target.value);
    if (result.score > 2) {
      this.setState({ passwordValid: true });
    } else {
      this.setState({ passwordValid: false });
    }
    this.setState({ password: event.target.value });

    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ confirmPasswordValid: false });
    }
  }

  handleConfirmPassword(event) {
    if (event.target.value === this.state.password && this.state.password !== '') {
      this.setState({ confirmPasswordValid: true });
    } else {
      this.setState({ confirmPasswordValid: false });
    }
    this.setState({ confirmPassword: event.target.value });
  }

  handleTerm(event, checked) {
    this.setState({ term: checked });
  }

  handleSnackClose() {
    this.setState({ respond: '#' });
  }

  validateUsername(username) {
    const regex = /^[a-zA-Z0-9-_\s]{1,50}$/;
    return regex.test(username);
  }

  validateEmail(email) {
    // This validation regex comes from 'http://emailregex.com/' which is used by RFC5322
    const regex = /^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    return regex.test(email);
  }

  render() {
    let usernameErrorText = '';
    let emailErrorText = '';
    let passwordErrorText = '';
    let confirmPasswordErrorText = '';
    let buttonDisabled = true;

    if (!this.state.usernameValid && this.state.username !== '') {
      usernameErrorText = TAPi18n.__('elements.forhomepage.subscriberegisterpart.username.errortext');
    }

    if (this.state.emailValid === false && this.state.email !== '') {
      emailErrorText = TAPi18n.__('elements.forhomepage.subscriberegisterpart.email.errortext');
    }

    if (this.state.passwordValid === false && this.state.password !== '') {
      passwordErrorText = TAPi18n.__('elements.forhomepage.subscriberegisterpart.password.errortext');
    }

    if (this.state.confirmPasswordValid === false && this.state.confirmPassword !== '') {
      confirmPasswordErrorText = TAPi18n.__('elements.forhomepage.subscriberegisterpart.confirmpassword.errortext');
    }

    if (this.state.username !== ''
      && this.state.emailValid
      && this.state.passwordValid
      && this.state.confirmPasswordValid
      && this.state.term) {
      buttonDisabled = false;
    }

    let respond = { open: false };
    if (this.state.respond !== '#') {
      respond = { open: true, message: this.state.respond };
    }
    const style = { width: '100%' };

    const container = (
      <Grid>
        <Cell col={12}>
          <TextField
            style={style}
            hintText={TAPi18n.__('elements.forhomepage.subscriberegisterpart.username.hinttext')}
            floatingLabelText={TAPi18n.__('elements.forhomepage.subscriberegisterpart.username.floatingtext')}
            floatingLabelStyle={{ color: 'white' }}
            value={this.state.username}
            onChange={this.handleUserName}
            errorText={usernameErrorText}
          />
        </Cell>
        <Cell col={12}>
          <TextField
            hintText={TAPi18n.__('elements.forhomepage.subscriberegisterpart.email.hinttext')}
            floatingLabelText={TAPi18n.__('elements.forhomepage.subscriberegisterpart.email.floatingtext')}
            style={style}
            floatingLabelStyle={{ color: 'white' }}
            value={this.state.email}
            onChange={this.handleEmail}
            errorText={emailErrorText}
          />
        </Cell>
        <Cell col={12}>
          <TextField
            hintText={TAPi18n.__('elements.forhomepage.subscriberegisterpart.password.hinttext')}
            floatingLabelText={TAPi18n.__('elements.forhomepage.subscriberegisterpart.password.floatingtext')}
            style={style}
            type={'password'}
            floatingLabelStyle={{ color: 'white' }}
            value={this.state.password}
            onChange={this.handlePassword}
            errorText={passwordErrorText}
          />
        </Cell>
        <Cell col={12}>
          <TextField
            hintText={TAPi18n.__('elements.forhomepage.subscriberegisterpart.confirmpassword.hinttext')}
            floatingLabelText={TAPi18n.__('elements.forhomepage.subscriberegisterpart.confirmpassword.floatingtext')}
            style={style}
            type={'password'}
            floatingLabelStyle={{ color: 'white' }}
            value={this.state.confirmPassword}
            onChange={this.handleConfirmPassword}
            errorText={confirmPasswordErrorText}
          />
        </Cell>
        <Cell col={12}>
          <Checkbox
            label={TAPi18n.__('elements.forhomepage.subscriberegisterpart.term')}
            onCheck={this.handleTerm}
          />
        </Cell>
        <Cell col={2} tablet={2} phone={2} offsetDesktop={4} offsetTablet={3} offsetPhone={1}>
          <RaisedButton
            secondary
            label={TAPi18n.__('elements.forhomepage.subscriberegisterpart.submit')}
            disabled={buttonDisabled}
            onTouchTap={this.handleRegister}
          />
        </Cell>
        <Snackbar
          open={respond.open}
          message={this.state.respond}
          autoHideDuration={5000}
          onRequestClose={this.handleSnackClose}
        />
      </Grid>
    );
    return (
      <Spin tip={TAPi18n.__('shared.loading')} spinning={this.state.loading}>{container}</Spin>
    );
  }
}

export default SubscribeRegisterPart;
