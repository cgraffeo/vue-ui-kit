<template>
<div>
  <div v-if="gender == 'male' || gender == 'female'">
  <h1 v-if="gender == 'female'">Hello, Miss {{ name }}.</h1>
  <h1 v-else>Hello, Mister {{name}}.</h1>
  </div>
  <div v-else>
    <h1>So you can't decide. Fine!</h1>
  </div>
  <p>Please enter your Gender</p>
  <input v-model="gender">
  <p>Please enter your name</p>
  <input v-model="name">
</div>
</template>
<script>
  export default {
    name: "CNDTLTextInputs",
    data () {
      return {
      name: "",
      gender: "",
    }
    }
  }
</script>
<style>
</style>