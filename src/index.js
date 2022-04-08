import './style.css';
import * as API from './modules/LeaderboardAPI.js';

const refresh = document.querySelector('.recent-scores-refresh-button');
const form = document.querySelector('.add-your-scores-container');

document.addEventListener('DOMContentLoaded', API.showScores);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input1 = document.querySelector('#name').value;
    const input2 = document.querySelector('#score').value;

    API.newAddScore(input1, input2);
    form.requestFullscreen();

})