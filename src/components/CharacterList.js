import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  const characterItems = props.character
    .filter((character) => {
      return character.name
        .toLowerCase()
        .includes(props.filterByName.toLowerCase());
    })
    .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))

    .map((character) => {
      return <CharacterCard character={character} key={character.id} />;
    });

  const isInclude = characterItems.length !== 0;

  return isInclude ? (
    <section>
      <ul>{characterItems}</ul>
    </section>
  ) : (
    <section>
      <h5>Even our best elves can't find {props.filterByName} </h5>
    </section>
  );
}
export default CharacterList;
