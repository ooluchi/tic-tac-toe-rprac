import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const 

  return (
   <main>
    <div id="game-container">
      <ol id="players">
        <Player intialName ="Player 1" symbol="X" />
        <Player intialName ="Player 2" symbol="O" />
        
      </ol>
      <GameBoard />
    </div>
    
    
    </main>
  )
} 

export default App
