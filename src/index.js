import './style.css'
// import addScore from './modules/addScore.js'

//  function myFunction() {
//     const x = document.querySelector(".add-your-scores-container");
//     const text = "";
//     const i;
//     for (i = 0; i < x.length; i++) {
//       text += x.elements[i].value + ":";
//     }
//     document.querySelector("#list-score").innerHTML = text;
//   };

const input1 = document.querySelector('#name');
const input2 = document.querySelector('#score');
const addBtn = document.querySelector('#add-score-button');
const outputHTML = document.querySelector('#output-list-score');

function addScore() {
  const listResult = document.createElement('li');
  listResult.classList = "output-list-score-style"
  listResult.textContent = input1.value + ':' + input2.value;
  outputHTML.appendChild(listResult);
}

addBtn.addEventListener('click', addScore);


