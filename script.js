function calculate(op) {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);

  if (!num1 && !num2) {
    alert("Please enter two numbers!");
    return;
  }

  let result;

  if (op === "+") {
    result = num1 + num2;
  } else if (op === "-") {
    result = num1 - num2;
  } else if (op === "*") {
    result = num1 * num2;
  } else if (op === "/") {
    if (num2 === 0) {
      result = "Can't divide by zero";
    } else {
      result = num1 / num2;
    }
  } else {
    result = "Unknown operation";
  }

  document.getElementById("result").innerText = "Result: " + result;

  if (typeof result === "number") {
    if (result % 2 === 0) {
      document.getElementById("result").innerText += " (Even)";
      document.getElementById("result").style.color = "green";
    } else {
      document.getElementById("result").innerText += " (Odd)";
      document.getElementById("result").style.color = "red";
    }
  } else {
    document.getElementById("result").style.color = "black";
  }
}
