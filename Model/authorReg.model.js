


const mongoose=require('mongoose')

const authorRegSchema=mongoose.Schema({
    name:{type:String,required:false},
    email:{type:String,required:false},
    pass:{type:String,required:false},
})

const authorRegModel=mongoose.model('registration',authorRegSchema)

module.exports={authorRegModel}