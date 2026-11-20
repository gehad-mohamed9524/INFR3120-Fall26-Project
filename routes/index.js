var express = require('express');
var router = express.Router();

/* Import the StudySession model to save and retrieve sessions from MongoDB */
const StudySession = require('../models/StudySession');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'StudyCircle' });
});

/* Display the create session page */
router.get('/create', function(req, res) {
  res.render('create', { title: 'Create a Study Session' });
});


/* Handle the study session form submission */
router.post('/create', async function(req, res) {

  try {
    // Get the information submitted by the student
    const { course, topic, date, time, location, organizer } = req.body;

    // Check that all required fields are filled in
    if (!course || !topic || !date || !time || !location || !organizer) {
      return res.status(400).send('Please fill in all fields.');
    }

    // Create and save a new study session in MongoDB Atlas
    const newSession = await StudySession.create({
      course,
      topic,
      date,
      time,
      location,
      organizer
    });

    // Confirm that the session was saved successfully
    console.log('Study session saved:', newSession._id);

    // Redirect the student to the study groups page
    res.redirect('/groups');

  } catch (error) {
    // Display an error if the session cannot be saved
    console.error('Error creating study session:', error);
    res.status(500).send('Unable to create study session.');
  }

});


/* Display the study groups page */
router.get('/groups', function(req, res) {
  res.render('groups', { title: 'View Study Groups' });
});
module.exports = router;
