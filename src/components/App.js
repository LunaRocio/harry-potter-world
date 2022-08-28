import "../styles/App.scss";
import getDataApi from "../services/fetch";
import { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import { Route, Routes, useLocation } from "react-router-dom";
import { matchPath } from "react-router";

function App() {
  //variables de estado
  const [dataCharacter, setdataCharacter] = useState([]);

  const [filterByHouse, setFilterByHouse] = useState("Gryffindor");

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

  const { pathname } = useLocation();
  const dataPath = matchPath("/character/:characterId", pathname);
  const characterId = dataPath !== null ? dataPath.params.characterId : null;
  const characterFound = dataCharacter.find((character) => {
    return character.id === parseInt(characterId);
  });
  return (
    <>
      <h1>Harry Potter</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                filterByHouse={filterByHouse}
                handleFilterByHouse={handleFilterByHouse}
              />
              <CharacterList character={characterFilters}></CharacterList>
            </>
          }
        />
        <Route
          path="/character/:characterId"
          element={<CharacterDetail character={characterFound} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
