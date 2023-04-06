
const jwt=require('jsonwebtoken')

const Authenticate=(req,res,next)=>{
    
    const token=req.headers.authorization
    if(token)

   { 
    
    jwt.verify(token, 'IMT', function(err, decoded) {
        if(decoded){
            req.body.authorID=decoded.userID
            
            
            next()
        }else res.send(err)
      })}else res.send('please login first')

}
module.exports={Authenticate}