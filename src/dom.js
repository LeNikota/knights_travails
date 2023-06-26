const chessBoard = document.querySelector(".chess-board");
const controls = document.querySelector(".controls");
const knightStaticButton = document.querySelector(".controls-knight__static"); //delete them all
const knightDynamicButton = document.querySelector(".controls-knight__dynamic");

const squareArr = [...Array(8)].map(() => Array(8));

function buildChessBoard(handleSquareClick) {
  for (let i = 0; i < 64; i++) {
    const square = document.createElement("div");
    const x = Math.floor(i / 8);
    const y = i % 8;

    const isEvenRow = x % 2 === 0;
    const isEvenCol = y % 2 === 0;
    const isBlackSquare = (isEvenRow && isEvenCol) || (!isEvenRow && !isEvenCol);

    const className = isBlackSquare
      ? "chess-board_square--black"
      : "chess-board_square--white";

    square.classList.add(className);
    square.dataset.x = x;
    square.dataset.y = y;
    square.addEventListener("click", handleSquareClick);
    squareArr[x][y] = square;
    chessBoard.append(square);
  }
}

function clearBoard() {
  squareArr.flat().forEach((square) => (square.textContent = ""));
}

function placeKnightAt([x, y]) {
  squareArr[x][y].textContent = "♞";
}

function renderKnightPath(path) {
  for (let i = 0; i < path.length - 1; i++) {
    const [curX, curY] = path[i];
    const [nextX, nextY] = path[i + 1];
    const offsetX = nextX - curX > 0 ? 1 : -1;
    const offsetY = nextY - curY > 0 ? 1 : -1;
    const diffX = Math.abs(nextX - curX);

    if (diffX === 2) {
      squareArr[curX + offsetX][curY].textContent = "●";
      squareArr[curX + offsetX * 2][curY].textContent = "●";
    } else {
      squareArr[curX][curY + offsetY].textContent = "●";
      squareArr[curX][curY + offsetY * 2].textContent = "●";
    }

    squareArr[nextX][nextY].textContent = "✕";
  }
}

export {
  buildChessBoard,
  placeKnightAt,
  renderKnightPath,
  clearBoard,
  knightStaticButton,
  knightDynamicButton,
  chessBoard,
  controls,
};
