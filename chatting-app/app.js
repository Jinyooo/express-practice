var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public'))); // 퍼블릭파일을 전체를 들고옴
// public 폴더를 통째로 넣으면 get '/' 의 주소로 가지 않으므로 주석 처리하고
// index.html의 css와 js파일 연결을 위한 정적파일 주소 설정 따로 해줌
app.use("/javascripts", 
    express.static(path.join(__dirname, "public/javascripts"))
); 
app.use("/stylesheets", 
    express.static(path.join(__dirname, "public/stylesheets"))
);
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
