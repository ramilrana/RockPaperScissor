window.onload = function () {
  disableButton(".toDisable", true)
  getRounds()
  toStart()
  hideResetButton(true)
  reloadPage()
}

const startGameBTN = document.getElementById("startGame")
const roundSelect = document.getElementById("rounds")
const resetBTN = document.getElementById("resetGame")

let rockPick = document.getElementById("rockPick")
let paperPick = document.getElementById("paperPick")
let scissorPick = document.getElementById("scissorPick")

let personScore = 0
let computerScore = 0
let draw = 0
let numberOfRounds = 0
let rounds = 0

function getRounds() {
  roundSelect.onchange = function () {
    document.querySelector(".startBTN").disabled = false
    document.getElementById("rounds").style.width = "4rem"
  }
}

function toStart() {
  startGameBTN.onclick = function () {
    Swal.fire({
      title: "STARTING GAME",
      text: `Starting a ${roundSelect.value} round(s) game, click Confirm button to continue.`,
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        disableButton(".toDisable", false) // Enable buttons
        startGameBTN.hidden = true
        roundSelect.disabled = true
        hideResetButton(false)
        numberOfRounds = roundSelect.value

        document.getElementById("totalRounds").textContent =
          "Round(s): " + numberOfRounds
      }
    })
  }
}

function disableButton(buttonClass, toDisable) {
  const buttons = document.querySelectorAll(buttonClass)
  buttons.forEach((button) => {
    button.disabled = toDisable
  })
}
function hideResetButton(toHide) {
  resetBTN.hidden = toHide // Hides the button
}

function reloadPage() {
  resetBTN.onclick = function () {
    Swal.fire({
      title: "RESTART GAME?",
      text: "If you restart game, there will be no winner for the match. Click Restart button to continue.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        location.reload()
      }
    })
  }
}

function playerPick(button) {
  let computerPickResult = generateComputerPick()
  document.getElementById("cText").value = computerPickResult

  let personPickResult = showPersonPick(button.id)
  document.getElementById("pText").value = personPickResult

  let personPick = personPickResult.toLowerCase()
  let computerPick = computerPickResult.toLowerCase()
  let result = ""

  if (
    (personPick === "rock" && computerPick === "scissor") ||
    (personPick === "paper" && computerPick === "rock") ||
    (personPick === "scissor" && computerPick === "paper")
  ) {
    result = "You won"
    personScore++
    rounds++
    swalConfirm2(result, "Clik ok to continue", "success", function () {
      roundChecker()
    })
  } else if (
    (computerPick === "rock" && personPick === "scissor") ||
    (computerPick === "paper" && personPick === "rock") ||
    (computerPick === "scissor" && personPick === "paper")
  ) {
    result = "Computer won"
    computerScore++
    rounds++
    swalConfirm2(result, "Clik ok to continue", "warning", function () {
      roundChecker()
    })
  } else {
    result = "Draw"
    draw++
    rounds++
    swalConfirm2(result, "Clik ok to continue", "info", function () {
      roundChecker()
    })
  }
  scoreBoard(personScore, computerScore, draw)
  gameSummary(rounds, personPickResult, computerPickResult, result)
}

function roundChecker() {
  if (rounds > numberOfRounds - 1) {
    if (personScore > computerScore) {
      swalConfirm(
        "You win!",
        "You beat the computer. Do you want to play again?",
        "info",
        function () {
          location.reload()
        }
      )
    } else if (personScore < computerScore) {
      const message =
        'Do you still want to try your luck against computer? Click "Play again" button to continue?'
      swalConfirm("You lost!", message, "warning", function () {
        location.reload()
      })
    } else {
      swalConfirm("Draw!", "Do you want to play again?", "info", function () {
        location.reload()
      })
    }
  }
}

function generateComputerPick() {
  let cRockPick = document.getElementById("cRock")
  let cPaperPick = document.getElementById("cPaper")
  let cScissorPick = document.getElementById("cScissor")

  let result
  let choiceC = Math.floor(Math.random() * 3) + 1

  switch (choiceC) {
    case 1:
      result = "Rock"
      cRockPick.hidden = false
      cScissorPick.hidden = true
      cPaperPick.hidden = true
      break
    case 2:
      result = "Paper"
      cPaperPick.hidden = false
      cRockPick.hidden = true
      cScissorPick.hidden = true
      break
    case 3:
      result = "Scissor"
      cScissorPick.hidden = false
      cPaperPick.hidden = true
      cRockPick.hidden = true
      break
    default:
      result = "out of range"
  }
  return result
}

function showPersonPick(buttonID) {
  let result

  let pRockPick = document.getElementById("pRock")
  let pPaperPick = document.getElementById("pPaper")
  let pScissorPick = document.getElementById("pScissor")

  switch (buttonID) {
    case "rockPick":
      result = "Rock"
      pRockPick.hidden = false
      pScissorPick.hidden = true
      pPaperPick.hidden = true
      break
    case "paperPick":
      result = "Paper"
      pPaperPick.hidden = false
      pRockPick.hidden = true
      pScissorPick.hidden = true
      break
    case "scissorPick":
      result = "Scissor"
      pScissorPick.hidden = false
      pPaperPick.hidden = true
      pRockPick.hidden = true
      break
    default:
      result = "out of range"
  }
  return result
}

function gameSummary(_rounds, _personPickResult, _computerPickResult, _result) {
  const gameSummary = document.getElementById("gameSummary")

  const newListItem = document.createElement("li")

  newListItem.innerHTML = `Game ${rounds}: <br> Result: ${_result}! <br> <br> You: ${_personPickResult}, Computer: ${_computerPickResult}. `

  gameSummary.insertBefore(newListItem, gameSummary.firstChild)
}

function scoreBoard(_human, _computer, _draw) {
  let humanScore = document.getElementById("humanScore")
  let computerScore = document.getElementById("computerScore")
  let drawScore = document.getElementById("drawScore")

  humanScore.textContent = _human
  computerScore.textContent = _computer
  drawScore.textContent = draw
}

function swalConfirm(_title, _content, _icon, onConfirm) {
  Swal.fire({
    title: _title,
    text: _content,
    icon: _icon,
    showCancelButton: true,
    confirmButtonText: "Play again",
  }).then((result) => {
    if (result.isConfirmed) {
      if (typeof onConfirm === "function") {
        onConfirm()
      }
    } else {
      disableButton(".toDisable", true)
      document.getElementById("rounds").disabled
    }
  })
}

function swalConfirm2(_title, _content, _icon, onConfirm) {
  Swal.fire({
    title: _title,
    text: _content,
    icon: _icon,
    showCancelButton: false,
    confirmButtonText: "Ok",
  }).then((result) => {
    if (result.isConfirmed) {
      if (typeof onConfirm === "function") {
        onConfirm()
      }
    }
  })
}
