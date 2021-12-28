const product = require('../model/product')


module.exports.list=(req,res)=>{
    product.find()
    .then((products)=>{
        res.json(products)
    })
    .catch((err)=>{
        res.json(err)
    })

}
module.exports.create=(req,res)=>{
    const body=req.body
    const product=new Product(body)
    product.save()
    .then((products)=>{
        res.json(products)
    })
    .catch((err)=>{
        res.json(err)
    })


    
}
module.exports.show=(req,res)=>{
    const id=req.params.id
    product.findById(id)
    .then((products)=>{
        res.json(products)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    product.findByIdAndUpdate(id,body,{new:true})
    .then((products)=>{
        res.json(products)
    })
    .catch((err)=>{
        res.json(err)
    })
}
module.exports.destroy=(req,res)=>{
    const id=req.params.id
    product.findByIdAndDelete(id)
    .then((products)=>{
        res.json(products)
    })
    .catch((err)=>{
        res.json(err)
    })
}
