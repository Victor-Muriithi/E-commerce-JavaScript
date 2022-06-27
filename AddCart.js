
var number = 0;

var value = document.getElementById("number");
var bottomvalue = document.getElementById("zero");


function addValue (){
    number++;
    value.innerHTML = number;
    bottomvalue.innerHTML = number;
}

function decreaseValue (){
    number--;
    value.innerHTML = number;
    bottomvalue.innerHTML = number;
}