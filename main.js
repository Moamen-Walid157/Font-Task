var x = document.getElementById("mytxt");
var y = document.getElementById("result");

function mytxt(){
    y.innerHTML=(x.value);
}

function btn1(){
    y.classList.add("one")
    y.classList.remove("two")
    y.classList.remove("three")
    y.classList.remove("four")
}
function btn2(){
    y.classList.remove("one")
    y.classList.add("two")
    y.classList.remove("three")
    y.classList.remove("four")
}
function btn3(){
    y.classList.remove("one")
    y.classList.remove("two")
    y.classList.add("three")
    y.classList.remove("four")
}
function btn4(){
    y.classList.remove("one")
    y.classList.remove("two")
    y.classList.remove("three")
    y.classList.add("four")
}