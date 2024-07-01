/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */

// 去掉原先的用户名验证，原来只能是 admin 和 editor，现在改成了小写字母
export function validUsername(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}
