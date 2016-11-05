export default class PokemonType {
  constructor(pokemonTypes=[]) {
    this.pokemonTypes = pokemonTypes;
  }
  addPokemonType(pokemonType) {
    this.pokemonTypes.push(pokemonType);
  }
  getAllTypes() {
    return this.pokemonTypes;
  }
  getTypeFromName(name, throwErrorIfNone=false) {
    name = name.toLowerCase();
    
    let typeCandidates = this.pokemonTypes.filter((pokemonType) => pokemonType.getName() === name);
    
    if (typeCandidates.length) {
      return typeCandidates[0];
    }
    else {
      if (!throwErrorIfNone) {
        return undefined
      }
      else {
        throw new Error('The requested type does not exist');
      }
    }
  }
}
