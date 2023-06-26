class Queue {
  constructor() {
    this.values = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(...valuesArr) {
    for (const value of valuesArr) { 
      this.values[this.tail++] = value;
    }
  }

  dequeue() {
    const value = this.values[this.head];
    delete this.values[this.head++];
    return value;
  }

  clear() {
    this.values = {};
    this.head = 0;
    this.tail = 0;
  }

  get isEmpty() {
    return this.head === this.tail;
  }
}

class Node {
  constructor(square, previous = null) {
    this.square = square;
    this.previous = previous;
    this.moves = null;
  }
}

class Board {
  constructor(start = null, end = null) {
    this.start = start;
    this.end = end;
    this.tree = null;
    this.board = [...Array(8)].map(() => Array(8).fill(0)); // contains places that the knight has already visited
    this.possibleMoves = [
      [2, 1],
      [2, -1],
      [1, 2],
      [1, -2],
      [-2, 1],
      [-2, -1],
      [-1, 2],
      [-1, -2],
    ];
  }

  getPossibleMoves(x, y, previous) {
    const moves = [];
    for (let i = 0; i < 8; i++) {
      const newX = x + this.possibleMoves[i][0];
      const newY = y + this.possibleMoves[i][1];
      if (
        (0 <= newX && newX <= 7) &&
        (0 <= newY && newY <= 7) &&
        this.board[newX][newY] !== 1
      ) {
        moves.push(new Node([newX, newY], previous));
        this.board[newX][newY] = 1;
      }
    }

    return moves;
  }

  buildTree() {
    if (this.start == null || this.end == null) return;
    if (this.tree != null) return; // If the tree is already built, no need to rebuild

    this.tree = new Node(this.start);
    const queue = new Queue();
    queue.enqueue(this.tree);
    while (!queue.isEmpty) {
      const node = queue.dequeue();
      node.moves = this.getPossibleMoves(node.square[0], node.square[1], node);
      for (const move of node.moves) {
        queue.enqueue(move);
      }
    }
  }

  findPath() {
    if (this.start == null || this.end == null) return;
    if (this.tree == null) this.buildTree();
  
    const queue = new Queue();
    queue.enqueue(this.tree);
  
    let targetNode = null;
    while (!queue.isEmpty) {
      const node = queue.dequeue();
      if (this.end[0] === node.square[0] && this.end[1] === node.square[1]) {
        targetNode = node;
        break;
      }
      
      if(node.moves.length !== 0) queue.enqueue(...node.moves);
    }
  
    const path = [];
    while (targetNode !== null) {
      path.unshift(targetNode.square);
      targetNode = targetNode.previous;
    }
  
    return path;
  }  

  setPosition(start, end) {
    this.start = start;
    this.end = end;
    this.reset();
  }

  setStart(start) {
    this.start = start;
    this.reset();
  }

  setEnd(end) {
    this.end = end;
  }

  reset() {
    this.tree = null;
    this.board = [...Array(8)].map(() => Array(8).fill(0));
  }
}

export default Board;
