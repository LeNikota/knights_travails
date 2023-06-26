const chessBoard = document.querySelector(".chess-board");
const knightStaticButton = document.querySelector(".controls-knight__static");
const knightDynamicButton = document.querySelector(".controls-knight__dynamic");
const clearButton = document.querySelector(".controls-knight__clear");

clearButton.addEventListener('click', handleClearClick)

const squareArr = [];

function buildChessBoard(handleSquareClick) {
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
    squareArr.push(square);
  }
}

function handleClearClick() {
  knightStaticButton.checked = false;
  knightDynamicButton.checked = false;
}

function placeKnightAt([x, y]) {
  squareArr[x * 8 + y].textContent = '♞';
  squareArr[x * 8 + y].classList.add('square-selected')
}

function placeEndAt([x, y]) {
  squareArr[x * 8 + y].classList.add('end-selected')
}

function renderKnightPath(path) {
  
}

export { buildChessBoard, placeKnightAt, placeEndAt, renderKnightPath,  knightStaticButton, knightDynamicButton};