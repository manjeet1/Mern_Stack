
const fs = require('fs')
// fs.writeFile("./demo.txt", "My file created file name is demo",

// //     function (err, done) {

// //         if (err) {

// //             console.log("error is ", err)

// //         }
// //         else {

// //             console.log("sucess is file write")

// //         }

// // })





// fs.writeFile("./contents/demo.txt", "My file created file name is demo",

//     function (err, done) {

//         if (err) {

//             console.log("error is ", err)

//         }
//         else {

//             console.log("sucess is file write")

//         }

// })



// function myWrite(filename,content){
//     fs.writeFile("./contents/"+filename, content,

//         function (err, done) {

//             if (err) {

//                 console.log("error is ", err)

//             }
//             else {

//                 console.log("sucess is file write")

//             }

//     })

// }


// myWrite("filenew.txt","welcome to node js");



//handling result using call back

// function myWrite(filename, content, cb) {
//     fs.writeFile("./contents/" + filename, content,

//         function (err, done) {

//             if (err) {

//                 //console.log("error is ", err)
//                 cb(err, null)

//             }
//             else {

//                 //console.log("sucess is file write")

//                 cb(null, "sucess in file write")
//             }

//         })

// }


// myWrite("ourfilenew.txt", "welcome to node js", function (err, done){

//     if (err) {

//         console.log("error ", err)
//     }
//     else {

//         console.log("sucess", done)

//     }


// })




function myWrite(filename, content) {
    return new Promise(function (resolve, reject) {
        fs.writeFile("./contents/" + filename, content,

            function (err, done) {

                if (err) {

                    reject(err)

                }
                else {

                    resolve("done")
                }

            })

    })
}



myWrite('promise.txt', "handling result using promise")
    .then(function (done) {

        console.log("sucess in file write", done)
    })

    .catch(function (err) {
        console.log("Error in file write", err)

    }

    )








 

// fs.writeFile("./contents/newdemo.txt", "file write using node", function (err, done) {
//     if (err) {
//         console.log("error is: ", err)
//     }
//     else {
//         console.log("success in file write")
//     }
// })


// handle result using callback
// function myWrite(filename, content, cb) {
//     fs.writeFile("./contents/" + filename, content, function (err, done) {
//         if (err) {
//             // console.log("error is: ", err);
//             cb(err)
//         }
//         else {
//             // console.log("success in file write");
//             cb(null, 'success in file write')
//         }
//     })
// }

// myWrite('ourfile.txt', 'hi from our file', function (err, done) {
//     if(err){
//         console.log("error: ",err)
//     }
//     else{
//         console.log("success: ", done)
//     }
// });
// myWrite("nextfile.txt", "welcome to node js");



// make it functional
// export it
// import it from another file

function myWrite(filename, content) {
    return new Promise(function (resolve, reject) {
        fs.writeFile("./contents/" + filename, content, function (err, done) {
            if (err) {
                reject(err)
            }
            else {
                resolve("done")
            }
        })
    })
}

// myWrite('newmypromise.txt', 'handling result using promise')
//     .then(function (done) {
//         console.log("success in file write", done)
//     })
//     .catch(function (err) {
//         console.log("error in file write: ", err)
//     })

function ReadFile(filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile("./contents/" + filename, "UTF-8", function (err, done) {
            if (err) {
                reject(err)
            }
            else {
                resolve(done)
            }
        })
    })
}


function renameFile(oldFile, newFileName) {
    return new Promise(function (resolve, reject) {
        fs.rename("./contents/" + oldFile, './contents/' + newFileName, function (err, done) {
            if (err) {
                reject(err)
            }
            else {
                resolve(done)
            }
        })
    })
}

function deleteFile(filename){
    return new Promise(function(resolve, reject){
        fs.unlink("./contents/"+filename, function(err, done){
            if(err){
                reject(err)
            }
            else{
                resolve("done")
            }
        })
    })
}

module.exports = {
    myWrite: myWrite,
    ReadFile: ReadFile,
    renameFile:renameFile,
    deleteFile:deleteFile
}