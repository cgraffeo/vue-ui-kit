<template>
  <div class="chariot-names">
    <li class="list-group-item">
      {{ chariot.name }} has {{ chariot.horses }} horse(s)
    </li>
    <button @click="rideChariot(chariot)" class="btn btn-primary" :disabled="isCurrentChariot">
      {{ action }}
    </button>
  </div>
</template>
<script>
  export default{
    name: 'ChariotChild',
    props: ['chariot', 'currentChariot'],
    methods: {
      rideChariot: function(chariot) {
        this.$emit('select', chariot)
      },
    },
    computed: {
      isCurrentChariot: function(){
        return this.currentChariot.name == this.chariot.name
      },
      hasMoreHorses: function(){
        return this.currentChariot.horses < this.chariot.horses
      },
      noChariot: function(){
        this.currentChariot.name == null;
      },
      action: function(){
        let action
        if (this.noChariot) {
          action = 'Pick Chariot'
        } else if (this.isCurrentChariot) {
          action = 'Riding!'
        } else if (this.hasMoreHorses) {
          action = 'Hire Horses!'
        } else {
          action = 'Dismiss Horses'
        }
        return action;
      }
    }
  }
</script>