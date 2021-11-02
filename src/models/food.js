'use strict'

const food=(sequelize, DataTypes) => sequelize.define('food', {

bestFood:{type:DataTypes.STRING,
allowNull:false},

bestJuse:{type:DataTypes.STRING}

});
module.exports=food