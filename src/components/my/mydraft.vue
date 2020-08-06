<template>
  <div>
    <div class="toub">
      <van-icon id="tb" @click="$router.go(-1)" name="arrow-left" />
      <div class="wz">我的草稿</div>
    </div>
    <div style=" position: relative;">
      <img class="imgg" src="/image/sj.png" alt width="100" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
.imgg {
  position: absolute;
  left: 50%;
  top: 43%;
  transform: translate(-50%, 119%);
}
.wz {
  text-align: center;
  margin-top: -40px;
  /* font-weight: 400; */
  font-size: 17px;
}
#tb {
  font-size: 25px;
  line-height: 52px;
  text-indent: 7px;
}
.toub {
  width: 100%;
  height: 40px;
}
</style>