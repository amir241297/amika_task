// Title (string, required)
// Content (string, required)
// Author (string, required)
// Created At (timestamp, auto-generated)
// Updated At (timestamp, auto-generated)
const mongoose=require('mongoose')
const userAccountSchema=mongoose.Schema({
    name:String,
    Email:String, 
    password:String
})
const UserAccountModel=mongoose.model("userCreatedAccount",userAccountSchema)

module.exports={
    UserAccountModel
}