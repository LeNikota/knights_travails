const chessBoard = document.querySelector(".chess-board");
const controls = document.querySelector(".controls");
const knightStaticButton = document.querySelector(".controls-knight__static"); //delete them all
const knightDynamicButton = document.querySelector(".controls-knight__dynamic");

const squareArr = [...Array(8)].map(() => Array(8));

function buildChessBoard(handleSquareClick) {
  //ask someone about could it be built better (optimized)
  let switchPattern = false;
  for (let i = 0; i < 64; i++) {
    const square = document.createElement("div");
    let className;
    const x = Math.floor(i / 8);
    const y = i % 8;

    if (i % 8 === 0) switchPattern = !switchPattern;
    if (switchPattern) {
      className =
        i % 2 === 0 ? "chess-board_square--black" : "chess-board_square--white";
    } else {
      className =
        i % 2 === 0 ? "chess-board_square--white" : "chess-board_square--black";
    }

    square.classList.add(className);
    square.setAttribute("data-x", x);
    square.setAttribute("data-y", y);
    square.addEventListener("click", handleSquareClick);
    squareArr[x][y] = square;
    chessBoard.append(square);
  }
}

function clearBoard() {
  squareArr.flat().forEach((square) => (square.textContent = ""));
}

function placeKnightAt([x, y]) {
  squareArr[x][y].textContent = "♞"; // instead of symbol place image
}

function renderKnightPath(path) {
  console.log(path); //delete this
  for (let i = 0; i < path.length - 1; i++) {
    const currentSquare = path[i];
    const nextSquare = path[i + 1];
    let [curX, curY] = currentSquare;
    const [nextX, nextY] = nextSquare;

    /* don't use while loops just go about this like so
    
      squareArr[curX][curY+1].textContent = '●';
      squareArr[curX][curY+2].textContent = '●';
      squareArr[nextX][nextY].textContent = '✕';
    */

    if (nextX - curX === 2) {
      if (nextX - curX > 0) {
        while (curX !== nextX) {
          curX++;
          squareArr[curX][curY].textContent = "●";
        }
      }
      if (nextY - curY > 0) {
        while (curY !== nextY) {
          curY++;
          squareArr[curX][curY].textContent = "●";
        }
      }
      if (nextX - curX < 0) {
        while (curX !== nextX) {
          curX--;
          squareArr[curX][curY].textContent = "●";
        }
      }
      if (nextY - curY < 0) {
        while (curY !== nextY) {
          curY--;
          squareArr[curX][curY].textContent = "●";
        }
      }
    } else {
      if (nextY - curY > 0) {
        while (curY !== nextY) {
          curY++;
          squareArr[curX][curY].textContent = "●";
        }
      }
      if (nextX - curX > 0) {
        while (curX !== nextX) {
          curX++;
          squareArr[curX][curY].textContent = "●";
        }
      }
      if (nextX - curX < 0) {
        while (curX !== nextX) {
          curX--;
          squareArr[curX][curY].textContent = "●";
        }
      }
      if (nextY - curY < 0) {
        while (curY !== nextY) {
          curY--;
          squareArr[curX][curY].textContent = "●";
        }
      }
    }
    squareArr[nextX][nextY].textContent = "✕";
  }
}

// Ask someone can this code be optimized
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
