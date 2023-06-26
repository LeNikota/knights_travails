import './style.css';
import * as dom from './dom.js';
import Board from './Board.js';

const board = new Board();
let isStartSet = false;
let isEndSet = false;
let isRenderedDynamically = false;

function handleSquareClick({target}) {
  const x = +target.dataset.x;
  const y = +target.dataset.y;

  if(isStartSet && isEndSet) {
    isStartSet = false;
    isEndSet = false;
    
    dom.clearBoard()
    board.reset()
  }
  if(!isStartSet){
    dom.placeKnightAt([x, y]);
    board.setStart([x, y])

    isStartSet = true;
    return;
  }

  if(dom.knightStaticButton.checked){
    board.setEnd([x,y]);
    const path = board.findPath();
    dom.renderKnightPath(path);
    isEndSet = true;
    return;
  }
}

function handleDynamicButtonClick() {
  if (!isRenderedDynamically) 
    dom.chessBoard.childNodes.forEach(square => square.addEventListener('mouseover', renderKnightPathDynamically))
  else  
  dom.chessBoard.childNodes.forEach(square => square.removeEventListener('mouseover', renderKnightPathDynamically))
}

function handleResetClick() {
  isStartSet = false;
  isEndSet = false;
  dom.knightStaticButton.checked = false;
  dom.knightDynamicButton.checked = false;
  dom.clearBoard();
  board.reset()
}

function renderKnightPathDynamically({target}) {
  console.log('rendered: ', target);
  const x = +target.dataset.x;
  const y = +target.dataset.y;

  dom.clearBoard();
  board.reset()
  board.setEnd([x,y])
  const path = board.findPath()
  dom.renderKnightPath(path)
}

dom.buildChessBoard(handleSquareClick)
dom.knightDynamicButton.addEventListener('click', handleDynamicButtonClick)
dom.clearButton.addEventListener('click', handleResetClick)

//user prettier and commit
// Read all comments everywhere search for // or /*
//remove all left console.log()s everywhere