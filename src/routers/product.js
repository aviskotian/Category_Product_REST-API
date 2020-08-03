const express = require('express')
const router = new express.Router()
const {createProduct, getProductByCatID, updateProductByproductID} = require('../core/productDbControl')


router.post('/product/', (req, res)=>{
    createProduct(req).then((data)=>{
        res.status(201).send(data)
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

router.get('/product/:categoryID', (req, res)=>{
    getProductByCatID(req).then((data)=>{
        if(data.products.length === 0){
            return res.status(404).send({status:'error',message:`No products found for categoryID ${req.params.categoryID}`})
        }
        res.status(200).send(data.products)
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

router.patch('/product/:productID', (req, res)=>{
    updateProductByproductID(req).then((data)=>{
        if(data.product.length === 0){
            return res.status(404).send({status:'error',message:`No products found for productID ${req.params.productID}`})
        }
        res.status(200).send(data.product)
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

module.exports = router