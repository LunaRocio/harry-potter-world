import FilterByHouse from "./FilterByHouse";
import FilterByName from "./FilterByName";
import FilterByGender from "./FilterByGender";
import ResetFilters from "./ResetFilters";

function Filters(props) {
  return (
    <>
      <form className="filter">
        <FilterByName
          filterByName={props.filterByName}
          handleFilterByName={props.handleFilterByName}
        />
        <FilterByHouse
          filterByHouse={props.filterByHouse}
          handleFilterByHouse={props.handleFilterByHouse}
        />
        <FilterByGender
          filterByGender={props.filterByGender}
          handleFilterByGender={props.handleFilterByGender}
        />
        <ResetFilters resetFilters={props.resetFilters} />
      </form>
    </>
  );
}

export default Filters;
