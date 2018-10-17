var express = require('express');
var path = require('path');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(cookieParser('ntalk'));
app.use(expressSession());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '/public')));

// usando o express-load evita-se carregar os módulos da rota diretamente
// a ordem abaixo é importante, pois primeiro carrega-se o models
// para ser usado pelos controllers que serão usados pelas routes
load('models')
  .then('controllers')
  .then('routes')
  .into(app);

app.listen(3000, function(){
  console.log("Mean-Example rodando");
});

module.exports = app;
