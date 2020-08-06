<template>
  <div>
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#888">
      <van-tabbar-item icon="wap-home">
        <router-link tag="span" to="/">首页</router-link>
      </van-tabbar-item>

      <van-tabbar-item active-color="#07c160" inactive-color="#888" icon="like">
        <router-link tag="span" to="/collect">收藏</router-link>
      </van-tabbar-item>

      <van-tabbar-item icon="underway">
        <router-link tag="span" to="/shopping">购物单</router-link>
      </van-tabbar-item>

      <van-tabbar-item icon="manager">
        <router-link tag="span" to="/my">我的</router-link>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return { active: 0 };
  }
};
</script>

<style>
/* .aaa {
  color: green !important;
} */
</style>