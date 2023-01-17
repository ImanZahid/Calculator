//console.log(window); to see all the var that already exit and cant be used

var history1 = [];

function showHistory() {
  calform.display.value = `History: \n ${history1.join("\n")}`;
}

function calculate() {
  //alert("Working");
  var num1 = calform.num1.value;
  var num2 = calform.num2.value;
  var opr = calform.opr.value;

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  history1.push(`${num1}${opr}${num2}`);

  var error = "";

  if (isNaN(num1)) {
    //  alert("The first number is invalid");
    error += "The first number is invalid";
  }
  if (isNaN(num2)) {
    // alert("The second number is invalid");
    error += "The second number is invalid\n";
  }

  if (error.length === 0) {
    var result;

    switch (opr) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        {
          if (num2 === 0) {
            error += "Division by zero!!";
          } else {
            result = num1 / num2;
          }
        }
        break;
    }

    if (error.length === 0) {
      calform.display.value = result;
      if (calform.log.checked) {
        var now = new Date();
        var out = `\n\n LOG:\n`;
        out += `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
        out += `\n${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        calform.display.value += out;
      }
    }
  }
  if (error.length !== 0) {
    calform.display.value = error;
  }
}
