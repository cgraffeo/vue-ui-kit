<template>
  <div class="container">
    <button v-on:click="upvote">
      Upvote! {{upvotes}}
    </button>
  </div>
</template>
<script>
  export default{
    name: 'UpvoteBtn',
    data () {
      return {
        upvotes: 0
      }
    },
    methods: {
        upvote: function(){
          this.upvotes++;
        }
      }
  }
</script>