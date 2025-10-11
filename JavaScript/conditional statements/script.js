// if-else
const age = 23;

if(age>=18){
    console.log("you are inside if");
    console.log("You can Vote");
} else{
    console.log("you can not vote");
    
}

//if-else-if
let number = 72;
if (number >= 90)
{
console.log(" O grade ");
}
else if( number > 80)
{
console.log("A grade");
}
else if(number > 60)
{
    console.log("B grade");
}
else if ( number > 30){
    console.log("Pass");
    
}
else{
    console.log("Fail");
    
};

//Nested if 
let Age = 9;
if (Age<18){
    console.log("you cannot vote");
    if(Age < 10){
        console.log("you are too young for voting");
        
    }
}
else{
    console.log("you can vote");
    
}

// Ternary operator
const x = 45;

const result = (x > 40)?"PASSED":"FAILED";
console.log(result);
