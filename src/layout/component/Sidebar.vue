<template>
  <div class="sidebar">
    <el-menu
      default-active="/product-list"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      router
    >
      <el-menu-item :index="item.path+'-list'" v-for="item of menuList">
        <i :class="['iconfont',item.meta.icon]"></i>
        <span slot="title">{{item.meta.title}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  import { asyncRoutes } from '@/router';

  export default {
    data() {
      return {
        menuList: asyncRoutes,
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    },
  };
</script>

<style scoped lang="scss">
  .sidebar {
    position: absolute;
    width: 122px;
    height: calc(100% - 61px);
    left: 0;
    top: 61px;
    box-shadow: -1px 4px 5px 0px #b9b9b9
  }

  ::v-deep {
    .el-menu {
      border-right: none;

      i {
        margin-right: 10px;
      }
    }
  }
</style>
