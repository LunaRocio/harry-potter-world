import imgDefault from "../images/imgDefault.JPG";

function CharacterList(props) {
  const characterItems = props.character.map((character) => {
    return (
      <li>
        <a href="#">
          <img
            src={character.image || imgDefault}
            alt={`foto de${character.name}`}
            title={`foto de${character.name}`}
          ></img>
          <h4>{character.name}</h4>
          <h4>{character.species}</h4>
        </a>
      </li>
    );
  });
  return (
    <section>
      <ul>{characterItems}</ul>
    </section>
  );
}
export default CharacterList;
