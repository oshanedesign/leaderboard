const input1 = document.querySelector('#name');
const input2 = document.querySelector('#score');
const addBtn = document.querySelector('#add-score-button');
const outputHTML = document.querySelector('#output-list-score');

const addScore = () => {
  const listResult = document.createElement('li');
  listResult.classList = 'output-list-score-style';
  listResult.textContent = `${input1.value}: ${input2.value}`;
  outputHTML.appendChild(listResult);
};

addBtn.addEventListener('click', addScore);

const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const id = '7OLy4zgH9STKRFsheQOF';

// get the game ID
async function newGame() {
  const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
  const request = new Request(requestURL);
  const response = await fetch(request, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'New Game' }),
  });
  const data = await response.json();
  return data;
}

// create the user score
const newAddScore = async (user, score) => {
  const response = await fetch(`${requestURL}/${id}/scores/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user,
      score: Number(score),
    }),
  });
  const res = await response.json();
  return res;
};

// retrieve the user scores
const retrieveScores = async () => {
  const response = await fetch(`${requestURL}/${id}/scores/`);
  const listScores = await response.json();
  return listScores;
};

const showScores = async (userData) => {
  const scoresDisplay = document.querySelector('.scores-list');

  userData = await retrieveScores();
  const sortedData = userData.result.sort((a, b) => b.score - a.score);
  scoresDisplay.innerHTML = '';
  sortedData.forEach((element) => {
    const score = `
    <div>
    <p>${element.user}:<span>${element.score}</span></p>
    </div>
    `;
    scoresDisplay.innerHTML += score;
  });
};

export { newGame, newAddScore, showScores };
