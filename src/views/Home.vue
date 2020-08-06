<template>
  <div class="home">
    <heads></heads>
    <div class="he">
      <div class="one" v-for="(ss) in sz" :key="ss.index">
        <contents :ss="ss"></contents>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>
<script>
import contents from "@/components/content.vue";
import tabbar from "@/components/tabbar.vue";
import heads from "@/components/heads.vue";
export default {
  name: "Home",
  data() {
    return {
      sz: []
    };
  },
  components: {
    heads,
    tabbar,
    contents
  },
  created() {
    this.axios
      .get("https://mock.yonyoucloud.com/mock/13977/api/index")
      .then(res => {
        this.sz = res.data.result.data;
        console.log(res.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
<style  scoped>
.one {
  width: 45%;
  /* border: 1px solid forestgreen; */
  float: left;
  margin-left: 12px;
  margin-top: 10px;
}
.he {
  height: 500px;
}
</style>