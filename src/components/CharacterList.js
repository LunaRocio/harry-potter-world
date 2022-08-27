import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  const characterItems = props.character.map((character) => {
    return <CharacterCard character={character} />;
  });
  return (
    <section>
      <ul>{characterItems}</ul>
    </section>
  );
}
export default CharacterList;
