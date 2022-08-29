import { Link } from "react-router-dom";
const CharacterDetail = (props) => {
  return (
    <>
      <section>
        <img
          src={props.character.image}
          alt={`Foto de${props.character.name}`}
          title={`Foto de${props.character.name}`}
        ></img>
        <h4>{props.character.name}</h4>
        <h4>{props.character.species}</h4>
        <h5>{props.character.alive}</h5>
        <h5>{props.character.gender}</h5>
        <h5>{props.character.alternateNames}</h5>
      </section>
      <button>
        <Link to="/"> Obliviate</Link>
      </button>
    </>
  );
};

export default CharacterDetail;
