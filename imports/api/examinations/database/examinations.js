import Mongo from 'meteor/mongo';
import SimpleSchema from 'meteor/aldeed:simple-schema';
import Question from '/imports/api/questions/database/questions.js';

const Examination = new Mongo.Collection('examinations');

Examination.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

// Collection -- Quiz
Examination.schema = new SimpleSchema({
  time: { type: Object },
  'time.startAt': { type: Date, optional: false },
  'time.endAt': { type: Date, optional: false },
  questons: { type: [Question], minCount: 1 },
});

Examination.attachSchema(Examination.schema);

export default Examination;
