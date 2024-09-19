var fruits=['kiwi','apple','mango','banana','orange','kiwi']
// console.log(fruits.indexOf("kiwi"));
// console.log(fruits.lastIndexOf("kiwi"));
// console.log(fruits.indexOf("banana"));
// console.log(fruits.includes("apple"));

// fruits.unshift("papaya");
// fruits.push("strawberry");
// fruits.shift();
// fruits.pop();
// console.log(fruits);



//slice

// console.log(fruits.slice(1,4));

//splice
fruits.splice(1,2);
console.log(fruits);
fruits.splice(1,0,"grapes","manjeet",25);
console.log(fruits);





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
    }];


    var delllaptop=laptops.filter(item => item.name === "dell")
    console.log(delllaptop);



