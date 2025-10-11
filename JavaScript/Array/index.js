//array
const word = ['suman','raman','simran','sonia'];

console.log(word);

console.log(word[2]);

//array with diiferent type of data types 
let array = ['suman', 1, 2, 3,4,{
    name:'DEVI'
},
function sum (){
    console.log('sum');
}
];

console.log(array);

//finding length of array
console.log(array.length);

//updating array 
const newwords = array;

newwords[1] = 'raman';
console.log(newwords);
console.log(array);

//some methods 
//finding index number
const num =[1, 22, 2, 3, 45, 4, 5, 6, 7];
console.log(num.indexOf(4));

//element is present or not
console.log(num.includes(3));

//adds new element at last
num.push(8);
console.log(num);

//adding new element in front 
num.unshift(0);
console.log(num);

//deleting last elemrnt 
num.pop();
console.log(num);

//remove from front 
num.shift();
console.log(num);

//sort
// num.sort();
// console.log(num);

const subarray = num.slice(2,22);
console.log(subarray);










