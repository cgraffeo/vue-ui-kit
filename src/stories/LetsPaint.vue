<template>
  <div class="container" :style="bgColor">
    <div class="centered">
      <h1>Paint this background!</h1>
      <input type="color" v-model="bgColor.backgroundColor"></input>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return{
        bgColor: {
          backgroundColor: "#FFFFFF"
        }
      }
    }
  }
</script>
<style>
  body, html, #root {
    height: 98vw;
    width: 98vw;
  }
  .centered {
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -100px;
  }
  .container {
    width: 100%;
    height: 100%;
  }
</style>