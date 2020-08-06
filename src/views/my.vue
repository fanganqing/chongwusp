<template>
  <div>
    <div>
      <div class="tou">
        <div class="sz">
          <van-icon id="icosn" name="setting" />
        </div>
      </div>
      <div class="admin"></div>
      <div class="gongn">
        <p style="font-weight: 900;font-size: 20px; margin-left: 14px;">功能列表</p>
        <div class="contents">
          <div class="content">
            <router-link tag="div" to="/mydraft">
              <span>
                <van-icon class="tub" name="todo-list" />我的草稿
                <van-icon
                  style="float: right;margin-right: 13px; font-size: 12px; margin-top: 12px;color: #888"
                  name="arrow"
                />
              </span>
            </router-link>
          </div>

          <div class="content">
            <router-link tag="div" to="/useragreement">
              <span>
                <van-icon class="tub" name="bill" />用户协议
                <van-icon
                  style="float: right;margin-right: 13px; font-size: 12px; margin-top: 12px;color: #888"
                  name="arrow"
                />
              </span>
            </router-link>
          </div>

          <div class="content">
            <router-link tag="div" to="/policy">
              <span>
                <van-icon class="tub" name="smile" />隐式政策
                <van-icon
                  style="float: right;margin-right: 13px; font-size: 12px; margin-top:12px;color: #888"
                  name="arrow"
                />
              </span>
            </router-link>
          </div>
          <div class="content">
            <span>
              <van-icon class="tub" name="label" />意见反馈
              <van-icon
                style="float: right;margin-right: 13px; font-size: 12px; margin-top: 12px;color: #888"
                name="arrow"
              />
            </span>
          </div>

          <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell>

          <van-popup v-model="show" closeable position="bottom" :style="{ height: '30%' }" />-->

          <div class="content">
            <span>
              <van-icon class="tub" name="phone-circle" />联系我们
              <van-icon
                style="float: right;margin-right: 13px; font-size: 12px; margin-top: 12px;color: #888"
                name="arrow"
              />
            </span>
          </div>
          <div class="content">
            <van-cell tag="span" @click="showPopup">
              <span class="fx">
                <van-icon class="tub" name="share" />分享app
                <van-icon style="    float: right;  margin-top: 3px;" class="asd" name="arrow" />
              </span>
            </van-cell>
            <van-popup v-model="show" closeable position="bottom" :style="{ height: '20%' }">sss</van-popup>
          </div>
        </div>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar.vue";
export default {
  components: {
    tabbar
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    }
  },
  mounted() {
    // document.getElementsByClassName("van-cell")[0].removeClass();
  }
};
</script>

<style>
.asd {
  /* float: right;
  margin-right: -11px;
  margin-top: -14px;
  font-size: 25px;
  color: black; */
}
.ssss {
  width: 100%;
  height: 20px;
  border: 1px solid green;
}
.fx {
  margin-left: -10px;
}
.tub {
  position: relative;
  top: 1px;
  margin-left: 10px;
  margin-right: 10px;
}
.content {
  width: 100%;
  height: 40px;
  margin: 0 auto;
  line-height: 41px;
  background: #fbfbfb !important;
  border-radius: 10px;
  margin-top: 16px;
}
.content:nth-child(1) {
  margin-top: 0;
}
.contents > .content > .van-cell {
  width: 100%;
  height: 40px;
  margin: 0 auto;
  line-height: 19px;
  background: #fbfbfb !important;
  border-radius: 10px;
  margin-top: 9px;
}
.contents {
  height: 330px;
  width: 90%;

  /* border: 1px solid silver; */
  margin: 0 auto;

  border-radius: 10px;
  margin-bottom: 52px;
}
.gongn {
  width: 100%;
  border-bottom: 1px solid magenta;
}
.admin {
  width: 100%;
  height: 330px;
  border-bottom: 1px solid forestgreen;
}
.tou {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid firebrick;
}
#icosn {
  font-size: 25px;
  line-height: 32px;
}
.sz {
  margin-left: 15px;
  float: left;
  margin-top: 6px;

  border-radius: 50%;
  width: 32px;
  height: 32px;
  text-align: center;
  background: #f3f3f3;
}
</style>