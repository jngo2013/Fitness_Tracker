const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
// The filename index is a special name in Node
// If we require a folder in Node and we don't specify a file name
// Node will automatically look for an index.js inside of that folder
const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
app.use(express.static("public"));
// Any route that goes to slash,
// Have the router object inside of routes
// handle the routing for us
app.use(routes);

mongoose.connect(process.env.MONGODB_URI  || 'mongodb://localhost/workout', {  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true  });

app.get('/exercise', function(req, res) {
  res.sendFile(path.join(__dirname, "/public/exercise.html"));
});

app.listen(PORT);