
const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const Person=require('./models/person')
passport.use(new LocalStrategy(async (USERNAME,password,done)=>{
    //aunthetication logic
    //done takes 3 parameters(error,user,info)
    try{
        console.log('Received credentials:',USERNAME,password)
        const user=await Person.findOne({username:USERNAME})
        if(!user)//agar user nahi mila tohh
        return done(null,false,{message:'Incorrect username'})
        //agar user mil gaya toh check password
       // if password matches to set boolean as trye
        const ispasswordmatch=user.comparePassword(password);
        if(ispasswordmatch) return done(null,user)
            else return done(null,false,{message:'Incorrect password'})
    }
    catch(err){
            return done(err);
    }
}))
module.exports = passport;
