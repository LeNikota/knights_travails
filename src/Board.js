class Queue {
  constructor() {
    this.values = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value) {
    this.values[this.tail++] = value;
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
    this.tree = {};
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
        0 <= newX &&
        newX <= 7 &&
        0 <= newY &&
        newY <= 7 &&
        this.board[newX][newY] != 1
      ) {
        moves.push(new Node([newX, newY], previous));
        this.board[newX][newY] = 1;
      }
    }

    return moves;
  }

  findPath() {
    if (this.start == null && this.end == null) return;
    if (Object.keys(this.tree).length != 0) this.reset(); // Delete and optimize don't evaluate on each invocation

    this.tree = new Node(this.start);
    const queue = new Queue();
    queue.enqueue(this.tree);
    let currentSquare;
    while (!queue.isEmpty) {
      const node = queue.dequeue();
      node.moves = this.getPossibleMoves(node.square[0], node.square[1], node);
      for (const move of node.moves) {
        if (this.end[0] == move.square[0] && this.end[1] == move.square[1]) {
          currentSquare = move;
          queue.clear();
          break;
        } else {
          queue.enqueue(move);
        }
      }
    }

    const path = [];
    while (currentSquare != null) {
      path.unshift(currentSquare.square);
      currentSquare = currentSquare.previous;
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
  }

  setEnd(end) {
    this.end = end;
  }

  reset() {
    this.tree = {};
    this.board = [...Array(8)].map(() => Array(8).fill(0));
  }
}

//refactor the logic first it builds the tree and than using that tree just search the knight path, don't build the tree again

export default Board;
