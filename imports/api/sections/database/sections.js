import Mongo from 'meteor/mongo';
import SimpleSchema from 'meteor/aldeed:simple-schema';

const Section = new Mongo.Collection('sections');

// TODO: Complete the right control after setup all schemas.
Section.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Section.schema = new SimpleSchema({
  title: { type: String, maxString: 100, optional: false },
  contentMarkDown: { type: String, optional: true },
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
  updateHistory: {
    type: Array,
    autoValue: () => {
      const contentMarkDown = this.field('contentMarkDown');
      const editor = this.authorId;
      if (contentMarkDown.isSet) {
        if (this.isInsert) {
          return [{
            date: new Date(),
            contentMarkDown: contentMarkDown.value,
            editor,
          }];
        }
        return {
          $push: {
            date: new Date(),
            contentMarkDown: contentMarkDown.value,
            editor,
          },
        };
      }
      return this.unset();
    },
  },
  'updateHistory.$': {
    type: Object,
  },
  'updateHistory.$.date': {
    type: Date,
    optional: true,
  },
  'updateHistory.$.contentMarkDown': {
    type: String,
    optional: true,
  },
  'updateHistory.$.editor': {
    type: String,
    optional: true,
  },
});

Section.attachSchema(Section.schema);

export default Section;
