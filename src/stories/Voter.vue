<template>
  <div class="container">
    <ul class="list-group">
      <li v-for="user in users" class="list-group-item">
        {{user}} has {{currentVote}}
       <button @click.prevent="upvote"> Vote! </button>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: "Voter",
    data () {
      return{
        users: [
          'bob',
          'joe',
          'bill'
        ],
        currentVote: 0
      }
    },
    methods: {
      upvote: function (){
        this.currentVote++;
      }
      }
    }
</script>