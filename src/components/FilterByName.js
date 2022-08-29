function FilterByName(props) {
  return (
    <form>
      <label htmlFor="searchName">Accio character</label>
      <input
        type="text"
        name="searchName"
        id="searchName"
        placeholder="Harry Potter"
        onChange={props.handleFilterByName}
        value={props.filterByName}
      ></input>
    </form>
  );
}

export default FilterByName;
