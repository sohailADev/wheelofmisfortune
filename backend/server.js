/* eslint-disable no-template-curly-in-string */
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI || "mongodb+srv://****:****@cluster0.np1j2.azure.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose.connect(uri, {useNewUrlParser : true, useCreateIndex : true, useUnifiedTopology:true});

const connection = mongoose.connection;

connection.once('open', () => {

    console.log("Mongoose has opened the Atlas connection");
});

const teamMemberRouter = require('./routes/teamMembers');
const dailyStandupRouter = require('./routes/dailyStandups');

app.use(cors({origin: '*'}));
app.use(express.json());
app.use('/teamMembers', teamMemberRouter);
app.use('/dailyStandups', dailyStandupRouter);

if (process.env.NODE_ENV === 'production')
{
    app.use(express.static('../client/build'));
}

app.listen(port, () => {
    console.log("Listening on port:" + port);
})

