"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
//* SEQUELIZE
//? npm i sequelize sqlite3

const { sequelize, DataTypes } = require('../configs/dbConnection')

const passwordEncrypt = require('../helpers/passwordEncrypt')
const User = sequelize.define('user', {


    fullName: {
        type: DataTypes.STRING(64), 
        allowNull: false,
    },

    email:{
        type: DataTypes.STRING(64),
        allowNull:false,
        unique: true,
    },

    password:{
        type: DataTypes.STRING(64),
        allowNull:false,
        set: function (password) {
            this.setDataValue('password', passwordEncrypt(password));
        },

    },

    role: { // 0: Admin, 1: Moderatör, 2:Customer
        type: DataTypes.TINYINT, 
        allowNull: false,
        defaultValue: 2
    },
    isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
   
  
},
{paranoid:true})

module.exports = User