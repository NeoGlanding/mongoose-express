const express = require('express');
const app = express();
const mentorRouter = require('./router/mentorRouter');

app.use(express.json());

app.use('/api/mentors', mentorRouter);

module.exports = app;