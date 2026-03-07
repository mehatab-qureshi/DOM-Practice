//accessiing js through html
console.log(document);
console.log(document.body);
console.log(document.title);

//selecting ele
// let mypara = document.querySelectorAll(".demo");
// mypara[1].innerHTML = "This is dom";

// //forEach method
// mypara.forEach((para) => {
//   para.innerHTML = "This is dom";
// });

// //accessing ele content
// let mypara = document.querySelector(".demo");
// mypara.innerHTML = "<b>hello</b>hello";//we are setting content
// mypara.innerText = "<b>hello</b>hellooo";
// console.log(mypara.textContent);  //we are getting hidden content

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

//classList
// let body = document.querySelector("body");
// let darkmode = document.querySelector(".darkmode");
// darkmode.addEventListener("click", () => {
//   body.classList.toggle("dark");
// });

//creating & removing ele
let h2 = document.createElement("h2");
let body = document.querySelector("body");
h2.innerText = "created and added content";
h2.classList.add("boxx");
h2.setAttribute("id", "b2");
body.appendChild(h2);

//todo list
let addlist = document.createElement("button");
addlist.innerText = "Add";
body.appendChild(addlist);

let dellist = document.createElement("button");
dellist.innerHTML = "Del";
body.appendChild(dellist);

let myFunctionAdd = () => {
  let li = document.createElement("li");
  li.textContent = "HEllo";
  body.appendChild(li);
};

addlist.addEventListener("click", myFunctionAdd);
dellist.addEventListener("click", () => {
  let li = document.querySelector("li:last-child");
  li.remove();
});

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

//Event handling
let form = document.getElementById("form");
let namee = document.querySelector("#namee");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(namee.value);
  console.log("from submitted");
});

namee.addEventListener("keydown", (e) => {
  console.log(e.key);
});

namee.addEventListener("input", () => {
  console.log("Typing..."); //input event tab trigger hota hai jab user input field ki value change krta jab type kare, delete kare, paste kare — tab event trigger hota hai.
  console.log(namee.value);
});

//realworld
namee.addEventListener("input", () => {
  console.log("Searching", namee.value); //User jaise jaise type karega → live search run hoga.
});

//Event object
let evtobj = document.querySelector(".evtobj");
evtobj.addEventListener("click", (e) => {
  console.log(e);
  console.log(e.target);
  console.log(e.clientX);
  console.log(e.clientY);
  console.log(e.key);
});

// //event bubbling & capturing
// //bubbling(defualt)
let parent = document.querySelector(".parent");
let child = document.querySelector(".child");

// child.addEventListener("click", () => {
//   console.log("chiiiiild clicked");
// });

// parent.addEventListener("click", () => {
//   console.log("parent clicked");
// }); //first child chelga nxt parent

// //capturing
// parent.addEventListener(
//   "click",
//   () => {
//     console.log("parent clicked");
//   },
//   true,
// );

// child.addEventListener("click", () => {
//   console.log("child clicked");
// }); //parent first then child

//stop propagation
parent.addEventListener(
  "click",
  (e) => {
    e.stopPropagation(); //stops from entering to nxt evt
    console.log("parent clicked");
  },
  true,
);

child.addEventListener(
  "click",
  (e) => {
    console.log("Child clicked");
  },
  true,
);

//Event Deligation
let li = document.querySelectorAll("li");
li.forEach((items) => {
  items.addEventListener("click", (e) => {
    console.log("Items clicked", e.target);
  });
});

//login form
let loginform = document.getElementById("loginform");
let username = document.getElementById("username");
let password = document.getElementById("password");

loginform.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = username.value;
  let pwd = password.value;

  console.log(email, pwd);
});

//formData API
let signUpform = document.getElementById("signupForm");

signUpform.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  console.log(formData);

  //read data
  let name = formData.get("name");
  let email = formData.get("email");
  let password = formData.get("password");

  console.log("name:", name, "email:", email, "password:", password);

  //sab data ek sath print
  for (let [key, value] of formData) {
    console.log(key, value);
  }
});

//Validation form
let Form = document.getElementById("loginpage");

Form.addEventListener("submit", (e) => {
  e.preventDefault();

  let formdata = new FormData(e.target);
  let userName = formdata.get("username");
  let Password = formdata.get("password");

  if ((username === "") | (Password === "")) {
    console.log("Enter all the fields");
    return;
  }

  if (password < 6) {
    console.log("Password must be 6 characters");
    return;
  }
  console.log("Login successful")
});

//Timing Events...
