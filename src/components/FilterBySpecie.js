function FilterBySpecie(props) {
  return (
    <>
      <label htmlFor="searchSpecie" className="filter__label">
        Specie
      </label>
      <input
        className="filter__input"
        type="text"
        name="searchSpecie"
        id="searchSpecie"
        placeholder="Human"
        onChange={props.handleFilterBySpecie}
        value={props.filterBySpecie}
      ></input>
    </>
  );
}

export default FilterBySpecie;
