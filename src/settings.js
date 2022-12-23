module.exports = {
  title: 'Vue Element Admin',

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: true,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production',
  ssoLoginUrl: 'http://sso.zhangyue-inc.com/oauth/authorize',
  /**
   * @type {string}
   * TODO：需要开发者做的事
   * client_id在申请接入sso登录时由平台研发部提供
   * 此时还需要把系统的redirect_uri提供给平台研发部
   * 例如：http://127.0.0.1:8080/login/sso
   */
  client_id: '',
  /**
   * @type {number}
   * TODO：需要开发者做的事
   * system_id在项目初始化后由数据研发部提供
   */
  system_id: null,
  loginRouter: '/login/sso',
};
