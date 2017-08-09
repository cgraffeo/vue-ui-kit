<template>
<div>
  <h1 v-if="!message">You must send a message for help!</h1>
  <h2 v-else>You have sent a message!</h2>
  <textarea v-model="message"></textarea>
  <button v-if="message">
    Send word to the allies for help!
  </button>
  <pre>
    {{ $data }}
  </pre>
</div>
</template>
<script>
export default {
name: "ConditionalBTNMSG",
data () {
  return {
  message: 'Our king is dead!  Send help!'
    }
  }
}
</script>
<style>
</style>