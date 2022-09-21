import "../styles/App.scss";
import getDataApi from "../services/fetch";
import { useState, useEffect } from "react";
import ls from "../services/localStorage";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import { Route, Routes, useLocation } from "react-router-dom";
import { matchPath } from "react-router";

import Header from "./Header";

function App() {
  //variables de estado
  const [dataCharacter, setdataCharacter] = useState(
    ls.get("dataCharacter", [])
  );

  const [filterByHouse, setFilterByHouse] = useState("Gryffindor");

  const [filterByName, setFilterByName] = useState("");

  const [filterByGender, setFilterByGender] = useState("All");
  const [filterBySpecie, setFilterBySpecie] = useState("");

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

  const characterFilters = dataCharacter
    .filter((character) => {
      return character.house === filterByHouse;
    })
    .filter((character) => {
      if (filterByGender === "All") {
        return true;
      } else {
        return character.gender === filterByGender;
      }
    });
  //filtro por genero
  const handleFilterByGender = (value) => {
    setFilterByGender(value);
  };

  //filtro por nombre
  const handleFilterByName = (ev) => {
    setFilterByName(ev.target.value);
  };
  //filtro por especie
  const handleFilterBySpecie = (ev) => {
    setFilterBySpecie(ev.target.value);
  };
  // reset filters

  const resetFilters = () => {
    setFilterByHouse("Gryffindor");
    setFilterByName("");
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
      <Header />
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
                filterByGender={filterByGender}
                handleFilterByGender={handleFilterByGender}
                resetFilters={resetFilters}
                filterBySpecie={filterBySpecie}
                handleFilterBySpecie={handleFilterBySpecie}
              />
              <CharacterList
                character={characterFilters}
                filterByName={filterByName}
                filterBySpecie={filterBySpecie}
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
