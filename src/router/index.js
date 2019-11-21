import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ToDoBox from '@/components/ToDoBox'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/',
      component: index
    },
    {
      path: '/ToDoBox',
      component: ToDoBox
    },
    {
      path: '/HelloWorld',
      name:"Hello",
      component: HelloWorld
    },
    {
      path: '/HelloWorld/:id',
      name:"Hello",
      component: HelloWorld
    }
  ]
})
