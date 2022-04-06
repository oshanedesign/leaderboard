const input1 = document.querySelector('#name');
const input2 = document.querySelector('#score');
const addBtn = document.querySelector('#add-score-button');
const outputHTML = document.querySelector('#output-list-score');

const addScore = () => {
  const listResult = document.createElement('li');
  listResult.classList = 'output-list-score-style';
  listResult.textContent = `${input1.value}: + ${input2.value}`;
  outputHTML.appendChild(listResult);
};

addBtn.addEventListener('click', addScore);

export default addScore;