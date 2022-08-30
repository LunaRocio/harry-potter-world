import PropTypes from "prop-types";
function FilterByName(props) {
  return (
    <>
      <label htmlFor="searchName" className="filter__label">
        Accio character
      </label>
      <input
        className="filter__input"
        type="text"
        name="searchName"
        id="searchName"
        placeholder="Harry Potter"
        onChange={props.handleFilterByName}
        value={props.filterByName}
      ></input>
    </>
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
