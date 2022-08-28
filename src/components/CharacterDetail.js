const CharacterDetail = (props) => {
  return (
    <section>
      <a href="#">
        <img
          src={props.character.image}
          alt={`Foto de${props.character.name}`}
          title={`Foto de${props.character.name}`}
        ></img>
        <h4>{props.character.name}</h4>
        <h4>{props.character.species}</h4>
      </a>
    </section>
  );
};

export default CharacterDetail;
