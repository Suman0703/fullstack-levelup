console.log("hello");

//async function
setTimeout(() => {
    console.log("this will execute later");
    
}, 1000);

console.log("world");

//call back hell
console.log("Start");

setTimeout(() => {
  console.log("Step 1 done");

  setTimeout(() => {
    console.log("Step 2 done");

    setTimeout(() => {
      console.log("Step 3 done");

      setTimeout(() => {
        console.log("All steps completed!");
      }, 1000);

    }, 1000);

  }, 1000);

}, 1000);


//other example
function getcheese(callback) {
    setTimeout(() => {
        const cheese = "🧀";
        console.log("here is the cheese",cheese);
        callback(cheese);
    }, 2000);
}

getcheese((cheese)=>{
    console.log("got the cheese 🧀");
    
});