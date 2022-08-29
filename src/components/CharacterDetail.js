import { Link } from "react-router-dom";
import imgDefault from "../images/imgDefault.JPG";
const CharacterDetail = (props) => {
  const isAlive = () => {
    if (props.character.alive === true) {
      return "alive";
    } else {
      return "death";
    }
  };
  const knownAs = () => {
    if (props.character.alternateNames.length !== 0) {
      return `Also known as: ${props.character.alternateNames}`;
    } else {
      return "";
    }
  };
  return (
    <>
      <section>
        <img
          src={props.character.image || imgDefault}
          alt={`Foto de${props.character.name}`}
          title={`Foto de${props.character.name}`}
        ></img>
        <h4>Name:{props.character.name}</h4>
        <h4> House: {props.character.house}</h4>
        <h4>Specie: {props.character.species}</h4>
        <h5>State: {isAlive()}</h5>
        <h5>Gender: {props.character.gender}</h5>
        <h5>{knownAs()}</h5>
      </section>
      <button>
        <Link to="/"> Obliviate</Link>
      </button>
    </>
  );
};

export default CharacterDetail;
