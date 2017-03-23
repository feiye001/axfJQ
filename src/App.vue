<template>
<div id="app">
 <router-view></router-view>
  <div class="footer">
    <router-link to="/">首页</router-link>
    <router-link to="/market">闪送超市</router-link>
    <router-link to="/cart">购车</router-link>
    <router-link to="/mine">我的</router-link>
  </div>
  <div class="footer1"></div>
</div>
</template>

<script>
  require("../static/reset.css")
  require("../static/app.css")
  export default {
    name: 'app'
  }
</script>
<style>

</style>
