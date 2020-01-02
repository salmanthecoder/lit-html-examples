export async function getPlanetInfo () {
    return await fetch(`https://planetinfo.herokuapp.com/planet/info`)
      .then(r => r.json())
      .then( data => {
        return data;
      });
};