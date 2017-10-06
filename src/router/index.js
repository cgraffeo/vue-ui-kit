import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '../components/Home.vue'
import Category from '../components/Category.vue'
import Create from '../components/Create.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // }
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Category/:name',
      name: 'show',
      component: Category,
      children: [
        {
          path: 'pokemons/new',
          component: Create
        }
      ]
    }
  ]
})

