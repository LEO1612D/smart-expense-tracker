const mongoose = require('mongoose');
const { MONGO_URI } = require('./index');

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('MongoDB Connection Error:', err));

module.exports = mongoose.connection;
