/**
* 1. Add role after inserting a new user.
*/
import { Roles } from 'meteor/alanning:roles';
import Users from '/imports/api/users/users.js';
import { sendVerifyEmailStudent, sendVerifyEmailSubscriber } from '/imports/api/emails/server/verifyEmail.js';

// TODO: send verify email to users.
Users.after.insert((userId, doc) => {
  Roles.addUsersToRoles(doc._id, doc.profile.role);
  if (doc.profile.role === 'student') {
    sendVerifyEmailStudent({ email: doc.emails[0].address });
  } else if (doc.profile.role === 'subscriber') {
    sendVerifyEmailSubscriber({ email: doc.emails[0].address });
  }
});
