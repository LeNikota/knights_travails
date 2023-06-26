import './style.css';
import * as dom from './dom.js';
import Board from './Board.js';

const board = new Board();
let isStartSet = false;
let isEndSet = false;

function handleSquareClick({target}) {
  if(isStartSet && isEndSet) {
    // isStartSet = false;
    // isEndSet = false;
    return;
  }

  const x = +target.dataset.x;
  const y = +target.dataset.y;

  if(dom.knightStaticButton.checked){
    if(isStartSet){
      dom.setEnd([x,y]);
      board.setEnd([x,y]);
      const path = board.findPath();
      dom.renderKnightPath(path);

      isEndSet = true;
    } else {
      dom.setKnightStart([x, y]);
      board.setStart([x, y])

      isStartSet = true;
    }

    return;
  }

  if(dom.knightDynamicButton.checked){
    console.log(2);
    return;
  }
}

dom.buildChessBoard(handleSquareClick)