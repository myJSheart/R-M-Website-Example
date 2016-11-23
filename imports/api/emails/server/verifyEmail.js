/**
* Send verify emails
*/
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { Accounts } from 'meteor/accounts-base';
import { mjml2html } from 'mjml';
import Users from '/imports/api/users/users.js';
import { TAPi18n } from 'meteor/tap:i18n';
import { Email } from 'meteor/email';
import buildEmail from '/imports/api/emails/server/buildEmail.js';

/**
* url should be an English word, e.g. 'verify'
*/
const urlGenerator = ({ task, token, url }) => {
  const parameters = `?task=${task}&token=${token}`;
  const path = `${url}${parameters}`;
  return Meteor.absoluteUrl(path);
};

// Generate a verification email for students.
const buildVerifyEmailStudent = ({ name, actionsUrl }) => {
  const title = `${TAPi18n.__('server.verifyemail.student.title')}${name}`;
  const content = TAPi18n.__('server.verifyemail.student.content');
  const actionsName = TAPi18n.__('server.verifyemail.student.actions');
  return buildEmail({ title, content, actionsName, actionsUrl });
};

// Generate a verification email for subscribers.
export const buildVerifyEmailSubscriber = ({ name, actionsUrl }) => {
  const title = `${TAPi18n.__('server.verifyemail.student.title')}${name}`;
  const content = TAPi18n.__('server.verifyemail.subscriber.content');
  const actionsName = TAPi18n.__('server.verifyemail.subscriber.actions');
  return buildEmail({ title, content, actionsName, actionsUrl });
};

/**
* Send verification emails to students
* 1. Check whether the user exists.
* 2. Check whether this email has been verified.
* 3. Check whether this email is being verified (token exists).
* If a token exists, send this token directly, else generate a new token.
*/
export const sendVerifyEmailStudent = ({ email }) => {
  const user = Accounts.findUserByEmail(email);
  if (!user) throw new Meteor.Error(404, 'User Not Found');
  const record = user.emails.filter(e => e.address === email)[0];
  if (record.verified) throw new Meteor.Error(403, 'Already Verified');
  let token;
  if (user.services.email
    && user.services.email.verificationTokens
    && user.services.email.verificationTokens.length > 0) {
    const m = user.services.email.verificationTokens.filter(r => r.email === email);
    if (m.length > 0) token = m[0].token;
  }

  if (!token) {
    token = Random.secret();
    const tokenRecord = {
      token,
      address: email,
      when: new Date(),
    };
    if (!user.services.email) user.services.email = {};
    if (!user.services.email.verificationTokens) {
      user.services.email.verificationTokens = [];
    }
    user.services.email.verificationTokens.push(tokenRecord);
    Users.update(user._id, { $push: { 'services.email.verificationTokens': tokenRecord } });
  }

  const url = urlGenerator({ task: 'verifyStudent', token, url: 'modem' });
  const html = mjml2html(buildVerifyEmailStudent({ name: user.username, actionsUrl: url })).html;
  const emailObject = {
    from: Meteor.settings.public.email,
    to: email,
    subject: TAPi18n.__('server.verifyemail.subject'),
    html,
  };
  Email.send(emailObject);
  // console.log(`Send Verify Email to ${email}`);
};

/**
* Send verification email to subscribers
* 1. Check whether the user exists.
* 2. Check whether this email has been verified.
* 3. Check whether this email is being verified (token exists).
* If a token exists, send this token directly, else generate a new token.
*/
export const sendVerifyEmailSubscriber = ({ email }) => {
  const user = Accounts.findUserByEmail(email);
  if (!user) throw new Meteor.Error(404, 'User not found');

  const record = user.emails.filter(e => e.email === email);
  if (record.verified) throw new Meteor.Error(403, 'Already Verified');

  let token;
  if (user.services.email
    && user.services.email.verificationTokens
    && user.services.email.verificationTokens.length > 0) {
    const m = user.services.email.verificationTokens.filter(r => r.email === email);
    if (m.length > 0) token = m[0].token;
  }

  if (!token) {
    token = Random.secret();
    const tokenRecord = {
      token,
      address: email,
      when: new Date(),
    };
    if (!user.services.email) user.services.email = {};
    if (!user.services.email.verificationTokens) {
      user.services.email.verificationTokens = [];
    }
    user.services.email.verificationTokens.push(tokenRecord);
    Users.update(user._id, { $push: { 'services.email.verificationTokens': tokenRecord } });
  }

  const url = Meteor.settings.public.siteUrl;

  const name = email;

  const html = mjml2html(buildVerifyEmailSubscriber({ name, actionsUrl: url })).html;
  const emailObject = {
    from: Meteor.settings.public.email,
    to: email,
    subject: TAPi18n.__('server.verifyemail.subscriber.subject'),
    html,
  };
  Email.send(emailObject);
  console.log(`Send Verify Email to ${email}`);
};
