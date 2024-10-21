module.exports = function (req, res, next) {


    if (req.query.isAdmin == "manjeet") {
        next()

    }
    
    else
    {
    next({
        msg: "authentication fail ,you dont have access"

    })
}
}