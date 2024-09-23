
const express = require("express");

const fileOp = require('./fileop');

const morgan=require('morgan')



const app = express();
//app is now entire express feramework

const port = 8000;


app.use(morgan('dev'))

app.get('/', function (req, res) {
    res.send('hello, world!')
  })




app.use("/help", function (req, res, next) {

    res.json({
        msg: "from help page"
    })

})



app.use(function (req, res, next) {

    console.log("From first middleware")
       req.name="vedu"

    // res.json({
    //     msg: "blocked at first middleware",
    //     middlewareData:req.name
    // })
 

    next()

})


app.use(function (req, res, next) {
    console.log("From second middleware")

    res.json({
        msg: "blocked at second middleware",
        location:req.name   
  
    })
})

//handler for get method and empty url

//regardless of any method and any url





//handler for get method and /contact url

app.get("/", function (request, response) {
    response.send("homepage");

}
)

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

// app.get("*",function(res,res){
//     res.json({
//         msg:"page not Found",
//         status:404

//     })
// })




app.get('/user/update/:id', function (req, res) {



    var reg_username = "manjeet"
    var reg_password = "abc123"

    if (req.query.username == reg_username && req.query.password == reg_password) {

        res.json({

            msg: "logged in sucessfully",
            status: 200
        })

    }
})


//regardless of any method and url

// app.use(function (req, res) {

//     res.json({

//         msg: "Page not Found!!",
//         status: 404
//     })
// })

app.use(function (req, res, next) {
    res.json({
        msg: "Page not founct",
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








// res.json({
//     msg: "from user update",
//     user_id: req.params.id,
//     //queryDate:req.query
//     //queryDate:req.query.hero
//     uwername:req.query.username,
//     password:req.query.password
//  })






//middleware

/*



function(req,res,next){

}

app.use(middleware)

app.user(function(req,res,next)
{

})

=> middleware is a function which has access to request object ,response object and next middleware function reference
=> middleware always came into action in between req-res cycle 
=> middleware can modify request object

function(req,res,next){

}



*/
