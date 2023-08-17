var container = document.getElementById("calc-1");

console.log(container);

var btnContainer = document.createElement("div");
btnContainer.className = " btnscontainer";

var funcContainer = document.createElement("div");
funcContainer.className = "funcContainer";

var operationContainer = document.createElement("div");
operationContainer.className = "operationContainer";

var numContainer = document.createElement("div");
numContainer.className = "numContainer";

var displayContainer = document.createElement("div");
displayContainer.className = "displayContainer";

var displayElement = document.createElement("input");
displayElement.className = "displayElement";
displayElement.type = "text";

btnContainer.append(funcContainer);
btnContainer.append(operationContainer);
btnContainer.append(numContainer);
displayContainer.append(displayElement);

container.append(displayContainer);
container.append(btnContainer);

////Buttons
var String = " ";
for (var i = 0; i < 9; i++) {
  var btn = document.createElement("button");
  btn.innerHTML = i;

  btn.addEventListener(
    "click",
    (function (index) {
      return function () {
        onNumButtonClick(index);
      };
    })(i)
  );
  btnContainer.appendChild(btn);
}

/////// Operation Button
var operation = ["+", "-", "*", "/", "="];

for (var j = 0; j < operation.length; j++) {
  var opbtn = document.createElement("button");
  opbtn.innerHTML = operation[j];

  opbtn.addEventListener(
    "click",
    (function (index) {
      return function () {
        onOperationclick(index);
      };
    })(operation[j])
  );
  operationContainer.appendChild(opbtn);
}

/////// Function Button
var func = ["AC", "DEL", "."];

for (var k = 0; k < func.length; k++) {
  var funcBtn = document.createElement("button");
  funcBtn.innerHTML = func[k];

  funcBtn.addEventListener(
    "click",
    (function (index) {
      return function () {
        onFunctionclick(index);
      };
    })(func[k])
  );
  funcContainer.appendChild(funcBtn);
}

function onNumButtonClick(key) {
  document.querySelector("input").value += key;
}

function onOperationclick(key1) {
  if (key1 == "=") {
    calculate(document.querySelector("input").value);
    console.log("equal to btn called ");
  } else {
    console.log("else ");
    document.querySelector("input").value += key1;
  }
}

function onFunctionclick(key2) {
  if (key2 == "AC") {
    String = " ";
    document.querySelector("input").value = String;
  } else if (key2 == "DEL") {
    var disp = document.querySelector("input").value;
    var newstring = disp.slice(0, -1);
    disp = newstring;
    document.querySelector("input").value = disp;
    console.log(disp);
  }
}

function calculate(displayValue) {
  var calval = eval(displayValue);
  console.log(calval);
  document.querySelector("input").value = calval;
}
