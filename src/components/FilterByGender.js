import PropTypes from "prop-types";
function FilterByGender(props) {
  const handleChangeGender = (ev) => {
    props.handleFilterByGender(ev.target.value);
  };
  return (
    <>
      <form>
        <label htmlFor="gender">Gender</label>
        <select
          name="gender"
          id="gender"
          value={props.filterByGender}
          onChange={handleChangeGender}
        >
          <option value="All">All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </form>
    </>
  );
}
FilterByGender.defaultProps = {
  filterByGender: "",
};
FilterByGender.propTypes = {
  filterByGender: PropTypes.string.isRequired,
  handleFilterByGender: PropTypes.func.isRequired,
};
export default FilterByGender;
