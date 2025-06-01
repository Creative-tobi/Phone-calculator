let result = document.getElementById("result");
function one() {
    result.value += "1"
}

function arc() {
  // let calculate = document.getElementById("calculate");
  // result.innerHTML = ``  ;
  result.value = " " ;
}

function equal() {
    result.value = eval(result.value) ;
    
}

function back() {
  result.value = result.value.substring(0, result.value.length - 1);
}


// function back() {
//     result.value -= "1" ;
//     // document.getElementById("result").value = ' ' ;
// }

function two() {
  result.value += "2";
}

function three() {
  result.value += "3";
}

function four() {
  result.value += "4";
}

function five() {
  result.value += "5";
}

function six() {
  result.value += "6";
}

function seven() {
  result.value += "7";
}

function eight() {
  result.value += "8";
}

function nine() {
  result.value += "9";
}

function plus() {
  result.value += "+";
}

function minus() {
  result.value += "-";
}

function percent() {
  result.value += "%";
}

function divide() {
  result.value += "/";
}

function multiply() {
  result.value += "*";
}

function zero() {
  result.value += "0";
}

function dot() {
  result.value += ".";
}