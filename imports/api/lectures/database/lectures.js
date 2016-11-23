import Mongo from 'meteor/mongo';
import SimpleSchema from 'meteor/aldeed:simple-schema';

const Lecture = new Mongo.Collection('lectures');

Lecture.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

// Collection -- Lecture
Lecture.schema = new SimpleSchema({
  time: { type: Object },
  'time.startAt': { type: Date },
  'time.endAt': { type: Date },
  teachers: { type: [String], minCount: 1 },
  'teachers.$.teacherId': { type: String },
  'teachers.$.roles': { type: String },
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

Lecture.attachSchema(Lecture.schema);
