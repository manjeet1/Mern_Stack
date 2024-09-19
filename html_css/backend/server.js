
const http = require("http")
const fileOp = require("./fileop");


/*

server

client-server architecture/communication

client program(react)

server program


protocal

http
http verbs/method  get,post,delete,put,patch
http status
200  => sucess
300  =>warning
400 =>application error 
500 =>server error

*/

//program
//set of instruction
var server = http.createServer(function (request, response) {

    // console.log("welcome to node js server")
    // console.log("request is : " , request)

    console.log("request method  is :", request.method)
    console.log("request url is :", request.url)
    console.log("request url is: ", request.url.split('/'));
    //regardless of any method and url this call is executed
    //response.end("welcome to node js server")
    //response.end("welcome to node js  again server") cna not send multiple 

    //any method

    //url must be 'login'
    if (request.url === "/login") {

        response.end("hi from login page");
    }

    //url must be 'register'
    else if (request.url === "/register") {
        response.end("from register page");
    }


    //url must be 'write'
    else if (request.url === "/write") {


        // file write
        fileOp.myWrite("node.js", "hi from node js")
            .then(function (done) {
                response.end(done)
            })
            .catch(function (err) {
                response.end(err)
            })




    }

    //url must be 'read'
    else if (request.url === "/read") {
        response.end("read file");
    }

    else if (request.url === "/rename") {
        response.end("file rename");
    }


    else if (request.url === "/delete") {
        response.end("file delete");
    }





    else {

        // response.end("from default end point");


        var fielname = request.url.split('/')[2]
        var content = request.url.split('/')[3]
        fileOp.myWrite(fielname, content)
            .then(function (done) {
                response.end(done)
            })

            .catch(function (err) {
                response.end(err)
            })



    }

})

//process
//action of program
//5 digit  like 80000
//server.listen(8000,"localhost");

server.listen(8000, "127.0.0.1", function (err, done) {

    if (err) {

        console.log(err)
    }

    else {
        console.log("sever listening at port 8000")
    }

})



