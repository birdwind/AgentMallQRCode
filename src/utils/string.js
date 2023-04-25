import is from 'is_js'

/**
 * @description 過長字串變成...
 *
 * @param {string} [val='']
 * @param {*} len
 * @returns
 */
export const trancateText = (val = '', len) => {
  if (!len) {
    return val
  }
  // 如果字數超過多少...
  if (val.length > len) {
    return `${val.substring(0, len)}...`
  } else {
    return val
  }
}

/**
 * @description 判斷是否為空值
 *
 */
export const str = {
  // 是否為空值
  isEmpty(o) {
    if (is.undefined(o) || is.null(o) || is.empty(o) || o.length === 0) {
      return true
    }
    return false
  }
}

const replaceTable = {
  alipayAmount: 'PayAmount'
  // orderSuccessRate: 'successRate'
}

export const stringReplacer = (string) => {
  const replaceTableKey = Object.keys(replaceTable)
  const included = string ? replaceTableKey.find(o => string.includes(o)) : undefined
  if (included === undefined) {
    return string
  } else {
    const tranpiled = string.replace(new RegExp(included, 'g'), replaceTable[included])
    return tranpiled
  }
}
