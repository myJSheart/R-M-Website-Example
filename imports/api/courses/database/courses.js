import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

// Schema -- Courses
const Courses = new Mongo.Collection('courses');

Courses.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return false; },
});

Courses.schema = new SimpleSchema({
  name: { type: String, optional: true },
  tags: { type: [String], optional: true },
  'tags.$.tag': { type: String, maxString: 20, optional: true },
  bio: { type: String, optional: true },
  managerId: { type: String, optional: false },
  semesters: { type: [String], minCount: 1 },
  'semesters.id': { type: String },
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
});

Courses.attachSchema(Courses.schema);

export default Courses;
