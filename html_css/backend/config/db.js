const mongoose=require("mongoose")
const config=require("./db.config")


mongoose.connect(config.connectionURL+"/"+config.dbName)
.then(function(done){
console.log("Database connected successfully!!!")

})


.catch(function(err){

    console.log("error is: ",err)

})


