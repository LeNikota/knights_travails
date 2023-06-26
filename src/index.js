import "./style.css";
import * as dom from "./dom.js";
import Board from "./Board.js";

const board = new Board();
let isStartSet = false;
let isEndSet = false;
let isRenderedDynamically = false;

function handleSquareClick({ target }) {
  const x = +target.dataset.x;
  const y = +target.dataset.y;

  if (dom.knightStaticButton.checked) {
    if (isStartSet && isEndSet) {
      isStartSet = false;
      isEndSet = false;

      dom.clearBoard();
      board.reset();
    }
    if (!isStartSet) {
      dom.placeKnightAt([x, y]);
      board.setStart([x, y]);

      isStartSet = true;
    } else {
      board.setEnd([x, y]);
      const path = board.findPath();
      dom.renderKnightPath(path);
      isEndSet = true;
    }
  }
}

function handleControlsClick({ target }) {
  if (target.id === "dynamic") {
    setupRenderDynamically();
    return;
  }
  if (target.id === "clear") {
    reset();
  }
}

function setupRenderDynamically() {
  if (!isStartSet) return;

  if (!isRenderedDynamically)
    dom.chessBoard.childNodes.forEach((square) =>
      square.addEventListener("mouseover", renderKnightPathDynamically)
    );
  else
    dom.chessBoard.childNodes.forEach((square) =>
      square.removeEventListener("mouseover", renderKnightPathDynamically)
    );
  isRenderedDynamically = !isRenderedDynamically;
}

function reset() {
  isStartSet = false;
  isEndSet = false;
  dom.knightStaticButton.checked = false;
  dom.knightDynamicButton.checked = false;
  dom.clearBoard();
  board.reset();
  if (isRenderedDynamically) {
    dom.chessBoard.childNodes.forEach((square) =>
      square.removeEventListener("mouseover", renderKnightPathDynamically)
    );
    isRenderedDynamically = false;
  }
}

function renderKnightPathDynamically({ target }) {
  const x = +target.dataset.x;
  const y = +target.dataset.y;

  dom.clearBoard();
  dom.placeKnightAt(board.start);
  board.reset();
  board.setEnd([x, y]);
  const path = board.findPath();
  dom.renderKnightPath(path);
}

dom.buildChessBoard(handleSquareClick);
dom.controls.addEventListener("click", handleControlsClick);

//user prettier and commit
// Read all comments everywhere search for // or /*
//remove all left console.log()s everywhere