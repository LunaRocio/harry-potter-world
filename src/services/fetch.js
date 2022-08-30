function getDataApi() {
  return fetch("http://hp-api.herokuapp.com/api/characters")
    .then((response) => response.json())
    .then((dataApi) => {
      const dataClean = dataApi.map((character, index) => {
        return {
          id: index,
          name: character.name,
          image: character.image,
          species: character.species,
          house: character.house,
          alive: character.alive,
          gender: character.gender,
          alternateNames: character.alternate_names,
        };
      });

      return dataClean.sort();
    });
}

export default getDataApi;
