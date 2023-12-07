"use strict";
/* -------------------------------------------------------
    EXPRESSJS - Users Project with Sequelize
------------------------------------------------------- */
// npm i express-async-errors
require('express-async-errors')

const User = require('../models/user')

module.exports = {

    list: async (req, res) => {

        
        const data = await User.findAndCountAll()
        res.status(200).send({
            error: false,
            result: data
        })
    },

    // CRUD METHODS:

    create: async (req, res) => {

        const data = await User.create(req.body)
        res.status(201).send({
            error: false,
            body: req.body, // Send Data
            message: 'Created',
            result: data // Receive Data
        })
    },

    read: async (req, res) => {

        // https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
        // const data = await User.findOne({ where: { id: req.params.id } })
        
        const data = await User.findByPk(req.params.id)
        res.status(200).send({
            error: false,
            result: data
        })
    
    },

    update: async (req, res) => {

        // Model.update({ newData }, { filter })
        const isUpdated = await User.update(req.body, { where: { id: req.params.id } })
        // isUpdated return: [ 1 ] or [ 0 ]
        res.status(202).send({
            error: false,
            body: req.body, // Send Data
            message: 'Updated',
            isUpdated: Boolean(isUpdated[0]),
            result: await User.findByPk(req.params.id)
        })
    },

    delete: async (req, res) => {

        // Model.destroy({ filter })
        const isDeleted = await User.destroy({ where: { id: req.params.id } })
        // isDeleted return: 1 or 0
        if (isDeleted) {
            res.sendStatus(204)
        } else {
            res.sendStatus(404)
        }
       
    }
}