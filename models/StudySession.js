
const mongoose = require('mongoose');

// Define the fields for each study session
const studySessionSchema = new mongoose.Schema({

  // Course code, such as INFR3120U
  course: { type: String, required: true },

  // Topic students will study
  topic: { type: String, required: true },

  // Date and time of the session
  date: { type: String, required: true },
  time: { type: String, required: true },

  // Where the session will take place
  location: { type: String, required: true },

  // Name of the student organizing the session
  organizer: { type: String, required: true }

}, { timestamps: true });

// Export the model so our routes can use it
module.exports = mongoose.model('StudySession', studySessionSchema);