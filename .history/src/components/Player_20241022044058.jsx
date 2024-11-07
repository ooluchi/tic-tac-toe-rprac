export default function Player({name, symbol}){
    return (
            <li>
          <span className="player">
          <span className="player-name">{name}</span>
          <span className="player-symbol">{X}</span>
          </span>
          <button>Edit</button>
        </li>
    )
}