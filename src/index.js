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

  if (!dom.knightStaticButton.checked) return;

  if (isStartSet && isEndSet) {
    reset();
  } else if (!isStartSet) {
    setStartKnight([x, y]);
  } else {
    setEndKnight([x, y]);
  }
}

function handleControlsClick({ target }) {
  if (target.id === "static") {
    if (isRenderedDynamically) {
      removeDynamicRendering();
    }
  } else if (target.id === "dynamic") {
    toggleDynamicRendering();
  } else if (target.id === "clear") {
    reset();
  }
}

function toggleDynamicRendering() {
  if (!isStartSet) return;

  if (!isRenderedDynamically) {
    dom.chessBoard.childNodes.forEach((square) =>
      square.addEventListener("mouseover", renderKnightPathDynamically)
    );
    isRenderedDynamically = true;
  } else {
    removeDynamicRendering();
  }

  isEndSet = true;
}

function removeDynamicRendering() {
  dom.chessBoard.childNodes.forEach((square) =>
    square.removeEventListener("mouseover", renderKnightPathDynamically)
  );

  isRenderedDynamically = false;
  dom.knightDynamicButton.checked = false;
}

function reset() {
  isStartSet = false;
  isEndSet = false;
  dom.knightStaticButton.checked = false;
  dom.knightDynamicButton.checked = false;
  dom.clearBoard();
  board.reset();
  removeDynamicRendering();
}

function setStartKnight(position) {
  dom.placeKnightAt(position);
  board.setStart(position);
  isStartSet = true;
}

function setEndKnight(position) {
  board.setEnd(position);
  const path = board.findPath();
  dom.renderKnightPath(path);
  isEndSet = true;
}

function renderKnightPathDynamically({ target }) {
  const x = +target.dataset.x;
  const y = +target.dataset.y;

  dom.clearBoard();
  dom.placeKnightAt(board.start);
  board.reset();
  setEndKnight([x, y]);
}

dom.buildChessBoard(handleSquareClick);
dom.controls.addEventListener("click", handleControlsClick);