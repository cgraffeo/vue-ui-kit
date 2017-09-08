<template>
  <div class="container">
    <h1> Let's hear some famous stories! ({{ famous.length }})</h1>
    <div>
      <ul class="list-group">
        <li v-for="story in famous" class="list-group-item">
          {{ story.writer }} said "{{ story.plot }}" and upvoted {{ story.upvotes }} times!
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: "CFAOO",
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
        ]
      }
    },
    computed: {
      famous: function () {
        return this.stories.filter(function (item) {
          return item.upvotes > 25
        })
      }
    }
  }
</script>