<template>
  <div class="container">
    <ul class="list-group">
      <li v-for="user in users" class="list-group-item">
        {{user.name}} has {{user.votes}}
       <button @click.prevent="user.votes++"> Vote! </button>
      </li>
    </ul>
    <input @keyup.delete="clear" class="form-control" placeholder="press 'delete' to reset "></input>
    <h2> Our mayor is {{mayor.name}} with {{mayor.votes}} votes!</h2>
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
          votes: 0},
          {name: 'bill',
          votes: 0},
          {name: 'hillary',
          votes: 0},
          {name: 'obama',
          votes: 0}
        ]
      }
    },
    computed: {
      mayor: function () {
        var candidatesSorted = this.users.sort(function(a, b) {
          return b.votes - a.votes;
        });
        return candidatesSorted[0];
      }
    },
    methods: {
      clear: function () {
        this.users = this.users.map(function (user) {
          user.votes = 0;
          return user;
        });
      }
    }
    }
</script>