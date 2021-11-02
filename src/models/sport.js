'use strict'

const sport=(sequelize, DataTypes) => sequelize.define('sport', {

bestTeamSport:{type:DataTypes.STRING,
allowNull:false},

bestIndividualSport:{type:DataTypes.STRING}

})
module.exports=sport