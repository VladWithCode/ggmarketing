const mongoose = require('mongoose');

const URI = process.env.DB_URI || 'mongodb://localhost/gg';

mongoose.connect(URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}, err => {
  if (err) return console.log(err);

  console.log('Connected to DB');
});
