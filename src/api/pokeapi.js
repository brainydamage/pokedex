export class Api {
  static async getPokes(limit) {
    let pokeList = [];

    let urlLimit = `https://pokeapi.co/api/v2/pokemon?limit=${5}`
    let url = `https://pokeapi.co/api/v2/pokemon`

    let response = await fetch(urlLimit);
    let responseBody = await response.json();

    if (response.ok) {
      responseBody.results.forEach(poke => {
        pokeList.push(poke);
      });
    } else {
      throw new Error(`Error getting pokemons: ${response.status}`);
    }

    return pokeList;
  }
}
