<template>
  <div class="container">
    <ul class="list-group">
      <li class="list-group-item" :class="{'completed': task.done}"
        :style="styleObject"
        v-for="task in tasks"
      >
        {{ task.body }}
        <button @click="completeTask(task)" class="btn"> Complete Task</button>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        tasks: [
          {body: "Feed the horses", done: false},
          {body: "Wash armor", done: false},
          {body: "Sharpen sword", done: false},
        ],
        styleObject: {
          fontSize: '25px'
        }
      }
    },
    methods: {
      completeTask: function(task) {
        task.done = !task.done
      }
    }
  }
</script>
<style>
  .completed {
    text-decoration: line-through;
  }
</style>