
// var name = "sita";
// var address = "Lalitpur";


// var text = "my name : " + name + "My address :" + address

// var result = `my name ${name} my address ${address}`

// console.log(result);


// function hi() {

//     console.log("hi from es5 function");


// }


// hi();


// const hello = () => {
//     console.log("hi from es6 function")
// }




// hello();



// const hello1 = (a,b) => {
//     console.log("hi from es6 function",a,b);
// }

// hello1(4,5);



const ret = a => a;
// console.log(ret(100))



var laptops = [
    {
        name: 'acer',
        generation: 'i7',
        ram: '8GB'
    },
    {
        name: 'samsung',
        generation: 'i7',
        ram: '8GB'
    },
    {
        name: 'acer',
        generation: 'i5',
        ram: '4GB'
    },
    {
        name: 'dell',
        generation: 'i3',
        ram: '8GB'
    }]


var delllaptop = laptops.filter(item => item.name === "dell")
// console.log(delllaptop);



var a = {
    names: 'rahul'
}

var b = {
    city: 'ktm'
}

var c = {
    ...a,
    ...b,

}
a.location = "random"
c.data = "testdata"
// console.log(a)    
// console.log(c)


//rest operator 
var data1 = 12342;
var data2 = 'suraj';
var data3 = true;
var main_data = { data1, data2, data3 }

const dataResult = main_data => { 
    return main_data;

}

var data_result =dataResult(main_data)
//console.log(data_result)


var {data1,...rest} =dataResult(main_data)
console.log(data1)
console.log(rest)

