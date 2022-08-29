function FilterByHouse(props) {
  const handleChange = (ev) => {
    props.handleFilterByHouse(ev.target.value);
  };
  return (
    <>
      <form>
        <label htmlFor="house">Hogwarts Houses</label>
        <select
          name="house"
          id="house"
          value={props.filterByHouse}
          onChange={handleChange}
        >
          <option value="Gryffindor">Gryffindor</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Hufflepuff">Hufflepuff </option>
          <option value="Slytherin">Slytherin</option>
        </select>
      </form>
    </>
  );
}

export default FilterByHouse;
