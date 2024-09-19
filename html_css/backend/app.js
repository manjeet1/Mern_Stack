
const express = require("express");

const fileOp = require('./fileop');

const app = express();
//app is now entire express feramework

const port = 8000;

//handler for get method and empty url

app.get("/", function (request, response) {
    response.send("homepage");

}
)


//handler for get method and /contact url

app.get("/contact", function (request, response) {
    response.send("contactpage");

}
)


app.get("/login", function (request, response) {
    // response.send("loginpage")

    response.json({
        "name": "user",
        "address": "vedu",
        "msg": "login successfully",
        "status": 200

    })
})
//method for response
/*
send()
json()   //javascript object notaion
download()
render()
sendfile() 

*/

app.get("/write/:filename/:content", function (request, response) {
    // response.send("loginpage")

    // response.json({
    //     filename:request.params

    // })
//response.json(request.params)

fileOp.myWrite(request.params.filename, request.params.content)
.then(function (done) {
    response.end(done)
})

.catch(function (err) {
    response.end(err)
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

