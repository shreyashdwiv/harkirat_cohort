const fs = require("fs")

const jwt = require('jsonwebtoken')

const secret = "shrsgfrgrgrgyash";

var ans = jwt.sign({
    username: "shreyaashsdf@gmaol.com",
    password: "123456"
}, secret);

console.log(ans);

jwt.verify(ans, secret, (err, orignalString) =>{
    console.log(orignalString);
})