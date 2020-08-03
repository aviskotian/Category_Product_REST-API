const Category = require('../models/category')
const ErrorHandler = require('../errorHandler/error')

const createCategory = async (req) => {
    try{
        if(!req.body.name) {
            throw new ErrorHandler(`Category name is required`)
        }
        if(req.body.parentCategoryID){
            const category = await Category.findOne({_id : req.body.parentCategoryID})
            if(!category){
                throw new ErrorHandler(`Invalid parentCategoryID`)  
            }
        }
        const category = new Category({
            ...req.body,
            parentCategoryID: req.body.parentCategoryID || 0
        })
        await category.save()
        return Promise.resolve({
            status: 'success',
            category
        })

    }catch(e) {
        return Promise.reject({
            status: 'error',
            message: e.message,
        })
    } 
}

const getCategories = async () => {
    try{
        const categories = await Category.aggregate([
            { "$addFields": { "parentCategoryID": { "$toString": "$_id" }}},
            { "$lookup": {
              "from": "categories",
              "localField": "parentCategoryID",
              "foreignField": "parentCategoryID",
              "as": "child_categories"
            }}
          ])
        return Promise.resolve({
            categories
        })
    }catch(e) {
        return Promise.reject({
            status: 'error',
            message: e.message,
        })
    } 
}



module.exports ={
    createCategory,
    getCategories
}