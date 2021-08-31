const express = require('express');
const app = express();
const mentorRouter = require('./router/mentorRouter');
const mongoose = require('mongoose');

app.use(express.json());

app.use('/api/mentors', mentorRouter);

// Server
const db = 'mongodb://localhost:27017/mentors-real'
mongoose.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(con => console.log('connected')).catch(err => console.log(err))

app.listen(3000, () => {
    console.log('API Running in port 3000')
});