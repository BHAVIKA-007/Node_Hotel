const employee=[
    {id:1, name:"Bhavi" , age:15},
    {id:2, name:"Bhoomi" , age:25}
]

export const number=()=>{
return employee.length;
}
// export const details=()=>{
//     return employee;
// }
//we will import it as import {details} fron"./post.js"

const details=()=>{ return employee;}
export default details;
