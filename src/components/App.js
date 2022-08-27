import "../styles/App.scss";
import getDataApi from "../services/fetch";
import { useState, useEffect } from "react";
import CharacterList from "./CharacterList";

function App() {
  //variables de estado
  const [dataCharacter, setdataCharacter] = useState([]);
  useEffect(() => {
    getDataApi().then((dataFromApi) => {
      console.log(dataFromApi);
      setdataCharacter(dataFromApi);
    });
  }, []);
  return (
    <>
      <h1>Harry Potter</h1>
      <CharacterList character={dataCharacter}></CharacterList>
    </>
  );
}

export default App;
