function ResetFilters(props) {
  const handleReset = (ev) => {
    ev.preventDefault();
    props.resetFilters();
  };
  return <button onClick={handleReset}>Finite incantatem</button>;
}

export default ResetFilters;
