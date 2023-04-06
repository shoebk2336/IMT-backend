

const mongoose=require('mongoose')


const authorSchema=mongoose.Schema({


    title:{type:String,require:true},
    author:{type:String,require:true},
    content:{type:String,require:true},
    authorID:{type:String,require:true}
})

const authorModel=mongoose.model('blog',authorSchema)

module.exports={authorModel}