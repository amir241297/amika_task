// Title (string, required)
// Content (string, required)
// Author (string, required)
// Created At (timestamp, auto-generated)
// Updated At (timestamp, auto-generated)
const mongoose=require('mongoose')
const connection=mongoose.connect("mongodb+srv://amir:<password>@cluster0.et7jah3.mongodb.net/?retryWrites=true&w=majority")
const { stringify } = require('querystring')
const adminAccountSchema=mongoose.Schema({
    name:String,
    Email:String,
    password:String
})
const UserAccountModel=mongoose.model("adminCreatedAccount",adminAccountSchema)

module.exports={

}