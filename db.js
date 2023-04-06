

const mongoose=require('mongoose')

const connection=mongoose.connect('mongodb+srv://shoebk478:shoeb@cluster0.lcrlhc2.mongodb.net/IMT?retryWrites=true&w=majority')


module.exports={connection}