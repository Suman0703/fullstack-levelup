//function
function sum(a,b) {
    const sum = a+b;
    console.log("Result",sum);
    return sum;
    
}

const a = 10;
const b = 34;
sum(a,b);

sum(2,3);

const c =  6;
const d = 8;
sum(c,d);

//return statement
const result = sum(c,d);
console.log('return',result);

//function expression
//anonymous function

const square= function(num) {
    return num*num;
}

console.log(square);
console.log(square(4));


//nested functions 
function addSquares (a,b) {
    const sa= squ(a);
    const sb = squ(b);

    function squ(num) {
        return num*num;
    }
    //i can call this only inside a outer function
   return sa + sb ;
}

console.log(addSquares(3,4));
