# Knights travails
[Online preview]()
## Board Class

The `Board` class represents a chessboard and provides functionality to find the shortest path for a knight to move from a given start position to an end position on the chessboard.

### Constructor

#### Parameters

- `start` (optional): The start position of the knight on the chessboard. If not provided, it defaults to `null`.
- `end` (optional): The end position of the knight on the chessboard. If not provided, it defaults to `null`.

### Properties

- `start`: The start position of the knight on the chessboard.
- `end`: The end position of the knight on the chessboard.
- `tree`: The tree representing the possible knight moves. It is constructed internally when needed.
- `board`: A 2D array representing the chessboard, with places that the knight has already visited marked as `1`.
- `possibleMoves`: An array containing all the possible moves of a knight on the chessboard.

### Methods

- `getPossibleMoves(x, y, previous)`: Retrieves all possible moves for the knight from a given position.

  #### Parameters

  - `x`: The x-coordinate of the current position.
  - `y`: The y-coordinate of the current position.
  - `previous`: The previous node in the tree.

  #### Returns

  An array of `Node` objects representing the possible moves.

- `buildTree()`: Builds the tree of possible moves for the knight from the start position to the end position.

- `findPath()`: Finds the shortest path from the start position to the end position using a breadth-first search on the tree.

  #### Returns

  An array of positions representing the shortest path from the start position to the end position.

- `setPosition(start, end)`: Sets the start and end positions of the knight on the chessboard and resets the tree and board.

  #### Parameters

  - `start`: The new start position of the knight.
  - `end`: The new end position of the knight.

- `setStart(start)`: Sets the start position of the knight on the chessboard and resets the tree and board.

  #### Parameters

  - `start`: The new start position of the knight.

- `setEnd(end)`: Sets the end position of the knight on the chessboard and resets the tree and board.

  #### Parameters

  - `end`: The new end position of the knight.

- `reset()`: Resets the tree and board, clearing any previous calculations or visited positions.

### Example Usage

```javascript
// Create a new board instance
const board = new Board();

// Set the start and end positions
board.setPosition([0, 0], [7, 7]);

// Find the shortest path
const path = board.findPath();

// Output the path
console.log(path);
```