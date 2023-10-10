// Title (string, required)
// Content (string, required)
// Author (string, required)
// Created At (timestamp, auto-generated)
// Updated At (timestamp, auto-generated)
const mongoose=require('mongoose')
const productsSchema=mongoose.Schema({
    Title:String,
    Content:String, 
    Author:String,
    Created_At:String,
    Updated_At:String
})
const ProductsModel=mongoose.model("products",productsSchema)

module.exports={
    ProductsModel
}