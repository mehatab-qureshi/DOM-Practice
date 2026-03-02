//selecting ele
// let mypara = document.querySelectorAll(".demo");
// mypara[1].innerHTML = "This is dom";

// //forEach method
// mypara.forEach((para) => {
//   para.innerHTML = "This is dom";
// });

// //accessing ele content
// let mypara = document.querySelector(".demo");
// // mypara.innerHTML = "<b>hello</b>hello";
// mypara.innerText = "<b>hello</b>hellooo";

// //accessing attributes
// let input = document.getElementById("username");
// console.log(input.value);
// console.log(input.type);
// console.log(input.id);

// let div = document.querySelector("div");
// // console.log(div.data - role); //so to overcome this we have concept called getAttribute & setAttribute

// console.log(div.getAttribute("data-role"));
// div.setAttribute("data-role", "hello");
// console.log(div.getAttribute("data-role"));

// //diff btw .val n getAttr
// console.log(input.value);
// input.value = "mehatab qureshi";
// console.log(input.value);

// console.log(input.getAttribute("value"));

//style property

// let box = document.querySelector(".box");
// box.style.backgroundColor = "blue";
// box.style.width = "200px";

// //dom events
// let date = document.querySelector(".datee");

// let btn = document.querySelector(".dateee");
// btn.addEventListener("click", () => {
//   date.innerHTML = Date();
// });

//event listener and its management
let hi = document.querySelector(".hi");
let add = document.querySelector(".add");
let remove = document.querySelector(".remove");

let text = () => {
  hi.innerHTML = "Text Added";
};

add.addEventListener("click", text);
remove.removeEventListener("click", text);

//event bubbling & capturing
//bubbling(defualt)
let parent = document.querySelector(".parent");
let child = document.querySelector(".child");

// child.addEventListener("click", () => {
//   console.log("chiiiiild clicked");
// });

// parent.addEventListener("click", () => {
//   console.log("parent clicked");
// }); //first child chelga nxt parent

//capturing
parent.addEventListener("click", () => {
  console.log("parent clicked");
},true);

child.addEventListener("click", () => {
  console.log("child clicked");
}); //parent first then child


//Timing Events...