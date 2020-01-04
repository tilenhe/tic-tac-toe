const gameBoard = (() => {
  const boardDiv = document.getElementById("game-board");
  let counter = 0;
  let boardArray = ["", "", "", "", "", "", "", "", ""];
  const getBoard = () => boardArray;
  const displayBoard = () => {
    counter = 0;
    boardDiv.innerHTML = "";
    boardArray = ["", "", "", "", "", "", "", "", ""];
    for (let i = 0; i < boardArray.length; i++) {
      const s = document.createElement("div");
      s.id = `${i}`;
      s.className = "square";
      boardDiv.appendChild(s).innerHTML = boardArray[i];
    }
    const square = document.querySelectorAll(".square");
    square.forEach(s => s.addEventListener("click", game.addMark));
    displayController.hidePlayerInput();
    displayController.displayResult();
  };

  return { displayBoard, boardArray, counter };
})();

const game = (() => {
  let playerTurn = "x";

  const checkWinner = e => {
    const playerX = document.getElementById("player-x");
    const playerO = document.getElementById("player-o");
    const playerXvalue = playerX.value;
    const playerOvalue = playerO.value;
    let i = gameBoard.boardArray;
    let winner = "";
    console.log([i[0], i[1], i[2]]);
    if (i[0] == "x" && i[1] == "x" && i[2] == "x") {
      winner = `${playerXvalue}`;
      const resultText = document.querySelector("#result-text");
      resultText.innerHTML = `${winner} wins!`;
      endGame();
      gameBoard.counter = 0;
    }
    if (i[3] == "x" && i[4] == "x" && i[5] == "x") {
      winner = `${playerXvalue}`;
      const resultText = document.querySelector("#result-text");
      resultText.innerHTML = `${winner} wins!`;
      endGame();
      gameBoard.counter = 0;
    }
    if (i[6] == "x" && i[7] == "x" && i[8] == "x") {
      winner = `${playerXvalue}`;
      const resultText = document.querySelector("#result-text");
      resultText.innerHTML = `${winner} wins!`;
      endGame();
      gameBoard.counter = 0;
    } // rows
    if (i[0] == "x" && i[3] == "x" && i[6] == "x") {
      winner = `${playerXvalue}`;
      const resultText = document.querySelector("#result-text");
      resultText.innerHTML = `${winner} wins!`;
      endGame();
      gameBoard.counter = 0;
    }
    if (i[1] == "x" && i[4] == "x" && i[7] == "x") {
      winner = `${playerXvalue}`;
      const resultText = document.querySelector("#result-text");
      resultText.innerHTML = `${winner} wins!`;
      endGame();
      gameBoard.counter = 0;
    }
    if (i[2] == "x" && i[5] == "x" && i[8] == "x") {
      winner = `${playerXvalue}`;
      const resultText = document.querySelector("#result-text");
      resultText.innerHTML = `${winner} wins!`;
      endGame();
      gameBoard.counter = 0;
    } // columns
    if (i[0] == "x" && i[4] == "x" && i[8] == "x") {
      winner = `${playerXvalue}`;
      const resultText = document.querySelector("#result-text");
      resultText.innerHTML = `${winner} wins!`;
      endGame();
      gameBoard.counter = 0;
    }
    if (i[2] == "x" && i[4] == "x" && i[6] == "x") {
      winner = `${playerXvalue}`;
      const resultText = document.querySelector("#result-text");
      resultText.innerHTML = `${winner} wins!`;
      endGame();
      gameBoard.counter = 0;
    } // diagonal
    if (i[0] == "o" && i[1] == "o" && i[2] == "o") {
      winner = `${playerOvalue}`;
      const resultText = document.querySelector("#result-text");
      resultText.innerHTML = `${winner} wins!`;
      endGame();
      gameBoard.counter = 0;
    }
    if (i[3] == "o" && i[4] == "o" && i[5] == "o") {
      winner = `${playerOvalue}`;
      const resultText = document.querySelector("#result-text");
      resultText.innerHTML = `${winner} wins!`;
    }
    if (i[6] == "o" && i[7] == "o" && i[8] == "o") {
      winner = `${playerOvalue}`;
      const resultText = document.querySelector("#result-text");
      resultText.innerHTML = `${winner} wins!`;
      endGame();
      gameBoard.counter = 0;
    } // rows
    if (i[0] == "o" && i[3] == "o" && i[6] == "o") {
      winner = `${playerOvalue}`;
      const resultText = document.querySelector("#result-text");
      resultText.innerHTML = `${winner} wins!`;
    }
    if (i[1] == "o" && i[4] == "o" && i[7] == "o") {
      winner = `${playerOvalue}`;
      const resultText = document.querySelector("#result-text");
      resultText.innerHTML = `${winner} wins!`;
      endGame();
      gameBoard.counter = 0;
    }
    if (i[2] == "o" && i[5] == "o" && i[8] == "o") {
      winner = `${playerOvalue}`;
      const resultText = document.querySelector("#result-text");
      resultText.innerHTML = `${winner} wins!`;
      endGame();
      gameBoard.counter = 0;
    } // columns
    if (i[0] == "o" && i[4] == "o" && i[8] == "o") {
      winner = `${playerOvalue}`;
      const resultText = document.querySelector("#result-text");
      resultText.innerHTML = `${winner} wins!`;
      endGame();
      gameBoard.counter = 0;
    }
    if (i[2] == "o" && i[4] == "o" && i[6] == "o") {
      winner = `${playerOvalue}`;
      const resultText = document.querySelector("#result-text");
      resultText.innerHTML = `${winner} wins!`;
      endGame();
      gameBoard.counter = 0;
    }
    // diagonal

    if (winner === "" && gameBoard.counter > 8) {
      const resultText = document.querySelector("#result-text");
      resultText.innerHTML = `It's a tie.`;
    }

    if (winner !== "") {
      const resultText = document.querySelector("#result-text");
      resultText.innerHTML = `${winner} wins!`;
      endGame();
      gameBoard.counter = 0;
    }
    console.log(winner);
    console.log(gameBoard.counter);
  };

  const addMark = e => {
    // console.log();
    if (e.target.innerHTML !== "") {
      return;
    } else if (playerTurn == "x") {
      e.target.innerHTML = "x";
      gameBoard.boardArray[e.target.id] = "x";
      playerTurn = "o";
    } else {
      e.target.innerHTML = "o";
      gameBoard.boardArray[e.target.id] = "o";
      playerTurn = "x";
    }
    gameBoard.counter++;
    checkWinner();
  };

  const endGame = () => {
    console.log("game ended");
    const square = document.querySelectorAll(".square");
    square.forEach(s => s.removeEventListener("click", game.addMark));
  };

  return { addMark };
})();

