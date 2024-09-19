
/*

application data:
var,lef,const,funtion

scope
accessibility of application data
var,let,const

1.global scope
2.funtional/local scope
3 block scope

*/

//global scope
//accessible within a file
//declare in outermost layer

// var n=23;
// let a='ram';
// address ='h1';
// const pi=3.14;

//functional/local scope
// declare within a function 
// var maintain function scope
//accessible within a function

// var a=15;
// function demo(name,address){

//     //name and address (parameter)is function scopte
// console.log(name,address);
// var a=12;
// console.log(a);

// }

// demo('ram','vedu');

// console.log(a);

// console.log(name,address)




//block scope
//declare within a block
//accessible within a block
//{}


var greetingText="hi";

if(true){
    let greetingText="hello";
    console.log(greetingText)
}

else{
    var greetingText="good morning"
    console.log(greetingText)
}

console.log(greetingText);



