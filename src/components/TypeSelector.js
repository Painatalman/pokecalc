import Vue from 'vue';

// Define a new component called todo-item
module.exports = function() {
  Vue.component('type-selector', {
    props: ['types'],
    template: `
      <div>
      <select v-on:change="update">
      <option value="">Please select a type</option>
      <option v-for="type in types.getAllTypes()">{{type.name}}</option>
      </select>
      </div>
    `,
    methods: {
      update: function (e) {
        this.$emit('changeType', this.types.getTypeFromName(e.target.value, false));
      }
    }
  });
}
