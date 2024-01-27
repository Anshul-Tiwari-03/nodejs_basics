// to run this file use node .\filesystem.js
const path = require('path');
const fs = require('fs/promises');
async function createDirectory(){
    const directoryPath = path.join(__dirname, 'demo');
    try {
        // Check if the directory already exists
        await fs.access(directoryPath);
        console.log('Directory already exists');
    } catch (error) {
        if (error.code === 'ENOENT') {
            // Directory doesn't exist, create it
            try {
                await fs.mkdir(directoryPath);
                console.log('Directory created');
            } catch (createError) {
                console.error('Error creating directory:', createError);
            }
        } else {
            console.error('Error accessing directory:', error);
        }
    }
}

async function writeFile(){
    const filePath = path.join(__dirname, 'demo','sample.txt');
    try {
        // Check if the directory already exists
        await fs.access(filePath);
        console.log('File already exists');

        await fs.appendFile(filePath,' Again Hello logged in ');
        console.log('Data appended');
    } catch (error) {
        
        if (error.code === 'ENOENT') {
            // Directory doesn't exist, create it
            try {
                await fs.writeFile(filePath,'Hello logged in ');
                console.log('File created');
            } catch (createError) {
                console.error('Error creating file:', createError);
            }
        } else {
            console.error('Error accessing file:', error);
        }
    }
}
async function readFile(){
    const filePath = path.join(__dirname, 'demo','sample.txt');
    try {
        // Check if the directory already exists
        await fs.access(filePath);
        console.log('File exists');
        const sampletext=await fs.readFile(filePath,'utf-8');
        console.log(sampletext);

    } catch (error) {
        if (error.code === 'ENOENT') {
            // Directory doesn't exist, create it
            try {
                await fs.writeFile(filePath);
                console.log('File created');
            } catch (createError) {
                console.error('Error creating directory:', createError);
            }
        } else {
            console.error('Error accessing directory:', error);
        }
    }
}
// createDirectory();
// writeFile();
// readFile();

// <-------------- SYNC API -------------->
console.log("SYNC API ");
console.log("the only difference we encounter here is it does not use the asyn await function");

function myappendSync(){
    console.log("appending file ");
    try{
        fs.appendFile("mynewfile1.txt"," hello from here on i want to display a success message ");
        console.log("updated");
    }catch(error){
        console.log(error);
    }
}
myappendSync();


