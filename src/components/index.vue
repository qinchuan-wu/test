<template>
  <div>
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
  </div>
</template>
<script>
import baseLayout from "../component/baseLayout";
import currentUser from "../component/currentUser";
export default {
  components: {
    baseLayout,
    currentUser
  }
};
</script>
