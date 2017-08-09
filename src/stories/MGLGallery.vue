<template>
  <div class="image-container">
    <img v-for="image in images" :src="image">
  </div>
</template>

<script>
export default {
  name: "MGLGallery",
  data () {
    return {
    images:[
    '//placehold.it/300x150',
    '//placehold.it/300x150',
    '//placehold.it/300x150',
    '//placehold.it/300x150',
    '//placehold.it/300x150',
    '//placehold.it/300x150',
    '//placehold.it/300x150',
    '//placehold.it/300x150',
    '//placehold.it/300x150',
    '//placehold.it/300x150',
    '//placehold.it/300x150',
    '//placehold.it/300x150',
    '//placehold.it/300x150',
    '//placehold.it/300x150',
    '//placehold.it/300x150',
    '//placehold.it/300x150',
    ]
      }
    }
  }


</script>
<style scoped>
  img{
    padding: 10px;
  }
  .image-container{
    display: flex;
    width: 700px;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
</style>