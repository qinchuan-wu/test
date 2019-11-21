<template>
  <div>
    <h1>待做事项列表</h1>
    <input v-model="myValue" type="text" placeholder="请输入代做事项" />
    <button @click="addToList()">add</button>
  </div>
</template>
<script>
export default {
  data: function() {
    return { myValue: "" };
  },
  methods: {
    addToList: function() {
      if (this.myValue == "") {
        alert("请输入你要做的事项！");
      } else {
        //通知数据仓库触发add操作
        this.$store.commit("add", this.myValue);
        this.myValue = "";
      }
    }
  }
};
</script>

