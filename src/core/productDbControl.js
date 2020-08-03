const Product = require('../models/product')
const ErrorHandler = require('../errorHandler/error')


const createProduct = async (req) => {
    try{
        if(!req.body.name || !req.body.price || !req.body.categories) {
            throw new ErrorHandler(`Name, Price, Categories missing`)
        }else if(req.body.categories.length === 0){
            throw new ErrorHandler(`Name, Price, Categories missing`)
        }

        const product = new Product({
            ...req.body
        });

        await product.save()
        return Promise.resolve({
            status: 'success',
            product
        })
    }catch(e) {
        return Promise.reject({
            status: 'error',
            message: e.message,
        })
    } 
}

const getProductByCatID = async (req) => {
    try{
        if(!req.params.categoryID){
            throw new ErrorHandler(`Missing category ID`)
        }
        const products = await Product.find({ "categories": req.params.categoryID })
        return Promise.resolve({
            status: 'success',
            products
        })
    }catch(e) {
        return Promise.reject({
            status: 'error',
            message: e.message,
        })
    }
}

const updateProductByproductID = async (req) => {
    try{
        if(!req.params.productID){
            throw new ErrorHandler(`Missing product ID`)
        }

        const updates = Object.keys(req.body)
        const allowedUpdates = ['name', 'price', 'description']
        const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
        if(!isValidOperation){
            throw new ErrorHandler(`Invalid Updates`)
        }
        const _id = req.params.productID
        const product = await Product.findOne({_id})
        if(!product){
            return Promise.resolve({
                status: 'success',
                product: []
            })
        }
        updates.forEach((update) => product[update] = req.body[update])
        await product.save()
        return Promise.resolve({
            status: 'success',
            product
        })
    }catch(e) {
        return Promise.reject({
            status: 'error',
            message: e.message,
        })
    }
}

module.exports ={
    createProduct,
    getProductByCatID,
    updateProductByproductID
}