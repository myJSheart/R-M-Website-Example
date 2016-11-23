/**
* Schema -- Users.
* 1. Defination
*/
import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Users = Meteor.users;

Users.allow({
  insert() { return true; },
  update(userId) { return userId === Meteor.userId(); },
  remove() { return false; },
});

Users.schema = new SimpleSchema({
  username: { type: String, optional: false },
  emails: { type: [Object], minCount: 1, maxCount: 5 },
  'emails.$.address': { type: String, regEx: SimpleSchema.RegEx.Email, optional: false },
  'emails.$.verified': { type: Boolean, defaultValue: false, optional: false },
  roles: { type: [String], optional: true },
  services: { type: Object, optional: true, blackbox: true },
  profile: { type: Object, optional: true },
  'profile.name': { type: String, optional: true },
  'profile.url': { type: String, regEx: SimpleSchema.RegEx.Url, optional: true },
  'profile.bio': { type: String, optional: true },
  'profile.email': { type: String, regEx: SimpleSchema.RegEx.Email, optional: true },
  'profile.unit': { type: String, optional: true },
  'profile.location': { type: String, optional: true },
  'profile.role': { type: String, optional: true },
  createdAt: {
    type: Date,
    denyUpdate: true,
    autoValue: () => {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return { $setOnInsert: new Date() };
      }
      return undefined;
    },
  },
  updatedAt: {
    type: Date,
    autoValue: () => {
      if (this.isUpdate) {
        return new Date();
      }
      return undefined;
    },
    denyInsert: true,
    optional: true,
  },
});

Users.attachSchema(Users.schema);

export default Users;
