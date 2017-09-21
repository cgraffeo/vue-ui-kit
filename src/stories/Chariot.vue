<template>
  <div class="container">
    <ul class="list-group">
      <ChariotChild v-for="chariot in chariots" :chariot="chariot" :currentChariot="currentChariot" @select="activate"></ChariotChild>
    </ul>
  </div>
</template>
<script>
  import ChariotChild from './ChariotChild.vue'

  export default {
    name: 'Chariot',
    components:{
      ChariotChild
    },
    data (){
      return {
        chariots: [
          {
            name: 'Chariot1',
            horses: 1
          },
          {
            name: 'Chariot2',
            horses: 2
          },
          {
            name: 'Chariot3',
            horses: 3
          },
          {
            name: 'Chariot4',
            horses: 4
          },
        ],
        currentChariot: {}
      }
      },
    methods: {
      activate: function(chariot){
        this.currentChariot = chariot
      }
    }
}
</script>