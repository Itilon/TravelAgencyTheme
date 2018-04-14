const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const init = () => {
    const app = express();

    app.set('view engine', 'pug');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/static', express.static(
        path.join(__dirname, '../static')
    ));

    app.get('/', (req, res) => {
        res.render('home');
    })

    return Promise.resolve(app);
};

module.exports = {
    init
};