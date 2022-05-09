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

function game() {
    for (let i = 0; i < 5; i++){
        let cs = computerPlay();
        let ps = prompt("input your move!");
        let result = playOneRound(ps, cs);
        console.log(result);
    }
}

game();