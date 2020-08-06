<template>
  <div>
    <div class="headers">
      <van-icon class="icons" id="icon" name="plus" />
      <van-search
        id="inputs"
        v-model="value"
        shape="round"
        background="#fff"
        placeholder="请输入搜索关键词"
      />
      <van-icon name="chat-o" id="icons" color="#07c160" />
    </div>
    <div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img class="imgs" src="/image/lb.jpg" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img class="imgs" src="/image/lbb.jpg" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>

<style>
.imgs {
  width: 80%;
}
.my-swipe .van-swipe-item {
  color: #fff;

  text-align: center;
  background-color: #fff;
}
.headers {
  width: 100%;
  height: 56px;
  position: relative;
}
#icon {
  color: #04aa7c;
  font-size: 26px;
  font-weight: 900;
  position: absolute;
  left: 3%;
  margin-top: 14px;
}
#icons {
  color: #04aa7c;
  font-size: 26px;
  font-weight: 900;
  position: absolute;
  right: 3%;
  margin-top: 14px;
}
.van-search {
  width: 75%;

  height: 40px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>