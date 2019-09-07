<template>
  <div id="app">
    <appheader></appheader>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/comment">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/merchant">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from "./components/header/header";
import axios from "axios";
export default {
  name: "App",
  methods: {
    get() {
      axios.get("/post").then(res => {
        console.log(res);
      });
    }
  },
  created() {
    this.get();
  },
  components: {
    appheader: header
  }
};
</script>

<style>
.tab {
  display: flex;
  height: 40px;
  border-bottom: 1px solid rgb(7, 17, 27,0.1)
}
.tab-item {
  flex: 1;
  text-align: center;
  line-height: 40px;
}
.tab-item a {
  text-decoration: none;
  font-size:14px;
}
.router-link-active{
  color: rgb(240, 20, 20)
}
</style>
