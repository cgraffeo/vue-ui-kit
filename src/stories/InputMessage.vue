<template>
  <div>
    <h1>Welcome {{ name }}!</h1>
    <p>Enter your name</p>
    <input v-model="name" />
  </div>
</template>

<script>
export default {
  name: "input-message",
    data () {
    return {
       name: 'Guest'
    }
  }
}


</script>
<style scope>
</style>