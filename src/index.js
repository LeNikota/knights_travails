import './style.css';
import * as dom from './dom.js';
import Board from './Board.js';

// const board = new Board();

function handleSquareClick() {
  if(dom.knightStaticButton.checked){
    console.log(1);
    return;
  }
  if(dom.knightDynamicButton.checked){
    console.log(2);
    return;
  }
}

dom.buildChessBoard(handleSquareClick)
dom.placeKnightAt([3,3])
dom.placeEndAt([5,5])