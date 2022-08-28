function FilterByHouse(props) {
  const handleChange = (ev) => {
    props.handleFilterByHouse(ev.target.value);
  };
  return (
    <>
      <label for="house">Casa</label>
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
    </>
  );
}

export default FilterByHouse;
