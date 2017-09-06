<template>
  <div class="container">
    <h1> Let's hear some stories!</h1>
    <div>
      <h3>Alex's Stories</h3>
      <ul class="list-group">
        <li v-for="story in sotriesBy('Alex')" class="list-group-item">
          {{ story.writer }} said "{{ story.plot }}"
        </li>
      </ul>
      <h3>John's Stories</h3>
      <ul class="list-group">
        <li v-for="story in sotriesBy('John')" class="list-group-item">
          {{ story.writer }} said "{{ story.plot }}"
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: "FAOO",
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
        ]
      }
    },
    methods: {
      storiesBy : function (writer) {
        return this.stories.filter(function (story) {
          return story.writer === writer
        })
      }
    }
  }
</script>