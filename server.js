import http from "http"
const port=8000;
const server=http.createServer((req,res)=>{
    // res.setHeader('Content-Type','text/Html');
    // res.end('<h1>Hlleoww</h1>')
    res.writeHead(500,'Content-Type','application/json');
    res.end(JSON.stringify({message:`Server Error`}));
    // res.write("hello world");
    // res.end();
    //above 2 statemnts or res.end("Hello World");
});
server.listen(port,()=>{
console.log(`Server running on port  ${port}`)
})

//to run this we write  node server in terminal
//in package.json we can write "start":"node server.js" and then in terminal npm start
//in package.json we can write "dev":"node server.js" and then in terminal npm run dev