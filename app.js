//
const express = require('express')
const app = express()

const expressLayout = require('express-ejs-layouts');
const passport = require('passport');
const logger = require("morgan")
const flash = require('connect-flash');

const sessions = require('express-session');

const PORT = process.env.PORT || 5000





app.set('view engine', 'ejs');
app.use(expressLayout);
app.use(express.static('public'));
app.use(logger('dev'))



app.use(flash());
app.use(function(req, res, next) {
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	res.locals.user = req.user || null;
	next();
})




app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use(function(req, res, next) {
	if (res.statusCode == '200') {
  res.send('maaf web nya tidak terdaftar di server')
	}
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})