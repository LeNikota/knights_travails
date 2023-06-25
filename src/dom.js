const chessBoard = document.querySelector(".chess-board");
const setKnightStaticButton = document.querySelector(".controls-knight__static");
const setKnightDynamicButton = document.querySelector(".controls-knight__dynamic");
const clearButton = document.querySelector(".controls-knight__clear");

setKnightDynamicButton.addEventListener('click', handleStaticClick)
setKnightStaticButton.addEventListener('click', handleDynamicClick)
clearButton.addEventListener('click', handleClearClick)

function buildChessBoard() {
  //ask someone about could it be built better (optimized)
  let switchPattern = false;
  for (let i = 0; i < 64; i++) {
    const square = document.createElement("div");
    let className;

    if (i % 8 === 0) switchPattern = !switchPattern;
    if (switchPattern) {
      className =
        i % 2 === 0 ? "chess-board_square--black" : "chess-board_square--white";
    } else {
      className =
        i % 2 === 0 ? "chess-board_square--white" : "chess-board_square--black";
    }

    square.classList.add(className);
    square.addEventListener("click", handleSquareClick);
    chessBoard.append(square);
  }
}

function handleSquareClick() {
  //do something when clicked
}

function handleStaticClick() {
  
}

function handleDynamicClick() {
  
}

function handleClearClick() {
  
}

function init() {
  buildChessBoard();
}

export { init };
