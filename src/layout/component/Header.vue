<template>
  <div class="header-bar">
    <div class="logo">
      中台
    </div>
    <div class="user-info">
      <span class="user-name">userName</span>
      <el-dropdown>
        <span class="el-dropdown-link">
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!--        <span class="logout">退出</span>-->
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped lang="scss">
  .header-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    height: 60px;
    background-color: #fff;
    box-shadow: 1px -2px 5px 0px #888888;

    .logo {
      font-weight: 600;
      font-size: 20px;
      display: flex;
      align-items: center;
    }

    .user-info {
      margin-right: 15px;
    }
  }
</style>
