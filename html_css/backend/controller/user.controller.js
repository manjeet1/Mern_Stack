const router = require('express').Router()
// or
// const express = require('express')
// const router = express.Router()


router.get('/view', function (req, res, next) {
    res.json({
        msg: "view all user"


    })
})


router.route("/:user_id")

    .get(function (req, res, next) {
        res.json({
            msg: "get single user details"

    })

}) 


.post(function (req, res, next) {
    res.json({
    

})

}) 
    


.put(function (req, res, next) {
    res.json({


})

}) 
    


.delete(function (req, res, next) {
    res.json({
      

})

}) 
    
            

module.exports=router;
