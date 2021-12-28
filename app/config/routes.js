const express=require('express')
const router=express.Router()
const productController=require('../controller/productController')

router.get('/products',productController.list)
router.get('/products/:id',productController.show)
router.post('/products',productController.create)
router.put('/products/:id',productController.update)
router.delete('/products/:id',productController.destroy)

module.exports=router