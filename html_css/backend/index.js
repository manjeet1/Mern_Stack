/*

node js
framework

library =>
run time enviroment

MERN

https://www.npmjs.com/

npm=node package manager

npm init -y
*/



const express = require("express");


const morgan = require('morgan')

const authrouter =require('./controller/auth.controller')
const userrouter=require('./controller/user.controller')

const app = express();
//app is now entire express feramework

const port = 8000;


app.use(morgan('dev'))

app.use('/auth',authrouter)
app.use('/user',userrouter)



app.get("*", function (req, res) {

    res.json({
        msg: "Page not Found",
        status: 404
    })
})


app.use(function (req, res,next) {

    res.json({
        msg: "Page not Found",
        status: 404
    })
})




app.listen(port, function (err, done) {
    if (err) {
        console.log(err)
    }
    else {

        console.log("server listening ar port :", port)
    }


}

)










