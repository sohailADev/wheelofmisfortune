const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teamMemberSchema = new Schema({
    firstName : {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 3
    },
    lastName : {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 3
    }
},
{timestamps: true});

const TeamMember = mongoose.model('TeamMember', teamMemberSchema);

module.exports = TeamMember;