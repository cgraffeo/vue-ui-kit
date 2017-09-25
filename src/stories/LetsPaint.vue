<template>
  <div class="container" :class="{'painted': background.paint}" :style="styleObject">
    <input type="color" placeholder="#FFFFFF"></input>
  </div>
</template>
<script>
  export default {
    data() {
      return{
        styleObject: {
          background: '#FFFFFF'
        }
      }
    }
  }
</script>
<style></style>