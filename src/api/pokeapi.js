export class Api {
  static async getPokes(limit) {
    let pokeList = [];

    let urlLimit = `https://pokeapi.co/api/v2/pokemon?limit=${12}`;
    let url = `https://pokeapi.co/api/v2/pokemon`;

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

  static sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  static async getPokeInfo(id) {
    let pokeInfo = {};

    // let urlLimit = `https://pokeapi.co/api/v2/pokemon?limit=${12}`
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    let response = await fetch(url);
    let responseBody = await response.json();

    if (response.ok) {
      pokeInfo.name = responseBody.name.toUpperCase();
      pokeInfo.abilities = responseBody.abilities[0].ability.name;
      pokeInfo.base_experience = responseBody.base_experience;
      pokeInfo.height = responseBody.height;
      pokeInfo.weight = responseBody.weight;
      pokeInfo.avatar = responseBody.sprites.other['official-artwork'].front_default;
    } else {
      throw new Error(`Error getting pokemon id=${id}: ${response.status}`);
    }

    await Api.sleep(1000);

    return pokeInfo;
  }
}
