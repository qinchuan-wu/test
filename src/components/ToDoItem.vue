<template>
  <ol>
    <li v-for="(item,index) in this.$store.getters.list" :key="index">
      <span>{{item}}</span>
      <button @click="del(index)">delete</button>
    </li>
  </ol>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    del(index) {
      this.$store.commit("delete", index);
    }
  }
};
</script>

