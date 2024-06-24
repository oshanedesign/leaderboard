import './style.css';
import * as API from './modules/LeaderboardAPI.js';

const refresh = document.querySelector('.recent-scores-refresh-button');
const form = document.querySelector('.add-your-scores-container');

document.addEventListener('DOMContentLoaded', API.showScores);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;

  API.newAddScore(name, score);
  form.reset();
});

refresh.addEventListener('click', (e) => {
  e.preventDefault();
  API.showScores();
});
