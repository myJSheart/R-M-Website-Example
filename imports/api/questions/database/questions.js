import Mongo from 'meteor/mongo';
import SimpleSchema from 'meteor/aldeed:simple-schema';

const Question = new Mongo.Collection('questions');

Question.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

// Collection -- Question
Question.schema = new SimpleSchema({
  // T/F | Choices | File in blank | Answer a short question
  qType: { type: String, optional: false },
  content: { type: Object },
  'content.question': { type: String },
  'content.answers': { type: [String], minCount: 1 },
  'content.answers.$.answer': { type: String },
  authorId: { type: String, optional: false },
  response: { type: [Object] },
  'response.$.studentId': { type: String },
  'response.$.answers': { type: [String] },
  'response.$.answers.$.answer': { type: String },
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

Question.attachSchema(Question.schema);

export default Question;
