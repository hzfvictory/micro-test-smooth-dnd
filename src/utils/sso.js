import { ssoLoginUrl, client_id, loginRouter } from '@/settings.js';
export function getRedirectUrl() {
  return encodeURIComponent(`${window.location.origin}${loginRouter}`);
}
export function createRedirectUri() {
  return `${ssoLoginUrl}?redirect_uri=${getRedirectUrl()}&client_id=${client_id}&response_type=code&state=${window.location.pathname}${window.location.search}`;
}

export function createLogoutUrl() {
  return 'https://sso.zhangyue-inc.com/sso/logout/';
}
