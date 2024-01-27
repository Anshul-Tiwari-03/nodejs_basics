const events= require('events');
var eventEmitter= new events();

// USing on em=ventemitter 
console.log("Using ecent on() will execute as many times emit is done");
console.log("THIS IS A EVENT MODULE");
eventEmitter.on('myevent',function(){
    console.log("An event just occurred");
});
eventEmitter.emit('myevent');
eventEmitter.emit('myevent');
console.log("");

// USing once em=ventemitter 
console.log("Now for event once() for two emits will execute once only ");
eventEmitter.once('myevent2',function(){
    console.log("An myeven2 just occurred");
});
eventEmitter.emit('myevent2');
eventEmitter.emit('myevent2');