


const mongoose=require('mongoose')


const AdminSchema=mongoose.Schema({
    name:String,
    email:String,
    pass:String
})

const AdminModel=mongoose.model('admin',AdminSchema)

module.exports={AdminModel}