const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const index = require('./routes/index');
const login = require('./routes/login');
const singUp = require('./routes/singUp');
const profile = require('./routes/profile');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;
const sessionTime = 3600000;


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secret'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  cookie: { maxAge: sessionTime},
  resave:true,
  saveUninitialized: false,
  secret:'PGSecret'
}))
app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(bodyParser.json());



app.use('/', index);
app.use('/login', login);
app.use('/singup', singUp);
app.use('/profile', profile);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;
