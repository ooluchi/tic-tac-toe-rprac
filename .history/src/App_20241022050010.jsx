import Player from "./components/Player"
function App() {
  

  return (
   <main>
    <div id="game-container">
      <ol id="players">
        <Player name ="Player 1" symbol={"X"} />
        <li>
        <span className="player">
          <span className="player-name">Player 2</span>
          <span className="player-symbol">O</span>
          </span>
          <button>Edit</button>
        </li>
        
      </ol>
    </div>
    
    </main>
  )
} 

export default App
