const express = require('express')
const router = new express.Router()
const {createCategory, getCategories} = require('../core/categoryDbControl')

router.post('/category/', (req, res)=>{
    createCategory(req).then((data)=>{
        res.status(201).send(data)
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

router.get('/category/', (req, res)=>{
    getCategories(req).then((data)=>{
        if(data.categories.length === 0){
            return res.status(404).send({status:'error',message:'No categories found'})
        }
        res.send(data.categories)
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

module.exports = router