const router = require('express').Router();
const bodyParser = require('body-parser');
let TeamMember = require('../models/teamMember.model');

var jsonParse = bodyParser.json();

let DailyStandup = require('../models/dailyStandup.model');

router.route('/').get((req, res) => {
        DailyStandup.find()
        .then(dailyStandups => res.json(dailyStandups))
        .catch(error => res.status(400).json("Error: " + error));
});

router.route('/:id').delete((req, res) => {
    DailyStandup.findByIdAndDelete(req.params.id)
      .then(() => res.json('Standup record deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').get((req, res) => {
    DailyStandup.findById(req.params.id)
      .then((standup) => res.json(standup))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/add').post(jsonParse,(req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    TeamMember
    .findOne({firstName: req.body.firstName, lastName: req.body.lastName})
    .then(tm => {
        if (tm == null)
        {
            tm = new TeamMember({
                firstName,
                lastName
            }); 
        }
            tm.save().then(() => 
                {
                    const dailyStandup = new DailyStandup({
                        _firstToStart : tm._id,
                        date: Date.now()
                    });

                    dailyStandup
                    .save()
                    .then(() => res.json("Saved Standup!"))
                    .catch(err => 
                        {
                            throw err;
                        });
                }).catch(err => {
                            throw err;
                });
        }
    )
});

module.exports = router;