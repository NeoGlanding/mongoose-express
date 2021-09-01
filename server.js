const app = require('./app');
const mongoose = require('mongoose');

const db = 'mongodb://localhost:27017/mentors-real'
mongoose.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(con => console.log('connected')).catch(err => console.log(err))

app.listen(3000, () => {
    console.log('API Running in port 3000')
});