<template>
  <div class="container">
    <h1> Let's hear some stories!</h1>
    <ul class="list-group">
      <story v-for="story in stories" :story="story"></story>
    </ul>
  </div>
</template>
<template id="story-template">
  <li class="list-group-item">
    {{ story.writer }} said "{{ story.plot }}"
    Story upvotes {{ story.upvotes }}.
    <button v-show="!story.voted" @click="upvote" class="btn btn-default">
      Upvote
    </button>
  </li>
</template>
<script>
import Vue from 'vue';
Vue.component('story', {
  template: "#story-template",
  props: ['story'],
  methods: {
    upvote: function(){
      this.story.upvotes += 1;
      this.story.voted = true;
    },
  }
});
  export default {
    name: 'StoryWithComponents',
    data(){
      return{
        stories: [
          {
            writer: 'Mr. Weebl',
            story: 'My horse is amazing.',
            voted: false
          },
          {
            writer: 'Mr. Weebl',
            story: 'Narwhals invented Shish Kebab.',
            voted: false
          },
          {
            writer: 'Darth Vader',
            story: 'The dar side of the force is stronger.',
            voted: false
          },
          {
            writer: 'Boromir',
            story: 'One does not simple walk into Mordeor.',
            voted: false
          },
        ]
      }
    }
  }
</script>