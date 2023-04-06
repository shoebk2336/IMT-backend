

const express=require('express')

const AuthorRoute=express.Router()
const {authorModel}=require('../Model/author.model')




// AuthorRoute.get('/',async(req,res)=>{
//     const author=req.body.authorID
//     console.log(author)

//     const Data=await authorModel.find({authorID:author})
//     res.send(Data)
// })



AuthorRoute.post('/post',async(req,res)=>{

const Data=new authorModel(req.body)
await Data.save()
res.send({msg:"Blog Posted"})



})
 

AuthorRoute.patch('/edit/:id',async(req,res)=>{
    console.log('author edit initiated')

    const ID=req.params.id
    const ToBe=await authorModel.find({_id:ID})//post which is to be edited
    const TobeEdited=ToBe[0].authorID
    const authoredited=req.body.authorID    //author id of that who initiate editing
    
    const payload=req.body
    if(TobeEdited===authoredited){
    await authorModel.findByIdAndUpdate({_id:ID},payload)
    res.send({msg:'updated'})}
    else res.send({msg:"Not Authorized to edit"})

})

AuthorRoute.delete('/delete/:id',async(req,res)=>{
    const ID=req.params.id


    const ToBe=await authorModel.find({_id:ID})//post which is to be edited
    const TobeEdited=ToBe[0].authorID
    const authoredited=req.body.authorID    //author id of that who initiate editing
    
    if(TobeEdited===authoredited){

    await authorModel.findByIdAndDelete({_id:ID})
    res.send({msg:'deleted'})}else res.send({msg:"Not authorized to delete"})
})






module.exports={AuthorRoute}