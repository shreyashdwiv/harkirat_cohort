
const express = require('express')
const app = express()
const port = 3000

function handleFirstRequest(req, res) {
    var num=req.query.num
    var theSum = calculateSum(num);

//console.log(theSum);
var result= "this is the sum"+theSum;
    res.send(result)
}

function createUser (req, res) {
    res.send("hello world");

}

app.get('/handlesum', handleFirstRequest)
app.post('/createuser', createUser)

function started(){
    console.log(`Example app listening on port ${port}`)
}

app.listen(port,started)


// code for reading the file 
const { log } = require("console");
var fs = require("fs");

function callbackFn(err, data) {
    console.log(data);
}

fs.readFile("a.txt","utf-8", callbackFn);

// code for calculating the sum

function calculateSum(num) {
    var yo=0;
   for(var i=1;i<=num;i++){
        yo=yo+i;
   }
   return yo;

}

