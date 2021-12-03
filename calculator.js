let mainNum = '0';

const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const mainResult = document.getElementById('MainResult');
const dotBtn = document.getElementById('dot');
const buttons = document.getElementsByClassName('Number');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (e) => addToMainNum(e.target.textContent));
}
document.addEventListener('keydown', checkKeyPress);
dotBtn.addEventListener('click', addDot);

function addToMainNum(number) {
  if (mainNum === '0') {
    mainNum = number;
  } else {
    mainNum += number;
  }
  mainResult.textContent = mainNum;
}

function addDot() {
  for (let i = 0; i < mainNum.length; i++) {
    if (mainNum[i] === '.') {
      return;
    }
  }

  mainNum += '.';
}

function checkKeyPress(e) {
  console.log(e.key);

  if (/^[0-9]$/i.test(e.key)) {
    addToMainNum(e.key);
  }
  if (e.key === '.') {
    addDot();
  }
}