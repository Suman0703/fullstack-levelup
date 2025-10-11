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

