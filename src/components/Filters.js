import FilterByHouse from "./FilterByHouse";
import FilterByName from "./FilterByName";
import ResetFilters from "./ResetFilters";

function Filters(props) {
  return (
    <>
      <FilterByName
        filterByName={props.filterByName}
        handleFilterByName={props.handleFilterByName}
      />
      <FilterByHouse
        filterByHouse={props.filterByHouse}
        handleFilterByHouse={props.handleFilterByHouse}
      />
      <ResetFilters resetFilters={props.resetFilters} />
    </>
  );
}

export default Filters;
