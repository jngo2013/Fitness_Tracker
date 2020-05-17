const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
app.use(express.static("public"));

app.use(routes);

mongoose.connect(process.env.MONGODB_URI  || 'mongodb://localhost/workout', {  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false  });

app.get('/exercise', function(req, res) {
  res.sendFile(path.join(__dirname, "/public/exercise.html"));
});

app.get('/stats', function(req, res) {
  res.sendFile(path.join(__dirname, "/public/stats.html"));
})
app.listen(PORT);