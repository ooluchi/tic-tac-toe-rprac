const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard () {
    return <ol id="game-board">
        {initialGameBoard.map ((row, indexRow) => <li key={rowIndex}></li>
        ) }
    </ol>
}