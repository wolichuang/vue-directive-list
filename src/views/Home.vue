<!--
 * @Description:
 * @Author: Chuang Li
 * @Date: 2021-07-10 15:33:46
 * @LastEditTime: 2021-07-10 16:45:00
 * @LastEditors: Chuang Li
-->
<template>
  <div class="home">
    <div class="box">
      <div v-copy> 单击复制 </div>
      <div v-copy.dblclick> 双击复制 </div>
      <div v-copy.icon> icon复制 </div>
    </div>

    <div class="box">
      <button v-longpress="longpress">长按</button>
    </div>

    <div v-draggable> 支持拖拽的元素 </div>

    <div class="box">
      <button v-backtop>回到顶部</button>
    </div>

    <div class="box">
      <img v-LazyLoad="imageUrl"
           :src="imageUrl"
           width="300px"
           height="200px" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      imageUrl: 'https://source.unsplash.com/dnL6ZIpht2s/300x300'
    }
  },
  methods: {
    longpress () {
      alert('长按指令生效')
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  border:1px solid #ededed;
}
</style>
