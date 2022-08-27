import FilterByHouse from "./FilterByHouse";

function Filters(props) {
  return (
    <>
      {/* <FilterByName /> */}
      <FilterByHouse
        filterByHouse={props.filterByHouse}
        handleFilterByHouse={props.handleFilterByHouse}
      />
    </>
  );
}

export default Filters;
