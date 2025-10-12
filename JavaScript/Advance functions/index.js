//Arrow function
const greet = ()=>{
    console.log("Hello world");
    
}

greet();

const count = (ct)=>{
    for(let i =0; i< ct; i++){
        console.log("hello",i);
        
    }
}

count(4);

//expression function
const variable =(num)=> num*num;

console.log(variable(5));

//callback function
//normal function
let greets =(name,callback)=>{
    console.log('hi',"",name);
    callback();
}

//callback function
let callme = ()=>{
    console.log("I am a Callback Function");
    
}

//passing function as an argument
greets('Suman',callme)

//find 
const a = [1, -2, -3, 4, 5, 6, -7, 8, 9,];

const firstneg =(num)=>{
    return num<0;
}
const result = a.find(firstneg);
console.log(result);

//find index
const x = a.findIndex(firstneg);
console.log(x);

//for each
a.forEach((num,i)=>{
console.log("array num",num,i);

})