// var result=function(){
//     console.log("i am unnamed funtion");
// }

// console.log(typeof(result))

// result();



// demo();
// function demo(){
// console.log("nameed demo function")
// }




// setInterval(function ()  {
//     console.log("hi");
// }, 1000);


// setTimeout(function() {
//     console.log("delay 4 second")
// }, 4000);



// console.log("hello");



// demo();
// (demo());


// (function(){
//     console.log(" i am unnamed function")
//     console.log("i am taking help of IIFE to get execute")
// })()




// var i=0 
//  setInterval(function ()  {
//     console.log(++i);

//  }, 1000);


function welcome(name) {

    return name;

}

// console.log(welcome('manjeet'))

var sname = welcome('Sanjeet');

console.log(sname);



// function dispList() {
//     var fruits = ['kiwi', 'Apple']

//     var languages = {
//         language1:"python",
//         language2 : ".Dotnet",
//         language3:"java",
//     }

//     return {
//         fruits: fruits,
//         languages: languages

//     };
// }


// var result=dispList();

// console.log(result);
// console.log(result.fruits[0], result.fruits[1]);

function displayList(){
    var fruits = ['kiwi', 'apple']
    var languages = {
        language1:'javascript',
        language2:'python',
        language3:'Java',
    }

    return {
        fruits:fruits,
        languages:languages
    };
}


var result = displayList();
console.log(result);
console.log(result.fruits[0], result.fruits[1]);

