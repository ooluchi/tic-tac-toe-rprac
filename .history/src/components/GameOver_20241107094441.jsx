export default function Game(winner) {
    return 
        <div className="game-over">
            <h2>Game Over!</h2>
            <p>{winner} won!</p>
            <p>
                <button>Rematch!</button>
            </p>
        </div>
    
}