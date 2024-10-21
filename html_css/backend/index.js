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



const authrouter = require('./controller/auth.controller')
const userrouter = require('./controller/user.controller')
const isAdmin = require('./middleware/isAdmin')
const path = require("path")

// console.log("root directory :",__dirname)
// console.log("root directory: ",process.cwd())

const app = express();
//app is now entire express feramework

const port = 8000;

require("./config/db")


app.use(morgan('dev'))


//json
//parsar for application/json
app.use(express.json())

//parser for x-www-form-urlencode
app.use(express.urlencoded({
    extended: true
}))


//in built middleware
//file 
//internal server

app.use(express.static("uploads"))
//app.use('/file',express.static("uploads"))
app.use('/file', express.static(path.join(process.cwd() + "/uploads")))






app.use('/auth', authrouter)
app.use('/user', userrouter)



app.get("*", function (req, res) {

    next({
        msg: "Page not Found",
        status: 404
    })
})


app.use(function (req, res, next) {

    next({
        msg: "Page not Found",
        status: 404
    })
})




app.use(function (res, req, next) {

    next({
        msg: "From first middleware",
        //status:404
    });

})


//error handling middleware

app.use(function (err, req, res, next) {

    res.json({

        error: "from error handling middleware",
        msg: err.msg || err,
        status: err.status || 400
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










