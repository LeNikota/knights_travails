import './style.css';
import * as dom from './dom.js';
import Board from './Board.js';

// const board = new Board();



dom.addEventListenerOnSquareClick(() => console.log(this),() => console.log(this))
dom.placeKnightAt([3,3])
dom.placeEndAt([5,5])