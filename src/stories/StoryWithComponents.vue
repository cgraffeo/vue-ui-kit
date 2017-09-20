<template>
  <div class="container">
    <h1>Where would like to go?</h1>
    <ul class="list-group">
      <planet v-for="planet in planets" :planet="planet"></planet>
    </ul>
  </div>
</template>

<script>

import Planet from './Planets.vue'

export default {
  name: 'StoryWithComponents',
  components: {
    Planet
  },
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

</script>