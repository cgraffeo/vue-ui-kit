<template>
  <div class="col-md-3">
    <p style="font-size: 140px;" v-text="votes"></p>
    <button @click="vote" v-text="name"></button>
  </div>
</template>


<script type="text/javascript">


 export default {
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data: function () {
      return {
        votes: 0
      }
    },
    methods: {
      vote: function (event) {
        console.log(event)
        this.votes++
        this.$emit('voted', event.srcElement.textContent)
      }
    }
  }
</script>