window.onload = function () {
  disableButton(".toDisable", true);
  getRounds();
  toStart();
  hideResetButton(true);
  reloadPage();
};

const startGameBTN = document.getElementById("startGame");
const roundSelect = document.getElementById("rounds");
const resetBTN = document.getElementById("resetGame");

let rockPick = document.getElementById("rockPick");
let paperPick = document.getElementById("paperPick");
let scissorPick = document.getElementById("scissorPick");

function getRounds() {
  roundSelect.onchange = function () {
    console.log(roundSelect.value);
    document.querySelector(".startBTN").disabled = false;
    document.getElementById("rounds").style.width = "4rem";
  };
}

function toStart() {
  startGameBTN.onclick = function () {
    Swal.fire({
      title: "STARTING GAME",
      text: "Starting Rock, Paper, and Scissor, click Confirm button to continue.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        disableButton(".toDisable", false); // Enable buttons
        startGameBTN.hidden = true;
        roundSelect.disabled = true;
        hideResetButton(false);
      }
    });
  };
}

function disableButton(buttonClass, toDisable) {
  const buttons = document.querySelectorAll(buttonClass);
  buttons.forEach((button) => {
    button.disabled = toDisable;
  });
}
function hideResetButton(toHide) {
  resetBTN.hidden = toHide; // Hides the button
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
        location.reload();
      }
    });
  };
}

function playerPick(button) {
  generateComputerPick();
  document.getElementById("cText").value = generateComputerPick();

  showPersonPick(button.id);
  document.getElementById("pText").value = showPersonPick(button.id);
}

function generateComputerPick() {
  let cRockPick = document.getElementById("cRock");
  let cPaperPick = document.getElementById("cPaper");
  let cScissorPick = document.getElementById("cScissor");

  let result;
  let choiceC = Math.floor(Math.random() * 3) + 1;

  switch (choiceC) {
    case 1:
      result = "Rock";
      cRockPick.hidden = false;
      cScissorPick.hidden = true;
      cPaperPick.hidden = true;
      break;
    case 2:
      result = "Paper";
      cPaperPick.hidden = false;
      cRockPick.hidden = true;
      cScissorPick.hidden = true;
      break;
    case 3:
      result = "Scissor";
      cScissorPick.hidden = false;
      cPaperPick.hidden = true;
      cRockPick.hidden = true;
      break;
    default:
      result = "out of range";
  }
  return result;
}

function showPersonPick(buttonID) {
  let result;

  let pRockPick = document.getElementById("pRock");
  let pPaperPick = document.getElementById("pPaper");
  let pScissorPick = document.getElementById("pScissor");

  switch (buttonID) {
    case "rockPick":
      result = "Rock";
      pRockPick.hidden = false;
      pScissorPick.hidden = true;
      pPaperPick.hidden = true;
      break;
    case "paperPick":
      result = "Paper";
      pPaperPick.hidden = false;
      pRockPick.hidden = true;
      pScissorPick.hidden = true;
      break;
    case "scissorPick":
      result = "Scissor";
      pScissorPick.hidden = false;
      pPaperPick.hidden = true;
      pRockPick.hidden = true;
      break;
    default:
      result = "out of range";
  }
  return result;
}
