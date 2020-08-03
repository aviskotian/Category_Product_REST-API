const mongoose = require('mongoose')
const connection = require('../db/mongoose')


const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: String,
    price: {
        type: Number,
        required: true
    },
    categories: [
        { 
            type : mongoose.Schema.Types.ObjectId, 
            required: true,
            ref: 'Categories' 
        }
    ],
}, {
    timestamps: true
});

const Products = connection.headyDB.model('Products', productSchema)
module.exports = Products;
