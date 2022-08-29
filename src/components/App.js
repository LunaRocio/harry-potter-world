import "../styles/App.scss";
import getDataApi from "../services/fetch";
import { useState, useEffect } from "react";
import ls from "../services/localStorage";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import { Route, Routes, useLocation } from "react-router-dom";
import { matchPath } from "react-router";

function App() {
  //variables de estado
  const [dataCharacter, setdataCharacter] = useState(ls.get("characters", []));

  const [filterByHouse, setFilterByHouse] = useState("Gryffindor");

  const [filterByName, setFilterByName] = useState("");

  useEffect(() => {
    getDataApi().then((dataFromApi) => {
      console.log(dataFromApi);
      ls.set("characters", dataFromApi);
      setdataCharacter(dataFromApi);
    });
  }, []);
  //filtro por casa
  const handleFilterByHouse = (value) => {
    setFilterByHouse(value);
  };

  const characterFilters = dataCharacter.filter((character) => {
    return character.house === filterByHouse;
  });
  //filtro por nombre
  const handleFilterByName = (ev) => {
    setFilterByName(ev.target.value);
  };

  // console.log(htmlCharacter);
  //para obtener el id del usuario clickado
  const { pathname } = useLocation();
  //compruebo que coincide
  const dataPath = matchPath("/character/:characterId", pathname);
  //compruebo que existe(no es nulo)
  const characterId = dataPath !== null ? dataPath.params.characterId : null;
  //busco el personaje
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
                filterByName={filterByName}
                handleFilterByName={handleFilterByName}
              />
              <CharacterList
                character={characterFilters}
                filterByName={filterByName}
              ></CharacterList>
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
