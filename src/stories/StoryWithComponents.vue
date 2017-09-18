<!--   <div id="main">
    <div class="container">
      <h1>Where would like to go?</h1>
      <ul class="list-group">
        <planet v-for="planet in planets" :planet="planet"></planet>
    </ul>
  </div>
</div>
<template id="planet-template">
  <li  class="list-group-item">
    Planet: {{ planet.name }}
    Visited {{ planet.visits }} time(s).
    <button v-show="canBeVisited" @click="visit" class="btn btn-default">
      Visit
    </button>
    <span v-show="planet.visits > 0" class="fa fa-rocket fa-2x pull-right" aria-hidden="true">
</span>
</li>
</template>
<script>
import Vue from 'vue';

Vue.component('planet', {
  template: "#planet-template",
  props: ['planet'],
  methods: {
    visit: function(){
      this.planet.visits++;
    },
  },
  computed: {
    canBeVisited: function () {
      return this.planet.visits < 3
    }
  }
});
export default {
  name: 'StoryWithComponents',
  data (){
    return {
      planets: [
        {
          name: 'Mercury',
          visits: 0
        },
        {
          name: 'Venus',
          visits: 0
        },
        {
          name: 'Mars',
          visits: 0
        },
        {
          name: 'Jupiter',
          visits: 0
        }
      ]
    }
  }
}
</script> -->