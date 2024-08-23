const display = document.getElementById("display");

function appendValue(value) {
  if (/[\+\-\*\/]$/.test(display.value) && /[\+\-\*\/]$/.test(value)) {
    display.value = display.value.slice(0, -1) + value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "";
}

function deleteLastChar() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    const result = new Function(`return ${display.value}`)();

    if (result === Infinity || result === -Infinity) {
      display.value = "Cannot be divided by zero";
    } else if (isNaN(result)) {
      display.value = "Invalid Input";
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = "Error";
  }
}
