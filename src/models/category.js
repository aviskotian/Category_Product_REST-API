const mongoose = require('mongoose')
const connection = require('../db/mongoose')


const categorySchema = mongoose.Schema({
    name: { 
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String
    },
    parentCategoryID:{
        type: String,
        trim: true
    }
},{
    timestamps: true
})
const Categories = connection.headyDB.model('Categories', categorySchema)

module.exports = Categories;