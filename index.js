// Tic-Tac-Toe Logic
let board = ["", "", "", "", "", "", "", "", ""]; // Represents the 3x3 board
let currentPlayer = "X"; // X starts first
let gameActive = true;
let playerName = "";

// Winning combinations (indices of the board array)
const winningConditions = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal
  [2, 4, 6], // Diagonal
];

function askName(){
    let name = prompt("Please enter your name", "Player");
    if (name != null) {
        playerName = name; //store the name
        document.getElementById("player-name").innerHTML = `Player: ${playerName}`;
    }
}

// Function to handle a player's move
function handleMove(cellIndex) {
  if (board[cellIndex] === "" && gameActive) {
    board[cellIndex] = currentPlayer;
    checkForWin();
    currentPlayer = currentPlayer === "X" ? "O" : "X"; // Switch players
  }
}

// Function to check for a win or draw
function checkForWin() {
  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameActive = false;
      document.getElementById("win-message").textContent = `Player: ${playerName} wins!`;
      return;
    }
  }
  if (!board.includes("")) {
    gameActive = false;
    document.getElementById("win-message").textContent = "It's a draw!";
  }
}

// Function to reset the game
function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  document.getElementById("win-message").textContent = "";
  console.log("Game reset!");
}

// Get all cells and the reset button
const cells = document.querySelectorAll(".cell");
const resetButton = document.getElementById("reset-button");

// Add event listeners to cells
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    const cellIndex = cell.getAttribute("data-index");
    handleMove(cellIndex);
    updateBoard();
  });
});

// Add event listener to reset button
resetButton.addEventListener("click", () => {
  resetGame();
  updateBoard();
});

// Function to update the board display
function updateBoard() {
  cells.forEach((cell, index) => {
    cell.textContent = board[index];
  });
}

document.addEventListener("DOMContentLoaded", function() {
    askName();
});
    