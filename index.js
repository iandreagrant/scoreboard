let add1El = document.getElementById("home-add1-btn")
let add2El = document.getElementById("home-add2-btn")
let add3El = document.getElementById("home-add3-btn")

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homeContainer = document.getElementById("home-container");
let guestContainer = document.getElementById("guest-container");

let homeCurrentScore = 0
let guestCurrentScore = 0

function homeAdd1() {
    homeCurrentScore += 1
    homeScoreEl.textContent = homeCurrentScore
    updateScores()
}

function homeAdd2() {
    homeCurrentScore += 2
    homeScoreEl.textContent = homeCurrentScore
    updateScores()
}

function homeAdd3() {
    homeCurrentScore += 3
    homeScoreEl.textContent = homeCurrentScore
    updateScores()
}

function guestAdd1() {
    guestCurrentScore += 1
    guestScoreEl.textContent = guestCurrentScore
    updateScores()
}

function guestAdd2() {
    guestCurrentScore += 2
    guestScoreEl.textContent = guestCurrentScore
    updateScores()
}

function guestAdd3() {
    guestCurrentScore += 3
    guestScoreEl.textContent = guestCurrentScore
    updateScores()
}

function newGame() {
    homeCurrentScore = 0
    guestCurrentScore = 0
    homeScoreEl.textContent = homeCurrentScore
    guestScoreEl.textContent = guestCurrentScore  
    homeScoreEl.classList.remove("highlight")
    guestScoreEl.classList.remove("highlight")
}

function updateScores() {
  homeScoreEl.textContent = homeCurrentScore;
  guestScoreEl.textContent = guestCurrentScore;
  updateLeaderHighlight();
}

function updateLeaderHighlight() {
  if (homeCurrentScore > guestCurrentScore) {
    homeScoreEl.classList.add("highlight")
    guestScoreEl.classList.remove("highlight")
  } 
  
  else if (guestCurrentScore > homeCurrentScore) {
    guestScoreEl.classList.add("highlight")
    homeScoreEl.classList.remove("highlight")
  } 
  
  else {
    homeScoreEl.classList.remove("highlight")
    guestScoreEl.classList.remove("highlight")
  }
}