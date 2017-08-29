<template>
<div class="container">
  <h1>This is me!</h1>
  <ul class="list-group">
    <li v-for="(value, key, index) in person" class="list-group-item">
      {{index}} : {{key}} = {{ value }}
    </li>
  </ul>
</div>
</template>
<script>
  export default {
    name: 'ArrayOfObjectsIdx',
    data () {
      return {
        person:
          {
            name: "Chris",
            height: "5' 11",
            weight: 47,
            eyeColor: "Blue",
            favoriteFood: "Strawberries",
          }
      }
    }
  }
</script>