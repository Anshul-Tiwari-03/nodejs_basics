// to run this file use node http_s.js
const http= require('http');
const PORT =process.env.PORT || 8000;
const HOST = 'localhost';
console.log("THIS IS A HTTP MODULE ");
const server=http.createServer((req,res)=>{
   
   console.log("Each statement is running two times since on going derver one load is by / and other by favicon.co"); 
   console.log("http.createServer() method, will be executed when someone tries to access the computer on port 8080. "); 
   
//    console.log(req.url);
   if(req.url !="/favicon.ico"){
    console.log(req.url);
    console.log(req.method);
   }

   res.setHeader('Content-Type','text/plain');
   res.write("Server Running here \n http.createServer() method, will be executed when someone tries to access the computer on port 8080.");
   res.end("end of the response");
});

server.listen(PORT,HOST,()=>{
    console.log("Server running at port 8000 visit http://"+HOST+":"+PORT+"/");
});