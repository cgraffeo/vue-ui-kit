<template>
  <div class="image-container">
  <p>
    <a @click="prev">Previous</a> || <a @click="next">Next</a>
  </p>
  <div
       v-for="number in [currentNumber]"
       transition="fade"
       >
    <img
         :src="images[Math.abs(currentNumber) % images.length]"
         v-on:mouseover="stopRotation"
         v-on:mouseout="startRotation"
         />
  </div>
  </div>
</template>

<script>
export default {
  name: "slider-gallery",
  data () {
    return {
    images:[
    '//i.imgur.com/k29Eywx.jpg',
    '//i.imgur.com/gzU08BK.jpg',
    '//i.imgur.com/b1n320V.jpg',
    '//i.imgur.com/AGS6nYC.jpg',
    '//i.imgur.com/4pNlY2J.jpg',
    ],
    currentNumber: 0,
    timer: null,
  }
},
    ready: function () {
      this.startRotation();
    },
    methods: {
      startRotation: function() {
      this.timer = setInterval(this.next, 3000);
    },
    stopRotation: function() {
      clearTimeout(this.timer);
      this.timer = null;
    },
    next: function() {
      this.currentNumber += 1
    },
    prev: function() {
      this.currentNumber -= 1
    }
      }
    }

</script>
<style scope>
  .fade-transition {
  transition: all 0.8s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  position: absolute;
}
.fade-enter, .fade-leave {
  opacity: 0;
  visibility: hidden;
}
</style>