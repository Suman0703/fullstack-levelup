// const Docbody = document.body;  
// Docbody.style.backgroundColor ="yellow";

// console.log(Docbody);

// const box2 = document.getElementById("box-2");
// console.log(box2);

// const div = document.getElementsByTagName("div");
// console.log(div);

// const Class = document.getElementsByClassName("box");
// console.log(Class);

// const Query = document.querySelector(".container .random");
// console.log(Query);

// const Q = document.querySelectorAll(".container .box");
// console.log(Q);

const box1 = document.getElementById("box-1");
box1.innerHTML = " <h3> Hello HTML <h3>"

const box2 = document.getElementById("box-2");
box2.style.backgroundColor ="Pink";

//adding new class
box1.classList.add("round-border");
box2.classList.add("round-border");

//removing class 
box2.classList.remove("round-border");

//creating element 
const para = document.createElement("p");

para.innerText = "Thid brand new ";
para.classList.add("box");

const container = document.getElementById("container");
container.appendChild(para);
