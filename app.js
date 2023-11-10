var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString =process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var Equipment = require("./models/equipment");

// We can seed the collection if needed on server start
async function recreateDB(){
 // Delete everything
 await Equipment.deleteMany();
 let instance1 = new Equipment({equipment_type:"Treadmill",condition:"Brand New",quantity:10});
 instance1.save().then(doc=>{
 console.log("First object saved")}
 ).catch(err=>{
 console.error(err)
 });
 let instance2 = new Equipment({equipment_type:"Dumbbells",condition:"Slightly Used",quantity:25});
 instance2.save().then(doc=>{
 console.log("Second object saved")}
 ).catch(err=>{
 console.error(err)
 });
 let instance3 = new Equipment({equipment_type:"Exercise Bike",condition:"Refurbished",quantity:15});
 instance3.save().then(doc=>{
 console.log("Third object saved")}
 ).catch(err=>{
 console.error(err)
 });
}
let reseed = true;
if (reseed) {recreateDB();}

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var equipmentRouter = require('./routes/equipment');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/equipment', equipmentRouter);
app.use('/board', boardRouter);
app.use('/choose',chooseRouter);
app.use('/resource',resourceRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
