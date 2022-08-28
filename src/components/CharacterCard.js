import imgDefault from "../images/imgDefault.JPG";
import { Link } from "react-router-dom";
function CharacterCard(props) {
  return (
    <li>
      <Link to={`/character/${props.character.id}`}>
        <img
          src={props.character.image || imgDefault}
          alt={`Foto de${props.character.name}`}
          title={`Foto de${props.character.name}`}
        ></img>
        <h4>{props.character.name}</h4>
        <h4>{props.character.species}</h4>
      </Link>
    </li>
  );
}

export default CharacterCard;
