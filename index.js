const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/dev');

const session = require('express-session');
const passport = require('passport');



//Only for Session Auth
// const MongoDBStore = require('connect-mongodb-session')(session);

// const store = new MongoDBStore({
//   uri: config.DB_URI,
//   collection: 'meetuperSessions'
// })

// store.on('error', (error) => console.log(error))

// require("./models/meetups");
require("./models/users");
require("./models/vehicles");
require("./models/transports");
// require("./models/categories");
// require('./services/passport')

// const meetupsRoutes = require('./routes/meetups'),
  const usersRoutes = require('./routes/users'),
      vehiclesRoutes = require('./routes/vehicles')      
      // categoriesRoutes = require('./routes/categories');

mongoose.connect(config.DB_URI, { useNewUrlParser: true })
  .then(() => console.log('DB Connected!'))
  .catch(err => console.log(err));

const app = express();

app.use(bodyParser.json());


// Only for session authentication
// app.use(session({ secret: config.SESSION_SECRET,
//                   cookie: { maxAge: 3600000 },
//                   resave: false,
//                   saveUninitialized: false,
//                   store
//                 }))

// app.use(passport.initialize());
// app.use(passport.session());

// app.use('/api/v1/meetups', meetupsRoutes);
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/vehicles', vehiclesRoutes);
// app.use('/api/v1/categories', categoriesRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT , function() {
  console.log('App is running on port: ' + PORT);
});