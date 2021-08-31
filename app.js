const express = require('express');
const app = express();
const mentorRouter = require('./router/mentorRouter');

app.use(express.json());

app.use('/api/mentors', mentorRouter);

// Listen
app.listen(3000, () => {
    console.log('API Running in port 3000')
});