<template>
  <div class="container">
    <ul class="list-group">
      <li v-for="user in users" class="list-group-item">
        {{user.name}} has {{user.votes}}
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
          {name: 'bob',
            votes: 0},
          {name: 'joe',
          votes: 0}
        ]
      }
    },
    methods: {
      upvote: function (){
        this.user.votes++;
      }
      }
    }
</script>