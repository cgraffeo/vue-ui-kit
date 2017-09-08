<template>
  <div class="container">
    <h1> Let's hear some stories!</h1>
    <div>
      <h3>Alex's Stories</h3>
      <ul class="list-group">
        <li v-for="story in storiesBy('Alex')" class="list-group-item">
          {{ story.writer }} said "{{ story.plot }}"
        </li>
      </ul>
      <h3>John's Stories</h3>
      <ul class="list-group">
        <li v-for="story in storiesBy('John')" class="list-group-item">
          {{ story.writer }} said "{{ story.plot }}"
        </li>
      </ul>
    </div>
    <div class="form-group">
      <label for="query">
        What are you looking for?
      </label>
      <input v-model="query" class="form-control">
    </div>
    <h3> Search Results </h3>
    <ul class="list-group">
      <li v-for="story in search" class="list-group-item">
        {{ story.writer }} said "{{ story.plot }}"
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: "SFAOO",
    data (){
      return{
        stories: [
          {
            plot: "I crashed my car today!",
            writer: "Alex"
          },
          {
            plot: "Yesterday, someone stole my bag!",
            writer: "John"
          },
          {
            plot: "Someone ate my chocolate...",
            writer: "John"
          },
          {
            plot: "I are someone's chocolate!",
            writer: "Alex"
          },
        ],
        query: ''
      }
    },
    methods: {
      storiesBy: function (writer) {
        return this.stories.filter(function (story) {
          return story.writer === writer
        })
      }
    },
    computed: {
      search: function () {
        var query = this.query
        return this.stories.filter(function (story) {
          return story.plot.includes(query)
        })
      }
    }
  }
</script>