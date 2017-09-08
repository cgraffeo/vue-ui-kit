<template>
 <div class="container">
    <h1> Real identities of Super Heroes! </h1>
    <ul class="list-group">
      <li v-for="hero in heroes">
        {{ hero | snitch }}
      </li>
    </ul>
 </div>
</template>
<script>
  export default {
    name: 'CustomArrayFilter',
    // Vue.filter('snitch', function (hero) {
    //   return hero.secretId + ' is '
    //   + hero.firstname + ' '
    //   + hero.lastname + ' in real life!'
    // }),
    data() {
      return {
        heroes: [
          {
            firstname: 'Bruce',
            lastname: 'Wayne',
            secretId: 'Batman'
          },
          {
            firstname: 'Clark',
            lastname: 'Kent',
            secretId: 'Superman'
          },
          {
            firstname: 'Jay',
            lastname: 'Garrick',
            secretId: 'Flash'
          },
          {
            firstname: 'Peter',
            lastname: 'Parker',
            secretId: 'Spiderman'
          }
        ]
      }
    }

  }
</script>