let backButton = document.getElementById("back")

backButton.onclick = function () {
  location.replace("../index.html")
}

function swalClick() {
  swalMessage("1", "2", "success", "Play Again")
}
