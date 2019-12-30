export async function getPlanetInfo () {
    return await fetch(`http://localhost:8080/planet/info`)
      .then(r => r.json())
      .then( data => {
        return data;
      });
};