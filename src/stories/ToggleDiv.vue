<template>
  <div class="conatiner">
    <div class="box" v-bind:class="{ 'red' : color, 'blue' : !color }"></div>
    <div class="box" v-bind:class="{ 'purple' : color, 'green' : !color }"></div>
    <div class="box" v-bind:class="{ 'red' : color, 'blue' : !color }"></div>
    <div class="box" v-bind:class="{ 'purple' : color, 'green' : !color }"></div>
    <button v-on:click="flipColor" class="btn btn-block btn-success"> Flip Color! </button>
  </div>
</template>
<script>
  export default {
    name: 'ToggleDiv',
    data (){
      return{
        color: true
      }
    },
    methods: {
      flipColor: function() {
        this.color = !this.color
      }
    }
  }
</script>

<style>
  .red {
    background: #ff0000;
  }
  .blue {
    background: #0000ff;
  }
  .purple {
    background: #7B1FA2;
  }
  .green {
    background: #4CAF50;
  }
  .box {
    float: left;
    width: 200px;
    height: 200px;
    margin: 40px;
    border: 1px solid rgba(0, 0, 0, .2);
  }
</style>