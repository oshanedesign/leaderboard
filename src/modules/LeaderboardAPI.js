const input1 = document.querySelector('#name');
const input2 = document.querySelector('#score');
const addBtn = document.querySelector('#add-score-button');
const outputHTML = document.querySelector('#output-list-score');

let addScore = () => {
  const listResult = document.createElement('li');
  listResult.classList = 'output-list-score-style';
  listResult.textContent = `${input1.value}: ${input2.value}`;
  outputHTML.appendChild(listResult);
};

addBtn.addEventListener('click', addScore);

export default addScore;

//get game ID
async function newGame() {
  const requestURL ='https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
  const request = new Request(requestURL);
  const response = await fetch(request, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ name: 'New Game'}),
  });
  const data = await response.json();
  return data;
}
newGame();

//create user score
let newAddScore = async (user, score) => {
  const response = await fetch(`${requestURL}/${id}/scores/`)
}
