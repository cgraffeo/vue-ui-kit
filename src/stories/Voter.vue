<template>
  <div class="container">
    <ul class="list-group">
      <li v-for="user in users" class="list-group-item">
        {{user.name}} has {{user.votes}}
       <button @click.prevent="user.votes++"> Vote! </button>
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
    }
      };
</script>