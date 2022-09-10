const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const path = require('path');

const mainRoutes = require('./router/mainRouter');

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use( mainRoutes);

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, './views'))

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor escuchando');
});