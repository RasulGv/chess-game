import React, { useState } from 'react';
import '../style/Board.css';

const pieces = {
  r: '♖', n: '♘', b: '♗', q: '♕', k: '♔', p: '♙',
  R: '♜', N: '♞', B: '♝', Q: '♛', K: '♚', P: '♟︎',
};

const initialBoard = [
  'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r',
  'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p',
  null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null,
  'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P',
  'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R',
];

const Board = () => {
  const [board, setBoard] = useState(initialBoard);
  const [selectedPiece, setSelectedPiece] = useState(null);
  
  const handleSquareClick = (index) => {
    if (selectedPiece === null) {
     
      if (board[index]) {
        setSelectedPiece(index);
      }
    } else {
      const newBoard = [...board];
      newBoard[index] = board[selectedPiece];
      newBoard[selectedPiece] = null;
      setBoard(newBoard);
      setSelectedPiece(null); 
    }
  };

  return (
    <div className="board">
      {board.map((piece, i) => {
        const x = i % 8;
        const y = Math.floor(i / 8);
        const isBlackSquare = (x + y) % 2 === 1;
        const isSelected = i === selectedPiece;

        return (
          <div
            key={i}
            className={`square ${isBlackSquare ? 'black' : 'white'} ${isSelected ? 'selected' : ''}`}
            onClick={() => handleSquareClick(i)}
          >
            {piece ? pieces[piece] : null}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
