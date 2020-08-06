<template>
  <div>
    <van-image width="100" class="imgs" height="100" :src="ss.albums[0]" />

    <div class="fonts">
      <span class="uname">{{ss.username}}</span>

      <span class="like">
        <van-icon name="like-o" />
        {{ss.like}}
      </span>
      <br />
      <span class="nr">{{ss.imtro}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["ss"]
};
</script>

<style>
.uname {
  display: inline-block;
  margin-left: 12px;
  margin-top: 7px;
}
span {
  font-size: 10px;
}
.imgss {
  width: 30px;
}
.nr {
  display: inline-block;
  width: 92%;
  margin: 10px 11px;
}
.like {
  display: inline-block;
  float: right;
  margin-right: 13px;
  margin-top: 7px;
}
.fonts {
  width: 90%;

  background: #f5f5f5;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
}
.van-image__error,
.van-image__img,
.van-image__loading {
  width: 146px !important;
  /* margin: 0 auto !important; */
  margin-left: 11px;
  border-radius: 10px;
  height: 126px !important;
}
</style>