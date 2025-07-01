let fs=require('fs');
let os=require('os');
let _=require('lodash');
fs.appendFile('abc.txt','Hello abc',()=>{console.log("file created")});
console.log(os.userInfo().username);
let arr=["B","B",1,2,3,1,1,"3","B"]
let a=_.uniq(arr);
console.log(a);