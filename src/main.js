// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'
Vue.use(ElementUI);
Vue.use(Vuex);
import ToDoList from '@/components/ToDoList'
import ToDoItem from '@/components/ToDoItem'
import ToDoInput from '@/components/ToDoInput'
import currentUser from '@/component/currentUser'



Vue.component('todoinput', ToDoInput)
Vue.component('todoitem', ToDoItem)
Vue.component('todolist', ToDoList)
Vue.component('currentUser', currentUser)

//数据仓库的初始化
const myStore = new Vuex.Store({
  //初始化状态
  state: {
    list: ["0"],
    count: 0,
    todos: [{
        id: 1,
        text: ".....",
        done: true
      },
      {
        id: 2,
        text: ".....",
        done: false
      }
    ]
  },
  //读状态中的值
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo =>todo.done)
    },
    doneTodosCount:(state,getters)=>{
      return getters.doneTodos.length
    },
    //通过方法访问
    getTodoById:(state)=>(id)=>{
      return state.todos.find(todo=>todo.id===id)
    }

  },
  //修改状态state里面的值
  mutations: {
    increment (state)  {
      //变更状态
      console.log('变更状态')
      state.count++
    },
    delete: (state, index) => {
      //移除
      console.log('准备做减得操作')
     state.count-=index
    }
  },
  //actions
  actions:{
    increment({commit}){
      commit('increment')
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: myStore,
  components: {
    App
  },
  template: '<App/>'
})
