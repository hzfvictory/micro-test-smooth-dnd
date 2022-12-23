<template>
  <div class="app-main-content">
    <div class="app-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
  };
</script>

<style scoped lang="scss">
  .app-main-content {
    position: absolute;
    left: 122px;
    top: 61px;
    width: calc(100% - 122px);
    height: calc(100% - 61px);
    background-color: #F5F5F5;
    padding: 10px;
    overflow: scroll;

    .app-main {
      background-color: #fff;
    }
  }
</style>
