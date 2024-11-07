
import { useState } from "react"

export default function Player({initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick () {
        setIsEditing ( (editing) => !editing);
        onChangeName(symbol, ne);
    }

    function handleChangeName (event) {
        setPlayerName(event.target.value);
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>
    // let btnCaption ='Edit';

    if (isEditing) {
        editablePlayerName =
        <input type="text" required value ={playerName} onChange={handleChangeName}/>
        // btnCaption ='Save';
    }

    return (
            <li className={isActive ? 'active' : undefined}>
          <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick= {handleEditClick}>{isEditing ? 'Save': 'Edit'}</button>
        </li>
    )
}