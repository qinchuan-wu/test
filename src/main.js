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
    list: []
  },
  //读状态中的值
  getters: {
    list: (state) => {

      console.log(state.list)
      return state.list;
    }
  },
  //修改状态
  mutations: {
    add: (state, value) => {
      //添加
      console.log('准备添加数据' + value)
      state.list.push(value)
    },
    delete: (state, index) => {
      //移除
      console.log('准备移除数据')
      state.list.splice(index, 1)
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: myStore,
  components: { App },
  template: '<App/>'
})
