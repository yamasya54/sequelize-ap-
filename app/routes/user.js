"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
const router = require('express').Router()

// Call TODO Controller:
const user = require('../controllers/user')


router.route('/')
    .get( user.list ) // LIST
    .post( user.create ) // CREATE

router.route('/:id')
    .get( user.read ) // READ
    .put( user.update ) // UPDATE
    .delete( user.delete ) // DELETE

module.exports = router