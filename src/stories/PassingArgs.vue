<template>
  <div class="container text-center">
    <p style="font-size: 140px;" v-text="votes"></p>
    <div class="row">
      <food @voted="countVote" name="Cheeseburger"></food>
      <food @voted="countVote" name="Double Bacon Burger"></food>
      <food @voted="countVote" name="Rodeo Burger"></food>
    </div>
    <div class="row">
      <h1> Log: </h1>
        <ul class="list-group">
          <li class="list-group-item" v-for="vote in log" v-text="vote">
          </li>
        </ul>
    </div>
  </div>
</template>


<script type="text/javascript">
  import Food from './Food.vue'

  export default {
    components: {
      Food
    },
    data: function (){
      return {
        votes: 0,
        log: []
      }
    },
    methods: {
      countVote: function (food) {
        this.votes++
        this.log.push(food + ' recieved a vote!')
      }
    }
  }
</script>