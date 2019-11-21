<template>
  <div>
    <span>
        <slot v-bind:user="user">{{user[0]}}</slot>
      </span>
  </div>
</template>
<script>
export default {
  data(){
    return{
      user:["张三","张四","张五","张六"]
    }
  }
}
</script>
