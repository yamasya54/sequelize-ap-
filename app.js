"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// asyncErrors to errorHandler:
require('express-async-errors')

// DatabaseConnection:
const { dbConnection } = require('./app/configs/dbConnection')
dbConnection() // sequelize.sync() must run after model defines.

// Accept json data & convert to object:
app.use(express.json())

app.use(require('./app/middlewares/authentication'))


app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to TECH-SYNC API',
        isLogin: req.isLogin,
        user: req.user
    })
})

// Router:
app.use(require('./app/routes/index'))


// errorHandler (Catch Errors):
app.use(require('./app/middlewares/errorHandler'))

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));