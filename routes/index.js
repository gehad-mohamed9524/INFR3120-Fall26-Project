var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'StudyCircle' });
});

/* Display the create session page */
router.get('/create', function(req, res) {
  res.render('create', { title: 'Create a Study Session' });
});

/* Display the study groups page */
router.get('/groups', function(req, res) {
  res.render('groups', { title: 'View Study Groups' });
});
module.exports = router;
