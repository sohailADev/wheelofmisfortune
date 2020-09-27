const router = require('express').Router();
const bodyParser = require('body-parser');

var jsonParse = bodyParser.json();

let TeamMember = require('../models/teamMember.model');

router.route('/').get((req, res) => {
    TeamMember.find()
        .then(teamMembers => res.json(teamMembers))
        .catch(error => res.status(400).json("Error: " + error));
});

router.route('/findByName').post(jsonParse, (req, res) => {

    TeamMember.find({firstName: req.body.firstName, lastName: req.body.lastName})
    .then(teamMembers => res.json(teamMembers))
    .catch(error => res.status(400).json("Error: " + error));
});


router.route('/add').post(jsonParse,(req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const teamMember = new TeamMember({
        firstName,
        lastName
    });

    teamMember.save()
        .then(() => res.json('Team member added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    TeamMember.findById(req.params.id)
      .then((tm) => res.json(tm))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/:id').delete((req, res) => {
    TeamMember.findByIdAndDelete(req.params.id)
      .then(() => res.json('Record deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').put((req, res) => {
    TeamMember.findByIdAndUpdate(req.params.id, {firstName: req.body.firstName, lastNme: req.body.lastName})
      .then(() => res.json('Record Updated.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;