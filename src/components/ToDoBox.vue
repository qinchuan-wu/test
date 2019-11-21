<template>
  <div>
    <todoinput></todoinput>
    <todolist></todolist>
    <div>
      <h2>这里是异步处理的例子</h2>
      <div>{{data}}</div>
      <button @click="clickme">clickme</button>
      <button @click="getTime">处理时间</button>
      <div>{{time}}</div>
    </div>
    <h2>vue 的路由传递参数</h2>
    <router-link to="/HelloWorld/123">routerLink传递参数</router-link>
    <button @click="gotohelloworld(111)">routerPush来传递参数</button>
    <button @click="namehelloworld(222)">通过name属性来传递参数</button>
    <button @click="goTopath(333)">通过path路径来传递参数</button>
    <!-- 数组排序 -->
    <h2>数组排序</h2>
    <div @click="numOrder">点击排序</div>
    <span v-for="(item,index) in list" :key="index">{{' '+item}}</span>
    <p>最大值：{{max}}</p>
    <p>最小值：{{min}}</p>
    <span>保留两位小数：{{min1}}</span>
  </div>
</template>
<script>
import { resolve, reject, Promise } from "q";
export default {
  data() {
    return {
      list: [1, 7, 9, 8, 5, 4, 3],
      max: "",
      min: "",
      min1: "",
      data: "这里是处理异步",
      time: "2019nian"
    };
  },
  methods: {
    //数组排序
    numOrder() {
      this.list.sort((a, b) => {
        return a - b;
      });
      this.max = this.list[this.list.length - 1];
      this.min = this.list[0];
      this.min1 = this.min.toFixed(2);
    },
    goTopath(id) {
      this.$router.push({
        path: "/HelloWorld",
        query: {
          id
        }
      });
    },
    namehelloworld(id) {
      this.$router.push({
        name: "Hello",
        params: {
          id: id
        }
      });
    },
    gotohelloworld(id) {
      this.$router.push(`/HelloWorld/${id}`);
    },
    async clickme() {
      await this.clickyou().then(res => {
        this.clickher();
      });
    },
    clickyou() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("2s 之后");
          this.data = "2s 之后 ";
          resolve();
        }, 5000);
      });
    },
    clickher() {
      setTimeout(() => {
        this.data = "2s 之前";
        let timeer = new Date();

        console.log("2s 之前");
      }, 2000);
    },
    getTime() {
      var d = new Date(1477386005 * 1000);
      Date.prototype.toLocaleString = function() {
        return (
          this.getFullYear() +
          "年" +
          (this.getMonth() + 1) +
          "月" +
          this.getDate() +
          "日"
        );
        //this.getFullYear() + "年" + (this.getMonth() + 1) + "月" + this.getDate() + "日 " + this.getHours() + "点" + this.getMinutes() + "分" + this.getSeconds() + "秒";
      };
      this.time = d.toLocaleString();
    }
  }
};
</script>

