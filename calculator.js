let mainNum = '0';

const clearBtn = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const buttons = document.getElementsByClassName('Number');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', addToMainNum);
}

function addToMainNum(e) {
  if (mainNum === '0') {
    mainNum = e.target.textContent;
  } else {
    mainNum += e.target.textContent;
  }
}