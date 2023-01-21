const express = require('express');
const app = express();
const PORT = 4003;
const log = console.log;
const cookieParser = require('cookie-parser');
const cookiesController = require('./controllers/cookie.controller');

app.use(cookieParser()); // provides us access to the middleware so that we can see what cookies are stored.

app.use('/', cookiesController);

app.listen(PORT, log(`Running Cookies on Port: ${PORT}`));