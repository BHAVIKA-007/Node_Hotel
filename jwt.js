const jwt=require('jsonwebtoken')
const jsonAuthMiddleware=(req,res,next)=>{
    //exract jwt token from the request headers
    const authHeader = req.headers.authorization;
if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authorization token missing or malformed' });
}

    const token=req.headers.authorization.split(' ')[1]//token is authorizationin header
    //and we can see its bearer xyz etc so to obtain xyz which is the token we do split at space and next index 
    if(!token)return res.status(401).json({error:'Unauthorizeddd'});
    try{
        //verofy the token
       const decoded= jwt.verify(token,process.env.JWT_SECRET);
       //attach user info to request ovj
       req.user=decoded;
       next();

    }catch(err){
        res.status(404).json({error:'Invalid token'});
    }
}

const generateToken=(userData)=>{
    return jwt.sign(userData,process.env.JWT_SECRET)
    //return jwt.sign(userData,process.env.JWT_SECRET,{expiresIn:30}) expres in 30seconds 
    //every 30 seconds this token expires. so will the user signup every 30s?
    //ofc not . hence we use login page
}
module.exports={jsonAuthMiddleware,generateToken};