import Vue from 'vue';

require('../TypeSelector.js')();

// Define a new component called todo-item
module.exports = function() {
  Vue.component('attack-checker', {
    props: ['types'],
    data: function() {
      return {
        attackerType: null,
        defendingType1: null,
        defendingType2: null
      }
    },
    template: `
      <div>
        <h1>Pokémon Attack Type checker</h1>
        <div class="attacker">
          <type-selector v-on:changeType="updateAttacker" v-bind:types="types"></type-selector>
        </div>
        <div class="defender">
        <type-selector v-on:changeType="updateDefender1" v-bind:types="types"></type-selector>
        <type-selector v-on:changeType="updateDefender2" v-bind:types="types"></type-selector>
        </div>
        <div class="result">
            {{result}}
        </div>
      </div>
    `,
    methods: {
      updateAttacker: function(pokemonType) {
        console.log('updated attacker to', pokemonType);
        this.attackerType = pokemonType;
      },
      updateDefender1: function(pokemonType) {
        console.log('updated defender 1 to', pokemonType);
        this.defendingType1 = pokemonType;
      },
      updateDefender2: function(pokemonType) {
        console.log('updated defender 2 to', pokemonType);
        this.defendingType2 = pokemonType;
      }
    },
    computed: {
      result: function (e, value) {
        console.log('updating result');
        
        return this.attackerType ? this.attackerType.getMultiplier([this.defendingType1, this.defendingType2]) : null;
      }
    }
  });
}
