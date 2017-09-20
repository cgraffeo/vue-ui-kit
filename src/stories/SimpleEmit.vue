<template>
  <div class="container text-center">
    <p style="font-size: 140px;">
      {{ votes }}
    </p>
    <button class="btn btn-primary" @click="vote">
      Vote
    </button>
  </div>
</template>
<script>
  export default {
    name: 'SimpleEmit',
    data(){
      return{
        votes: 0
      }
    },
    methods: {
      vote: function (writer) {
        this.$emit('voted')
      },
    },
    created(){
      this.$on('voted', function(button) {
        this.votes++
      })
    }
  }
</script>