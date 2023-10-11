/**
 * 获取链接参数，包括search和hash
 * @param {*} param
 * @returns
 */
export function getUrlparam(param: string) {
  const reg = new RegExp('(^|&)' + param + '=([^&]*)(&|$)');
  const r =
    window.location.search.substr(1).match(reg) ||
    window.location.hash
      .substring(window.location.hash.search(/\?/) + 1)
      .match(reg);
  if (r != null) {
    return decodeURIComponent(r[2]);
  }
}
