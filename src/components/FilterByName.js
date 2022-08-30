import PropTypes from "prop-types";
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
FilterByName.defaultProps = {
  filterByName: "",
};
FilterByName.propTypes = {
  filterByName: PropTypes.string.isRequired,
  handleFilterByName: PropTypes.func.isRequired,
};
export default FilterByName;
