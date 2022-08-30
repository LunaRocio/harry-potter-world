import imgDefault from "../images/imgDefault.JPG";
import { Link } from "react-router-dom";
function CharacterCard(props) {
  return (
    <li className="list__li">
      <Link to={`/character/${props.character.id}`}>
        <img
          src={props.character.image || imgDefault}
          alt={`Foto de${props.character.name}`}
          title={`Foto de${props.character.name}`}
          className="list__li--img"
        ></img>
        <h4 className="list__li--h4">{props.character.name}</h4>
        <h4 className="list__li--h4">{props.character.species}</h4>
      </Link>
    </li>
  );
}

export default CharacterCard;
