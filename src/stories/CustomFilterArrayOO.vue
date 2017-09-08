<template>
  <div class="container">
    <h1> Let's hear some famous stories!</h1>
    <div>
      <ul class="list-group">
        <li v-for="story in orderedStories" class="list-group-item">
          {{ story.writer }} said "{{ story.plot }}" and upvoted {{ story.upvotes }} times!
        </li>
      </ul>
      <button @click="reverseOrder"> Reverse Order </button>
    </div>
  </div>
</template>
<script>
  export default {
    name: "CustomFilterArrayOO",
    data (){
      return{
        stories: [
          {
            plot: "I crashed my car today!",
            writer: "Alex",
            upvotes: 28
          },
          {
            plot: "Yesterday, someone stole my bag!",
            writer: "John",
            upvotes: 8
          },
          {
            plot: "Someone ate my chocolate...",
            writer: "John",
            upvotes: 51
          },
          {
            plot: "I are someone's chocolate!",
            writer: "Alex",
            upvotes: 74
          },
        ],
        order: -1
      }
    },
    methods: {
      reverseOrder: function () {
        this.order = (this.order === 'desc') ? 'asc' : 'desc'
      }
    },
    computed: {
      orderedStories: function () {
        var order = this.order
        return _.orderBy(this.stories, 'upvotes', [order])
      }
    }
    }
</script>