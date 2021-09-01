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

const mentorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A mentor must have name'],
        unique: true
    },
    status: {
        type: String,
        default: 'Student'
    },
    profiency: {
        type: Array,
        required: [true, 'A mentor must have a profiency']
    }
});

const Mentor = mongoose.model('Mentor', mentorSchema);

const testMentor = new Mentor({
    name: 'Muhammad Ihsan Abdurrahman',
    status: 'Alumni',
    profiency: ['HTML5', 'CSS3', 'Javascript ES6', 'ReactJS', 'MySQL', 'MongoDB', 'NodeJS', 'ExpressJS', 'Docker', 'Kubernetes', 'Openstack', 'Openshift']
})

testMentor.save().then(res => console.log(res)).catch(err => console.log(err));

app.listen(3000, () => {
    console.log('API Running in port 3000')
});