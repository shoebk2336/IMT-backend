

const express=require('express')
const { connection } = require('./db')
const { Authenticate } = require('./middleware/Authorization')
const { AuthorRoute } =require('./routes/author.js')
const { authorRegRouter }=require('./routes/authorReg')
const { authorModel}=require('./Model/author.model')
const {AdminRouter} =require('./routes/adminReg')
const {AdminRoute}=require('./routes/admin')


const cors=require('cors')

const app=express()
app.use(cors())

app.use(express.json())


app.use('/author',authorRegRouter)
app.use('/admin',AdminRouter)//admin login logout
app.use('/adminblogs',AdminRoute)//admin edit delete

app.get('/blogs',async(req,res)=>{
    

   const q=req.query
   console.log(q,'q')
    
    const Data=await authorModel.find(q)
    res.send(Data)
})





app.use(Authenticate)
app.use('/blogs',AuthorRoute)

app.get('/',(req,res)=>{
    res.send("HOME PAGE")
})





app.listen(8080,async()=>{
    await connection
    console.log("server & DB connected")
})