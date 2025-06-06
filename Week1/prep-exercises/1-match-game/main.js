// IDs
const STICKS_ID = 'sticks'
const BUTTON_ONE_ID = 'button_one'
const BUTTON_TWO_ID = 'button_two'
const BUTTON_THREE_ID = 'button_three'
const PLAYERS_ID = 'players'
const PLAYER_ONE_ID = 'player_one'
const PLAYER_TWO_ID = 'player_two'

const ACTIVE_PLAYER_CLASS = 'active_player'
const WINNER_PLAYER_CLASS = 'winner'

const amountStartStick = 20
let amountStick = amountStartStick
let currentPlayerId = PLAYER_ONE_ID //add the first player as the current one


const displayNSticks = amount => {
  const stickContainer = document.getElementById(STICKS_ID)
  stickContainer.innerHTML = '' // Clear before redrawing
  for (let i = 0; i < amount; i++) {
    const stick = document.createElement('span');
    stick.className = 'stick';
    stickContainer.appendChild(stick);
  }
}

const updateToTheNextPlayer = () => {
  displayNSticks(amountStick);
  if (amountStick <= 0) {
    const winnerPlayerId = currentPlayerId === PLAYER_ONE_ID ? PLAYER_TWO_ID : PLAYER_ONE_ID;
    endTheGame(winnerPlayerId);
return


}
currentPlayerId = currentPlayerId === PLAYER_ONE_ID ? PLAYER_TWO_ID : PLAYER_ONE_ID;
  document.getElementById(PLAYER_ONE_ID).classList.toggle(ACTIVE_PLAYER_CLASS);
  document.getElementById(PLAYER_TWO_ID).classList.toggle(ACTIVE_PLAYER_CLASS);
}

const endTheGame = winnerPlayerId => {
  document.getElementById(PLAYER_ONE_ID).classList.remove(ACTIVE_PLAYER_CLASS);
  document.getElementById(PLAYER_TWO_ID).classList.remove(ACTIVE_PLAYER_CLASS);
  document.getElementById(winnerPlayerId).classList.add(WINNER_PLAYER_CLASS);

  document.getElementById(BUTTON_ONE_ID).disabled = true;
  document.getElementById(BUTTON_TWO_ID).disabled = true;
  document.getElementById(BUTTON_THREE_ID).disabled = true;

    const winnerName = document.getElementById(winnerPlayerId).textContent;
  alert(`It's unbelievable, but the winner is Igor ${winnerName}!`);
}
const handleClick = number => {
  if (amountStick <= 0 || number > amountStick) return
  amountStick -= number
  updateToTheNextPlayer()
}

document.getElementById(BUTTON_ONE_ID).addEventListener('click', () => handleClick(1))
document.getElementById(BUTTON_TWO_ID).addEventListener('click', () => handleClick(2))
document.getElementById(BUTTON_THREE_ID).addEventListener('click', () => handleClick(3))


// ========== Start the game
// Display the start sticks
displayNSticks(amountStartStick)

// Set the first player as the active one
document.getElementById(PLAYER_ONE_ID).classList.toggle(ACTIVE_PLAYER_CLASS)

const resetGame = () => {
  
  amountStick = amountStartStick;
  currentPlayerId = PLAYER_ONE_ID; // Reset to the first player
  document.getElementById(PLAYER_ONE_ID).classList.add(ACTIVE_PLAYER_CLASS);
  document.getElementById(PLAYER_TWO_ID).classList.remove(ACTIVE_PLAYER_CLASS);
  
  document.getElementById(BUTTON_ONE_ID).disabled = false;
  document.getElementById(BUTTON_TWO_ID).disabled = false;
  document.getElementById(BUTTON_THREE_ID).disabled = false;

  displayNSticks(amountStick);
  
  // Remove winner class if it was set
  document.getElementById(PLAYER_ONE_ID).classList.remove(WINNER_PLAYER_CLASS);
  document.getElementById(PLAYER_TWO_ID).classList.remove(WINNER_PLAYER_CLASS);
}
document.getElementById('new_game').addEventListener('click', resetGame);