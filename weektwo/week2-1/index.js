
const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000



// function middlewar1(req, res, next) {
//     console.log("from middle ware "+req.headers.num)
//     next();
// }


//app.use(middlewar1);
app.use(bodyParser.json())

function handleFirstRequest(req, res) {
    console.log(req.query)
    var nu=req.query.num
    var theSum = calculateSum(nu);
var resultobj= {
    sum: theSum,
}
    res.send(resultobj)
}



//app.get('/handlesum', handleFirstRequest)
app.get('/handlesum', handleFirstRequest)

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

