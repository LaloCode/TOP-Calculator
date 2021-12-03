let prevNum = '';
let currentOperator = '';
let mainNum = '0';
let finishedOperation = false;

const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const prevResult = document.getElementById('PrevResult');
const currOperatorWindow = document.getElementById('CurrentOperator');
const mainResult = document.getElementById('MainResult');
const dotBtn = document.getElementById('dot');
const buttons = document.getElementsByClassName('Number');
const operatorButtons = document.getElementsByClassName('Operator');
const resultBtn = document.getElementById('equals');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (e) => addToMainNum(e.target.textContent));
}
for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', (e) => changeOperator(e.target.textContent));
}
document.addEventListener('keydown', checkKeyPress);
dotBtn.addEventListener('click', addDot);
resultBtn.addEventListener('click', solve);

function addToMainNum(number) {
  console.log(mainNum)
  if (mainNum == '0' || finishedOperation) {
    mainNum = number;
  } else {
    mainNum += number;
  }
  finishedOperation = false;
  refreshScreen();
}

function addDot() {
  for (let i = 0; i < mainNum.length; i++) {
    if (mainNum[i] === '.') {
      return;
    }
  }

  mainNum += '.';
  refreshScreen();
}

function changeOperator(newOperator) {
  if (mainNum && !prevNum) {
    prevNum = mainNum;
    mainNum = '';
    currentOperator = newOperator;
  }
  if (mainNum && prevNum) {
    solve();
    prevNum = mainNum;
    mainNum = '';
    currentOperator = newOperator;
  }
  if (prevNum && !mainNum) {
    currentOperator = newOperator;
  }
  refreshScreen();
}

function solve() {
  if (prevNum && mainNum) {
    const num1 = parseFloat(prevNum);
    const num2 = parseFloat(mainNum);
    let result;
    if (currentOperator === '+') {
      result = num1 + num2;
    }
    if (currentOperator === '-') {
      result = num1 - num2;
    }
    if (currentOperator === 'x' || currentOperator === '*') {
      result = num1 * num2;
    }
    if (currentOperator === '÷' || currentOperator === '/') {
      result = num1 / num2;
    }
    currentOperator = '';
    prevNum = '';
    mainNum = result;
    finishedOperation = true;
    refreshScreen();
  }
}

function checkKeyPress(e) {
  console.log(e.key);

  if (/^[0-9]$/i.test(e.key)) {
    addToMainNum(e.key);
  }
  if (e.key === '.') {
    addDot();
  }
  if (e.key === 'Enter' || e.key === '=') {
    solve();
  }
  if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
    changeOperator(e.key);
  }
}

function refreshScreen() {
  prevResult.textContent = prevNum;
  currOperatorWindow.textContent = currentOperator;
  mainResult.textContent = mainNum;
}
