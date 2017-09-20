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

export default {
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
}

</script>