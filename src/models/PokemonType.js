// @flow

export default class PokemonType {
  // WARNING: month is in the 1-12 format, not the default 0-11 one
  constructor(type={name:string, isSuperEffectiveAgainst:[], isNotVeryEffectiveAgainst:[],doesNotWorkAgainst:[]} ) {
    this.name = type.name;
    this.isSuperEffectiveAgainst = type.isSuperEffectiveAgainst;
    this.isNotVeryEffectiveAgainst = type.isNotVeryEffectiveAgainst;
    this.doesNotWorkAgainst = type.doesNotWorkAgainst;
  }
  getName() {
    return this.name;
  }
  getMultiplierFromOneType(pokemonTypeOrName) {
    // check if falsy... return 1 if so
    if (!pokemonTypeOrName) {
      return 1;
    }
    let typeName = pokemonTypeOrName instanceof PokemonType ? pokemonTypeOrName.name : pokemonTypeOrName.toLowerCase();
    if (this.isSuperEffectiveAgainst && this.isSuperEffectiveAgainst.includes(typeName)) {
      return 2;
    }
    else if (this.isNotVeryEffectiveAgainst && this.isNotVeryEffectiveAgainst.includes(typeName)) {
      return 0.5;
    }
    else if (this.doesNotWorkAgainst && this.doesNotWorkAgainst.includes(typeName)) {
      return 0;
    }
    else {
      // WARNING: this will also consider invalid values... should it?
      return 1;
    }
  }
  getMultiplier(pokemonTypesOrNames=[]) {
    let modifier = 1;
    // if pokemonTypesOrNames is a PokemonTypeCollection instance, it has a getAllTypes method
    let pokemonTypes = pokemonTypesOrNames.getAllTypes ? pokemonTypesOrNames.getAllTypes : pokemonTypesOrNames;
    
    if (!(pokemonTypes instanceof Array)) {
      throw new Error('The parameter is not an array');
    }
    
    pokemonTypes.forEach((pokemonType) => {
      modifier *= this.getMultiplierFromOneType(pokemonType);
    });
    
    return modifier;
  }
}
