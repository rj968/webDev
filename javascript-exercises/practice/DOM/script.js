// TODO
// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:

//     another <h1> that says “I’m in a div”
//     a <p> that says “ME TOO!”

const _body = document.body;

const para = document.createElement("p");
para.style["color"] = "red";
para.textContent = "Hey I'm red!";

_body.appendChild(para);

const heading = document.createElement("h3");
heading.style.color = "blue";
heading.textContent = "I'm a blue h3!";

_body.appendChild(heading);

const div = document.createElement("div");
div.style.borderColor = "black";
div.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

const divPara = document.createElement("p")
divPara.textContent = "ME TOO!"

div.appendChild(h1)
div.appendChild(divPara)

_body.appendChild(div);

// the JavaScript file
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

btn.addEventListener("click", function (e) {
  console.log(e);
});


// the JavaScript file
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  alert("Hello World");
});
