import Mongo from 'meteor/mongo';
import SimpleSchema from 'meteor/aldeed:simple-schema';

const Semester = new Mongo.Collection('semesters');

Semester.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

// Collection Semester
Semester.schema = new SimpleSchema({
  teachers: { type: [String], minCount: 1 },
  'teachers.$.teacherId': { type: String, optional: false },
  'teachers.$.role': { type: String, optional: false },
  time: { type: Object },
  'time.startAt': { type: Date, optional: true },
  'time.endAt': { type: Date, optional: true },
  lectures: { type: [String], minCount: 1 },
  'lectures.$.id': { type: String },
  examinations: { type: [String] },
  'examinations.$.id': { type: String },
  announcements: { type: [String] },
  'announcements.$.id': { type: String },
  sections: { type: [String] },
  'sections.$.id': { type: String },
  students: { type: [String] },
  'students.$.id': { type: String },
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

Semester.attachSchema(Semester.schema);

export default Semester;
