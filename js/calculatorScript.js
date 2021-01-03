//Strings
var outputString = ""
var currentResultString = "";
var operator = ''

//Numbers
var currentResult = 0.0;
var newNumber = 0.0;
var result = 0.0;

//booleans
var equalPressed = false;


function buttonPress(button) {
console.log("Button pressed : " + button);
  switch (button) {
    case 'd':
      newNumber = 0;
      currentResult = 0;
      outputString = ""
      currentResultString = ""
      var operator = ''
      equalPressed = false;
      break;
    case '/': case '*': case '+': case '-':
      operatorPressed(button);
      equalPressed = false;
      break;
    case '=':
      newNumber = calculate();
      outputString = newNumber;
      equalPressed = true;
      break;
    case '.':
      currentResultString += ".";
      outputString = outputString.concat(button);
      newNumber = parseFloat(currentResultString);
      equalPressed = false;
      break;
    default:
      currentResultString += button;
      outputString = outputString.concat(button);
      newNumber = parseFloat(currentResultString);
      equalPressed = false;
      break;
  }
  console.log("old number : " + currentResult);
  console.log("new number : " + newNumber);
  console.log("operator   : " + operator);
  document.getElementById("output").value = outputString;
}

function operatorPressed(newOperator) {
  operator = newOperator;
  currentResult = newNumber;
  newNumber = 0.0;
  currentResultString = ""
  outputString = ""
  if (equalPressed);
  else {
    calculate();
  }
}

function calculate() {
  switch (operator) {
    case '*':
      result = currentResult * newNumber;
      break;
    case '/':
      result = currentResult / newNumber;
      break;
    case '+':
      result = currentResult + newNumber;
      break;
    case '-':
      result = currentResult - newNumber;
      break;
  }
  return result;
}
