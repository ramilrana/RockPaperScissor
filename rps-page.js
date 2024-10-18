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

function playerPick(choice) {}
