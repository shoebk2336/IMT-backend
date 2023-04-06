


const express=require('express')
const authorRegRouter=express.Router()
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const {authorRegModel}=require('../Model/authorReg.model')


authorRegRouter.post('/login',async(req,res)=>{

const {email,pass}=req.body

const check=await authorRegModel.find({email})
if(check.length>0){
    bcrypt.compare(pass, check[0].pass, function(err, result) {
        if(result){
            var token = jwt.sign({ userID: check[0]._id }, 'IMT');
            res.send({msg:'Login Successfully',Token:token})
        }else {res.send({msg:'password Not Matched'})}
       
    })
  
}else res.send({msg:'data not found'})

})

authorRegRouter.post('/singup',async(req,res)=>{

    const{name,email,pass}=req.body
    

        bcrypt.hash(pass, 3, async function(err, hash) {
            if(err){res.send({msg:'something went wrong'})
        }else {
            const Data=new authorRegModel({name,email,pass:hash})
            await Data.save()
            res.send({msg:'Registered Successfully'})
        }
        })


    

  
})

module.exports={authorRegRouter}
