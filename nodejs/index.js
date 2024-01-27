const http= require('http');
const PORT =process.env.PORT || 8000;
const HOST = 'localhost';
var fs = require('fs');

const server = http.createServer( (req,res)=>{

    res.setHeader('Content-type','text/html');
    

    // res.write(q);
    if(req.url==="/"){
    
        fs.readFile('./public/home.html',(error,data)=>{
            if (error) throw error;

            console.log(data);
            res.end(data);
        })
        // res.write("<h1>This is home page</h1> <a href='about'>About</a><br><a href='other'>Other</a><br><form method='get' action='form'><button type='submit'>Submit</button><br></form> Form Submission with post method <form method='post' action='form'><button type='submit'>Submit</button></form>");
    }
    else{
        res.end("<h1>This is other  page</h1>");
    }



});

server.listen(PORT,HOST,()=>{
    console.log("Server started at Port "+ PORT)
})