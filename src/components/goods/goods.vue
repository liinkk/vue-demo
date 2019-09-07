<template>
  <div class="main">
    <div class="left">
      <div class="left-item">
        <a href="#">特色粥品</a>
      </div>
      <div class="left-item">
        <a href="#">单人特色套餐</a>
      </div>
      <div class="left-item">
        <a href="#">特色粥品</a>
      </div>
      <div class="left-item">
        <a href="#">特色粥品</a>
      </div>
      <div class="left-item">
        <a href="#">特色粥品</a>
      </div>
      <div class="left-item">
        <a href="#">特色粥品</a>
      </div>
      <div class="left-item">
        <a href="#">特色粥品</a>
      </div>
      <div class="left-item">
        <a href="#">特色粥品</a>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="">
.main {
  display: flex;
  width: 100%;
}
.left {
  flex: 1;
}
.right {
  flex: 3;
}
.left-item {
  width: 120px;
  height: 54px;
  background-color: #eaeaea;
  font-size: 18px;
  box-sizing: border-box;
  padding: 0 12px;
  border-bottom: 1px solid #ccc;
}
.left-item > a {
  text-decoration: none;
  color: rgb(77, 85, 93);
  display: inline-block;
  height: 100%;
  text-align: center;
  line-height: 24px;
  font-weight: 500
}
</style>