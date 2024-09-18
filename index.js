let humanScore = 0
let computerScore = 0
let draw = 0

let getHumanChoice = () => {
  let choiceH
  sign = window.prompt("Rock Paper or Scissors?").toLowerCase().trim()
  if (sign == "rock") {
    choiceH = 1
  } else if (sign == "paper") {
    choiceH = 2
  } else if (sign == "scissor") {
    choiceH = 3
  } else {
    alert("Invalid choice, please try again!")
    getHumanChoice()
  }
  return choiceH
}

let getComputerChoice = () => {
  let choiceC = Math.floor(Math.random() * 3) + 1
  return choiceC
}

let convertNum = (num) => {
  let ans
  switch (num) {
    case 1:
      ans = "Rock"
      break
    case 2:
      ans = "Paper"
      break
    case 3:
      ans = "Scissor"
      break
    default:
      ans = "Invalid Choice"
  }
  return ans
}

let playRound = (human, computer) => {
  if (human === computer) {
    alert("Draw!")
    draw++
    console.log("-------Draw--------")
    console.log("You: " + convertNum(human))
    console.log("Computer: " + convertNum(computer))
    console.log("------------------------")

    // For rock
  } else if (human == 1 && computer == 2) {
    alert("You lose")
    computerScore++
    console.log("-------You lose--------")
    console.log("You: " + convertNum(human))
    console.log("Computer: " + convertNum(computer))
    console.log("------------------------")
  } else if (human == 1 && computer == 3) {
    alert("You won!")
    humanScore++
    console.log("-------You won--------")
    console.log("You: " + convertNum(human))
    console.log("Computer: " + convertNum(computer))
    console.log("------------------------")

    //For paper
  } else if (human == 2 && computer == 1) {
    alert("You won!")
    humanScore++
    console.log("-------You won--------")
    console.log("You: " + convertNum(human))
    console.log("Computer: " + convertNum(computer))
    console.log("------------------------")
  } else if (human == 2 && computer == 3) {
    alert("You lose!")
    computerScore++
    console.log("-------You lose--------")
    console.log("You: " + convertNum(human))
    console.log("Computer: " + convertNum(computer))
    console.log("------------------------")
  }
  //For scissor
  else if (human == 3 && computer == 1) {
    alert("You lose!")
    computerScore++
    console.log("-------You lose--------")
    console.log("You: " + convertNum(human))
    console.log("Computer: " + convertNum(computer))
    console.log("------------------------")
  } else if (human == 3 && computer == 2) {
    alert("You won!")
    humanScore++
    console.log("-------You won--------")
    console.log("You: " + convertNum(human))
    console.log("Computer: " + convertNum(computer))
    console.log("------------------------")
  }
}

if (humanScore >= 3) {
  alert("You have lost the match")
  console.log("=========Computer Won=============")
  console.log("Total score:")
  console.log("Draw: " + draw)
  console.log("You: " + humanScore)
  console.log("Computer: " + computerScore)
} else if (computerScore >= 3) {
  alert("You have lost the match")
  console.log("=========Computer Won=============")
  console.log("Total score:")
  console.log("Draw: " + draw)
  console.log("You: " + humanScore)
  console.log("Computer: " + computerScore)
}

for (let i = 1; i <= 5; i++) {
  let hum = getHumanChoice()
  let comp = getComputerChoice()
  playRound(hum, comp)
  if (i < 5) {
    console.log("Current round: " + (i + 1))
  }
  if (hum == "") {
    i--
  }
}
//If you win
if (humanScore > computerScore) {
  alert("You have won the match")
  console.log("=========You won=============")
  console.log("Total score:")
  console.log("Draw: " + draw)
  console.log("You: " + humanScore)
  console.log("Computer: " + computerScore)
}
// If computer win
else if (humanScore < computerScore) {
  alert("You have lost the match")
  console.log("=========Computer Won=============")
  console.log("Total score:")
  console.log("Draw: " + draw)
  console.log("You: " + humanScore)
  console.log("Computer: " + computerScore)
} else if (humanScore == computerScore) {
  alert("The match is draw")
  console.log("=========Draw=============")
  console.log("Total score:")
  console.log("Draw: " + draw)
  console.log("You: " + humanScore)
  console.log("Computer: " + computerScore)
} else {
  console.log("No result")
}

let playAgain = document
  .getElementById("playAgain")
  .addEventListener("click", loadPage)

function loadPage() {
  //   location.reload()
  console.log("wew")
}
