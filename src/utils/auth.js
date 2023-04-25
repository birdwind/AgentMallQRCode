import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

let _aclList

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

/**
 * @description 判斷是否有 acl 功能
 *
 * @param {*} acl
 * @returns
 */
export function hasAcl(acl) {
  return !!_aclList.find(a => a === acl)
}