const displayController = (() => {
  const displayPlayerInput = () => {
    const playerInputDiv = document.querySelector("#player-input");
    playerInputDiv.innerHTML = `<p>Player X:<input id="player-x" type="text" /></p>    <p>Player O:<input id="player-o" type="text" /></p>    <button id="start">Start game</button>`;
  };
  displayPlayerInput();
  const playerX = document.getElementById("player-x");
  const playerO = document.getElementById("player-o");
  const startBtn = document.getElementById("start");
  const restartBtn = document.getElementById("restart");
  //restartBtn.addEventListener("click", gameBoard.displayBoard);
  startBtn.addEventListener("click", gameBoard.displayBoard);

  console.log(startBtn);
  //startBtn.addEventListener("click", restartGame);

  const hidePlayerInput = () => {
    const playerInputDiv = document.querySelector("#player-input");
    playerInputDiv.style.display = "none";
  };
  const getPlayerNames = () => {
    const playerX = document.getElementById("player-x");
    const playerO = document.getElementById("player-o");
    const playerXvalue = playerX.value;
    const playerOvalue = playerO.value;
  };

  const displayResult = () => {
    let winner;
    const playerX = document.getElementById("player-x");
    const playerO = document.getElementById("player-o");
    const playerXvalue = playerX.value;
    const playerOvalue = playerO.value;
    const resultDiv = document.querySelector("#result");

    resultDiv.innerHTML = `<p>Player X: ${playerXvalue}</p>    <p>Player O: ${playerOvalue}</p>    <p id="result-text"></p>    <button id="restart">Restart game</button>`;
    const restartBtn = document.getElementById("restart");
    restartBtn.addEventListener("click", restartGame);
  };

  const restartGame = () => {
    gameBoard.displayBoard();
    gameBoard.counter = 0;
    gameBoard.boardArray = ["", "", "", "", "", "", "", "", ""];
  };

  return {
    displayPlayerInput,
    startBtn,
    hidePlayerInput,
    displayResult
  };
})();
