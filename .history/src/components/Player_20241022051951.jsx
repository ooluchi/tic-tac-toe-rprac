
import { useState } from "react"

export default function Player({name, symbol}){
    const [isEditing, setIsEditing] = useState (false);

    function handleEditClick () {
        setIsEditing (true);
    }

    let playerName = <span className="player-name">{name}</span>

    if (isEditing) {
        playerName =<input type="text" required />
        btnCaption ='Save';
    }

    return (
            <li>
          <span className="player">
          {playerName}
          <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick= {handleEditClick}>{is}Edit</button>
        </li>
    )
}