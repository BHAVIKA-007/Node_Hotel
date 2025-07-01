const mongoose=require('mongoose');
const menuschema=new mongoose.Schema({
name:{
    type:String,
    required:true,
    unique:true,
},
price:{
        type:Number,
},
ingredients:{
            type:[String],
},
})
const menuItem = mongoose.model('MenuItem', menuschema);
module.exports=menuItem;
    
