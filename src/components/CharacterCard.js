import imgDefault from "../images/imgDefault.JPG";
function CharacterCard(props) {
  return (
    <li>
      <a href="#">
        <img
          src={props.character.image || imgDefault}
          alt={`Foto de${props.character.name}`}
          title={`Foto de${props.character.name}`}
        ></img>
        <h4>{props.character.name}</h4>
        <h4>{props.character.species}</h4>
      </a>
    </li>
  );
}

export default CharacterCard;
