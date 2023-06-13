/* №1
let input = document.querySelector("input[type = text]");

input.addEventListener("keypress",function(evt){
    if (/^\d$/.test(evt.key)){ // \d means character is equivalent to [0-9]
        evt.preventDefault();
    }
})
 */

/* №2
let btn = document.querySelector("#open");
let modal = document.querySelector(".main");
btn.addEventListener("click", function () {
    modal.style.display = "block";
});

let btnClose = document.querySelector("#close");
btnClose.addEventListener("click", function(){
    modal.style.display = "none";
})
 */

/* №4
let btn = document.querySelector("button");
let allDiv = document.querySelectorAll(".light")
btn.addEventListener("click", function () {
    if (allDiv[0].style.backgroundColor === "red") {
        allDiv[1].style.backgroundColor = "yellow";
        allDiv[0].style.backgroundColor = "gray";
    }
    else if (allDiv[1].style.backgroundColor === "yellow") {
        allDiv[2].style.backgroundColor = "green";
        allDiv[1].style.backgroundColor = "gray";
    }
    else if (allDiv[2].style.backgroundColor === "green") {
        allDiv[0].style.backgroundColor = "red";
        allDiv[2].style.backgroundColor = "gray";
    }
    else
        allDiv[0].style.backgroundColor = "red";
})
 */

/* №5
let arr = ["Javascript for kids", "Eloquent Javascript", "Javascript the good parts",
    "Programming Javascript", "Effective Javascript", "You Don't Know JS", "JavaScript"];
const ol = document.createElement("ol");

for (let book of arr) {
    const li = document.createElement("li");
    li.innerText = book;
    const menu = document.querySelector("main");
    ol.append(li);
    menu.appendChild(ol);
    li.addEventListener("click", function () {
        this.classList.toggle("change");
    })
}
 */

