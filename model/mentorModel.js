const mongoose = require('mongoose');

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

module.exports = Mentor;