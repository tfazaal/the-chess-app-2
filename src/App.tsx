import React from "react";
import "./App.css";
import { ChessGame } from "@react-chess-tools/react-chess-game";

function App() {
  return (
    <div className="App">
      <h1>Chess Demo App</h1>
      <ChessGame.Root>
        <ChessGame.Sounds />
        <div className="Chessboard">
          <ChessGame.Board />
        </div>
      </ChessGame.Root>
    </div>
  );
}

export default App;
