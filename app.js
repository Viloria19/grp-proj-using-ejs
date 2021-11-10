const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');
//app.set('views', 'adminviews');

// listen for requests
app.listen(3000);

// middleware & static files
app.use(express.static('public'));

app.use(morgan('dev'));

app.get('/', (req, res)=>{

    res.render('Homepage', {title: 'Home'});
    //res.sendFile('./views/Homepage.ejs', {root: __dirname});

});

app.get('/menu', (req, res)=>{

    res.render('menu', {title: 'Menu'});
    //res.sendFile('./views/menu.ejs', {root: __dirname});

});

app.get('/cart', (req, res)=>{

    res.render('cart', {title: 'Cart'});
    //res.sendFile('./views/cart.ejs', {root: __dirname});

});

app.get('/register', (req, res)=>{

    res.render('register', {title: 'Register'});
    //res.sendFile('./views/register.ejs', {root: __dirname});

});

app.get('/login', (req, res)=>{

    res.render('login', {title: 'Title'});
    //res.sendFile('./views/login.ejs', {root: __dirname});

});

// redirects

app.get('/homePage', (req, res)=>{

    res.sendFile('./views/Homepage.ejs', {root: __dirname});

});

// 404 page
app.use((req, res)=>{
    res.status(404).render('404', {title: '404 Error'});
});