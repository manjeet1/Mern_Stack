const express = require('express')

const router = express.Router()

const mongodb = require("mongodb");
const UserModel = require('../model/user.model');
const mapUser = require("./../helpers/mapUser")
const passwordHash=require("password-hash")

const mongoClient = mongodb.MongoClient;


const connectionURL = 'mongodb://localhost:27017'


const dbName = "group7db"





// console.log("root directory :",__dirname)
// console.log("root directory: ",process.cwd())

//  /auth/login

router.get('/login', function (req, res, next) {

    res.json({
        msg: "From loogin page"

    })
})


// authy/login

router.post('/login', function (req, res, next) {


})


// auth/register

router.post('/register', function (req, res, next) {

    console.log("Data is : ", req.body)

    //db stuff

    mongoClient.connect(connectionURL)
        .then(function (client) {
            var database = client.db(dbName)
            var collection = database.collection("user")
            collection.insertOne(req.body)
                .then(function (newUser) {

                    res.json({

                        registeredUser: req.body,

                        msg: "Hi " + req.body.username + " your account has been creadted  successfully"
                    })


                })
                .catch(function (err) {
                    return next(err)

                })

        })
        .catch(function (err) {
            return next(err)

        })



})



router.post("/signup", function (req, res, next) {
    UserModel.find({
        email: req.body.email
    })
        .then(function (user) {
            if (user[0]) {
                return next({
                    msg: "Email Already Exist/User already registered",
                    status: 404
                })
            }
            if (!user[0]) {
                const user = new UserModel()
                // user is now mongoose object
                // if (req.body.email) {
                //     user.email = req.body.email
                // }
                // if (req.body.password) {
                //     user.password = req.body.password
                // }


                // if (req.body.username) {
                //     user.username = req.body.username
                // }
                // if (req.body.phone_number) {
                //     user.phone = req.body.phone_number
                // }
                // if (req.body.date_of_birth) {
                //     user.dob = req.body.date_of_birth
                // }
                // if (req.body.gender) {
                //     user.gender = req.body.gender
                // }
                // if (!user.address) {
                //     user.address = {}
                // }
                // if (req.body.temporary_address) {
                //     user.address.temporaryAddress = req.body.temporary_address
                // }
                // if (req.body.permanent_address) {
                //     user.address.permanentAddress = req.body.permanent_address
                // }

                var new_user = mapUser(user, req.body)
                if (req.body.email) {
                    new_user.email = req.body.email
                }

                if (req.body.password) {
                    new_user.password =passwordHash.generate(req.body.password)
                }

                new_user.save()

                    .then(function (newUser) {
                    res.json(newUser)
                })
                    .catch(function (err) {
                        return next(err)
                    })
            }
        })
        .catch(function (err) {
            return next(err)
        })
})



module.exports = router