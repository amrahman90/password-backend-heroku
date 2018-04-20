const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

const defaultRoutes = require('./api/routes/default');


// IMPORTANT
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
        return res.status(200).json({});
    }
    next();
});

// ROUTES
app.use('/', defaultRoutes);


// ERROR HANDLING || ROUTE NOT FOUND
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

//SERVER ERROR
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;