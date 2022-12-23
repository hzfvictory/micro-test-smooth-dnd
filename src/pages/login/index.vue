<template>
  <div class='login-container' v-loading="loading">
    <el-empty v-if="isShowEmpty" description="出错了..." :image-size="300"></el-empty>
  </div>
</template>

<script>
import { client_id } from '@/settings.js';
import { loginBySso } from '@/api/api';
import { getRedirectUrl } from '@/utils/sso';

export default {
  name: 'Login',
  data() {
    return {
      loading: false,
      code: '',
      isShowEmpty: false,
    };
  },
  created() {
    this.loading = true;
    const { code } = this.$route.query;
    if (!code) return this.$router.push('/');
    this.code = code;
    this.login();
  },
  methods: {
    async login() {
      const params = {
        redirect_uri: decodeURIComponent(getRedirectUrl()),
        code: this.code,
        client_id,
      };
      const { code, msg } = await loginBySso(params);
      this.loading = false;
      const { state } = this.$route.query;
      if (code === 0) return this.$router.push(state || '/');
      this.isShowEmpty = true;
      msg && this.$message.error(msg);
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
</style>
