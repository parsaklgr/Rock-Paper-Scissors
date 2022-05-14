function computerPlay() {
    const Moves = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return Moves[randomIndex];
}

function playOneRound(playerSelection, computerSelection) {
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();
    let youWin = (ps, cs) => {
        return `You Win! ${ps[0].toUpperCase() + ps.substring(1)} beats ${cs[0].toUpperCase() + cs.substring(1)
            }`;
    }

    let youLose = (ps, cs) => {
        return `You Lose! ${cs[0].toUpperCase() + cs.substring(1)} beats ${ps[0].toUpperCase() + ps.substring(1)
            }`;
    }
    if (ps === cs) {
    return "The same move. try again!"
    } else if (ps === "rock") {
        switch (cs){
            case "paper":
                return youLose(ps, cs);
                break;
            case "scissors":
                return youWin(ps, cs);
                break;
        }       
    } else if (ps === "paper") {
        switch (cs) {
            case "scissors":
                return youLose(ps, cs);
                break;
            case "rock":
                return youWin(ps, cs);
                break;
        }
    } else if (ps === "scissors") {
        switch (cs) {
            case "rock":
                return youLose(ps, cs);
                break;
            case "paper":
                return youWin(ps, cs);
                break;
        }
    }
}

const container = document.querySelector("#container");
const display = document.createElement("div");
container.appendChild(display);
let rounds = 0; 
let roundsWon = 0;

function buttonListener() {
    let returnedRounds =
        displayResult(playOneRound(this.textContent, computerPlay()), rounds, roundsWon);
    rounds = returnedRounds["rounds_"];
    roundsWon = returnedRounds["roundsWon_"];
};

function removeEventListeners() {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.removeEventListener("click", buttonListener);
    });
}

function displayResult(result, rounds_, roundsWon_) {
    rounds_ = rounds_ + 1;
    if (/^(You Win!)/.test(result)) {
        roundsWon_ = roundsWon_ + 1;
    }
    let displaycontent = `${result}`;
    displaycontent = displaycontent + ` rounds won: ${roundsWon_
}`;
    displaycontent = displaycontent + ` rounds played: ${rounds_
        }`;
    if (roundsWon_ === 5) {
        displaycontent = displaycontent + " Ultimate Winner: You";
        removeEventListeners();
    } else if (rounds_ - roundsWon_ === 5) {
        displaycontent = displaycontent + " Ultimate Winner: Computer";
        removeEventListeners();
    }
    display.textContent = displaycontent;
    return { "rounds_": rounds_, "roundsWon_": roundsWon_ };
}

let buttonTexts = ["Rock", "Paper", "Scissors"];
for (let bT of buttonTexts) {
    const button = document.createElement("button");
    button.textContent = bT;
    button.addEventListener("click", buttonListener);
    container.appendChild(button);
}
