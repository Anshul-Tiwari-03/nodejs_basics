// to run this file use node http_s.js
const http= require('http');
const url= require('url');

// var fs = require('fs');


const PORT =process.env.PORT || 8000;
const HOST = 'localhost';
console.log("THIS IS A HTTP MODULE ");
const server=http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html');
    
    // res.write(q);
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;
    if(path=="/"){
        res.write("<h1>This is home page</h1> <a href='about'>About</a><br><a href='other'>Other</a><br><form method='get' action='form'><button type='submit'>Submit</button><br></form> Form Submission with post method <form method='post' action='form'><button type='submit'>Submit</button></form>");
    }
    else if(path=="/about"){
        res.write("<h1>This is About  page</h1>");
    }
    else if(path=="/form"){
        if(req.method=="POST"){
            res.write("<h1>This is form page with post request</h1>");
        }
        else{
            res.write("<h1>This is form page with get request</h1>");            
        }
    }
    else{
        res.write("<h1>This is other  page</h1>");
    }
    res.end();

});

server.listen(PORT,HOST,()=>{
    console.log("Server running at port 8000 visit http://"+HOST+":"+PORT+"/");
});