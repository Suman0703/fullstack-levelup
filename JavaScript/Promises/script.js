let ticket = new Promise(function(resolve, reject){
    const isBoarded = false;
    if (isBoarded) {
        resolve("You are not in the flight");
    }else{
        reject("you flight has been cancelled");
    }
});

ticket.then((data)=>{
    console.log("Wohoo",data);
    
}).catch((data)=>{
    console.log("Oh No",data);
    
}).finally(()=>{
    console.log("i wll always be executed");
    
})

//other example
function getcheese() {

    return new Promise((resolve, reject) => {
       setTimeout(() => {
        const cheese = "🧀";
        resolve(cheese)   
     }, 2000); 
    })
    
}
getcheese().then((cheese)=>{
    console.log("here is the cheese",cheese);
    
}).catch((cheese)=>{
    console.log("error occured ");
    
})
