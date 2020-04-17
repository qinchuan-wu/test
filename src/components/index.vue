<template>
  <div>
    <div class="input1">
      <div class="input2">
        <span>输入姓名：</span>
      </div>
      <el-input ref="d1" v-model="input1" placeholder="请输入内容"></el-input>
      <el-input ref="d2" v-model="input2" placeholder="请输入内容"></el-input>
    </div>
    <button @click="blur">提交</button>
    <br />
    <br />
    <br />
    <div class="content">
      <div class="d1">
        <span>11111</span>
      </div>
      <div class="d2">
        <span>2222</span>
      </div>
      <div class="d3">
        <span>3333</span>
      </div>
    </div>
    <!-- 具名插槽 -->
    <base-Layout>
      <template slot="header">
        <h1>Here might be a page title</h1>
      </template>
      <template v-slot:default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>
      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </base-Layout>
    <!-- 作用域插槽 -->
    <current-user>
      <template v-slot:default="name">
        <p v-for="(item,index) in name.user" :key="index">{{item}}</p>
      </template>
    </current-user>
    <div>新增加的div</div>
    <div>这里是增加的dev分支</div>
    <div>这里是冲突之2</div>
    <div>这里是测试上传代码到远程仓库</div>
    <input type="text" ref="id" />
    <button @click="clickme">点击获得焦点</button>
  </div>
</template>
<script>
import baseLayout from "../component/baseLayout";
import currentUser from "../component/currentUser";
export default {
  components: {
    baseLayout,
    currentUser
  },
  mounted() {
    // this.clickme();
    this.getAddress()
  },
  data() {
    return {
      input1: "",
      input2: ""
    };
  },
  methods: {
    getAddress() {
      if (navigator.geolocation) {
        var n = navigator.geolocation.getCurrentPosition(function(res) {
          console.log("11111",res); // 需要的坐标地址就在res中
        });
      } else {
        alert("该浏览器不支持定位");
      }
    },
    clickme() {
      this.$refs.id.focus();
    },
    blur(event) {
      if (this.input1 == "") {
        alert("名字不能为空");
        return;
      }
      if (this.input2 == "") {
        alert("密码不能为空");
        return;
      }
    }
  }
};
</script>
<style lang="">
.input1 {
  width: 400px;
  display: flex;
  margin: 0 auto;
}
.input2 {
  width: 100px;
}
.content {
  width: 300px;
  height: 500px;
  background-color: #dddddd;
  margin: auto;
  display: flex;
}
.d1 {
  width: 100px;
  height: 100px;
  background-color: blue;
  text-align: right;
}
.d2 {
  width: 100px;
  height: 100px;
  background-color: green;
}
.d3 {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
