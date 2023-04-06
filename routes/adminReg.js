
const bcrypt=require('bcrypt')
const {AdminModel}=require('../Model/adminReg.model')
const jwt=require('jsonwebtoken')

const express=require('express')

const AdminRouter=express.Router()



AdminRouter.post('/register',async(req,res)=>{

    const {name,email,pass}=req.body
    console.log(req.body)

    bcrypt.hash(pass, 3,async function(err, hash) {
        if(err){res.send(err)
        }else{

            const Data=new AdminModel({name,email,pass:hash})
             await Data.save()
             res.send({msg:"Admin Registered Successfully"})
        }
    })


})


AdminRouter.post('/login',async(req,res)=>{

    const {email,pass}=req.body

    const check=await AdminModel.find({email})
    if(check.length>0){
        bcrypt.compare(pass, check[0].pass, function(err, result) {
           if(result){
            var token = jwt.sign({ AdminId: check[0]._id }, 'imt');
            res.send({msg:"logged in",Token:token})

           }else res.send({msg:"password not Match"})
           
        })
    }else res.send({msg:"Data not found"})

    }
)
module.exports={AdminRouter}