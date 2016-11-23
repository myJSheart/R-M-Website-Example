import Mongo from 'meteor/mongo';
import SimpleSchema from 'meteor/aldeed:simple-schema';

const Announcement = new Mongo.Collection('announcements');

Announcement.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Announcement.schema = new SimpleSchema({
  title: { type: String, optional: false },
  contentMarkDown: { type: String, optional: false },
  authorId: { type: String, optional: false },
  createdAt: {
    type: Date,
    autoValue: () => {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return { $setOnInsert: new Date() };
      }
      return this.unset();
    },
  },
  published: { type: Boolean, optional: false, defaultValue: false },
});

Announcement.attachSchema(Announcement.schema);

export default Announcement;
