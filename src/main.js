/* @flow */
import Vue from 'vue';

import PokemonType from './models/PokemonType';
import PokemonTypeCollection from './models/PokemonTypeCollection';

require('./components/pages/AttackChecker.js')();

var types = new PokemonTypeCollection();

require('../data/pokemon_types.json').forEach((typeAsJson) => {types.addPokemonType(new PokemonType(typeAsJson))});

console.log(types);

var app = new Vue({
  el: '#app',
  data: {
    types: types
  },
  template: '<attack-checker v-bind:types="types"></attack-checker>'
});
