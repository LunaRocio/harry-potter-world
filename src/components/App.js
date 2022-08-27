import "../styles/App.scss";
import getDataApi from "../services/fetch";
import { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

function App() {
  //variables de estado
  const [dataCharacter, setdataCharacter] = useState([]);

  const [filterByHouse, setFilterByHouse] = useState("");

  useEffect(() => {
    getDataApi().then((dataFromApi) => {
      console.log(dataFromApi);
      setdataCharacter(dataFromApi);
    });
  }, []);

  const handleFilterByHouse = (value) => {
    setFilterByHouse(value);
  };

  const characterFilters = dataCharacter.filter((character) => {
    return character.house === filterByHouse;
  });
  return (
    <>
      <h1>Harry Potter</h1>
      <Filters
        filterByHouse={filterByHouse}
        handleFilterByHouse={handleFilterByHouse}
      />
      <CharacterList character={characterFilters}></CharacterList>
    </>
  );
}

export default App;
