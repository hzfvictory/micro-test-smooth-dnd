<template>
  <div class="app-wrapper">
    <Header />
    <Sidebar />
    <AppMain />
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Header from './component/Header';
  import Sidebar from './component/Sidebar';
  import AppMain from './component/AppMain';

  export default {
    name: 'Layout',
    components: {
      Header,
      Sidebar,
      AppMain
    },
    data() {
      return {
        appId: '',
      };
    },
    computed: {
      ...mapState({
        sidebar: (state) => state.app.sidebar,
      }),
      userName() {
        return ''; // Todo 待补充 (当前用户)
      },
    },
    methods: {},
  };
</script>

<style lang="scss" scoped>

  .app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
  }

</style>
