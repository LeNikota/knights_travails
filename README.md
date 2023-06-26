# Knights travails
[Online preview]()

## Board Class 

The `Board` class represents a chessboard and provides methods for finding a path for a knight from a starting position to an ending position on the board.

### Constructor

#### `constructor(start = null, end = null)`

- Initializes a new instance of the `Board` class.
- Parameters:
  - `start` (optional): The starting position for the knight on the chessboard. If not provided, it defaults to `null`.
  - `end` (optional): The ending position for the knight on the chessboard. If not provided, it defaults to `null`.

### Properties

#### `start`

- Represents the starting position for the knight on the chessboard.

#### `end`

- Represents the ending position for the knight on the chessboard.

#### `tree`

- Represents the root node of the search tree built for finding the path from the start position to the end position.

#### `board`

- Represents the state of the chessboard, where each element indicates whether the corresponding square has been visited by the knight.
- It is a 2-dimensional array of size 8x8, initialized with zeros.

#### `possibleMoves`

- Represents the possible moves that a knight can make on the chessboard.
- It is an array of arrays, where each inner array contains the x and y offsets for a possible move.

### Methods

#### `getPossibleMoves(x, y, previous)`

- Returns an array of `Node` objects representing the possible moves from the given position on the chessboard.
- Parameters:
  - `x`: The x-coordinate of the current position.
  - `y`: The y-coordinate of the current position.
  - `previous`: The previous `Node` object in the path.
- Returns:
  - An array of `Node` objects representing the possible moves from the given position.

#### `buildTree()`

- Builds the search tree from the start position to explore possible paths to the end position.
- If the start or end position is not set, or if the tree is already built, the method does nothing.

#### `findPath()`

- Finds the path from the start position to the end position on the chessboard using the search tree.
- If the start or end position is not set or if the search tree is not built, the method returns `null`.
- Returns:
  - An array of positions representing the path from the start position to the end position on the chessboard.

#### `setPosition(start, end)`

- Sets the start and end positions on the chessboard and resets the search tree and board state.
- Parameters:
  - `start`: The new start position for the knight.
  - `end`: The new end position for the knight.

#### `setStart(start)`

- Sets the start position on the chessboard and resets the search tree and board state.
- Parameters:
  - `start`: The new start position for the knight.

#### `setEnd(end)`

- Sets the end position on the chessboard and resets the search tree and board state.
- Parameters:
  - `end`: The new end position for the knight.

#### `reset()`

- Resets the search tree and board state.
- Clears the search tree and sets all board squares to zero.

### Example Usage

```javascript
// Create a new board instance
const board = new Board();

// Set the start and end positions
board.setPosition([0, 0], [7, 7]);

// Build the search tree
board.buildTree();

// Find the path from start to end
const path = board.findPath();

// Output the path
console.log(path);
```