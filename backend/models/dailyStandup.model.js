const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const dailyStandupSchema = new Schema({
    _firstToStart : { type: Schema.ObjectId, ref: 'TeamMember' },
    date: {
        type: Date,
        required: true
    }
},
{timestamps: true});

const DailyStandup = mongoose.model('DailyStandup', dailyStandupSchema);

module.exports = DailyStandup;