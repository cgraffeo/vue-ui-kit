<template>
  <div class="container">
    <h1> People of Vue </h1>
    <ul class="list-group">
      <li v-for="person in orderedPeople()" class="list-group-item">
        {{ person.name }} {{ person.age }}
      </li>
    </ul>
    <h1> Old People of Vue </h1>
    <ul class="list-group">
      <li v-for="person in old"  class="list-group-item">
        {{ person.name }} {{ person.age }}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'FilteredPeople',
    data(){
      return {
        people:[
          {
            age: 15,
            name: 'Bob'
          },
          {
            age: 66,
            name: 'Billy'
          },
          {
            age: 20,
            name: 'Joan'
          },
          {
            age: 80,
            name: 'Clariese'
          },
          {
            age: 8,
            name: 'Goerge'
          },
          {
            age: 56,
            name: 'Donald'
          },
          {
            age: 42,
            name: 'Dick'
          },
        ]
      }
    },
    methods: {
      orderedPeople: function() {
        return _.orderBy(this.people, 'age')
      }
    },
    computed: {
      old: function(){
        return this.people.filter(function (item) {
          return item.age > 65;
        });
      }
    }
  }
</script>