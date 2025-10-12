//eventhandler
function myfun() {
  alert("i was clicked");
};

function mouse() {
    console.log("mouse over");
};

//Event listners
const box1 = document.getElementById("box-1");
box1.addEventListener("click",()=>{
    alert("clicked");
});

const container = document.getElementById("container");
container.addEventListener("click",()=>{
    alert("clicked on container");
},true);

//bubbling and capture
// in capturing outer most elements event is handled first