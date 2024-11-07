const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard () {
    return <ol id="game-board">
        {initialGameBoard.map ((row, row) => <li key={rowIndex}></li>
        <ol>
            {row.map(col, colIndex => <li key={colIndex}><button>X</button>
        </ol>
            </li> )}

        
    </ol>
}