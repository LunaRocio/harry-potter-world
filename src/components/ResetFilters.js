function ResetFilters(props) {
  const handleReset = (ev) => {
    ev.preventDefault();
    props.resetFilters();
  };
  return (
    <button className="button" onClick={handleReset}>
      Finite Incantatem
    </button>
  );
}

export default ResetFilters;
