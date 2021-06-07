const MAX_HIGHSCORES = 5;

const username = document.getElementById('username');
const submitScoreBtn = document.getElementById('submit-score-btn');
const finalScore = document.getElementById('final-score');
const recentScore = localStorage.getItem('recentScore');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
finalScore.innerText = recentScore;

username.addEventListener('keyup', () => {
    submitScoreBtn.disabled = !username.value;
});

saveScore = (e) => {
    console.log("submit button clicked");
    e.preventDefault();

    const score = {
        score: recentScore,
        name: username.value
    };
    
    highScores.push(score);
    highScores.sort( (a,b) => b.score - a.score );
    highScores.splice(5);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("index.html");
}