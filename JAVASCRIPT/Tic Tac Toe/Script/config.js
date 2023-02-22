function openPlayerConfig(event) {
  const selectedPlayerId = +event.target.dataset.playerid; //convert string to number because playerid="1" 1 is string here
  editedPlayer = selectedPlayerId;
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
  warningElement.textContent = "";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  errorChangeStyle.classList.remove("error");
  errorOutputElement.textContent = "";
  document.getElementById("playername").value = "";
}

function savePlayerConfig(event) {
  event.preventDefault(); //prevent data sent to another server like player name and get rid of page reloading
  const formData = new FormData(event.target);
  const enteredName = formData.get("playername").trim();

  if (!enteredName) {
    errorChangeStyle.classList.add("error");
    errorOutputElement.textContent = "please Enter a valid Name!🙂";
    return;
  }

  const updatedPlayerElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );

  updatedPlayerElement.children[1].textContent = enteredName;

  players[editedPlayer - 1].name = enteredName;

  closePlayerConfig();
}
