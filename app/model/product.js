const mongoose=require('mongoose')
const Schema=mongoose.Schema

const productSchema=new Schema({
    name:{
    type:String,
    required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    isAvailable:{
        type:String,
        required:true
    },
    ratings:{
        type:Number,
        required:true
    }
})
const product=mongoose.model('product',productSchema)
module.exports=product