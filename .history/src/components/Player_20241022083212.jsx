
import { useState } from "react"

export default function Player({intialName, symbol}){
    const [] = useState(intialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick () {
        setIsEditing ( (editing) => !editing);
    }

    let playerName = <span className="player-name">{<span className="player-name">{name}</span>}</span>
    // let btnCaption ='Edit';

    if (isEditing) {
        playerName =<input type="text" required />
        // btnCaption ='Save';
    }

    return (
            <li>
          <span className="player">
          {playerName}
          <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick= {handleEditClick}>{isEditing ? 'Save': 'Edit'}</button>
        </li>
    )
}