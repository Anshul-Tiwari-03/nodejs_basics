console.log("Welcome to express js and node js  tutorial");
console.log("Express Js is Fast,unoptinoated,minimalist web framework for Node.js");
console.log("Features of Express Js");
console.log("Fast and Easy");
console.log("Routing");
console.log("Middleware");
console.log("REST API");
console.log("Very popular");
console.log("Although it has not many features like laravel and django");
console.log();
console.log("INSTALLING AND UNINSTALLING EXPRESS JS");
console.log("npm install express");
console.log("npm install express@5.0.0-alpha.8");
console.log("npm uninstall express");
console.log();
console.log("Starting with creating a simple server");
console.log();
const express=require('express');
const app= express()
const port= 3000;
app.get("/",(req,res)=>{
    res.send("Hello there");
})

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})
// demonstration is like this app.method
console.log("Now we want a setup for Babel");
console.log("babel : Babel is a JavaScript compiler that is primarily used to transpile modern JavaScript code (ES6/ESNext) into an older version of JavaScript that is compatible with a wide range of browsers and environments.");
console.log("");
console.log();
console.log("Express application generator");
console.log("use the applciation generator tool, express-generator , to quickly create an application skeleton");
console.log("npm install -g express-generator");
console.log("express --view=ejs myapp");
console.log("npm install");
console.log("set DEBUG=myapp:* & npm start");
console.log("");
console.log("myapp - Application/Project Folder");
console.log("bin - The bin folder contains the executable file that start your app . It starts the server & some basic error handling");
console.log("public - Everything in this folder is accessible to the people connecting the application eg video , audio , image , css etc");
console.log("routes - we can put all our route files. The generator creates two files index.js and users.js");

console.log("views - All the views can be found here by the templating engine");
console.log("app.js - Express js object named app => Sets up the app with various settings and middleware and then exports the app from the module ");




