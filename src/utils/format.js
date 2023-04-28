import moment from 'moment'

export function formatDateAsStart(date) {
  return moment(date).format('YYYY-MM-DD 00:00:00')
}

export function formatDateAsEnd(date) {
  return moment(date).format('YYYY-MM-DD 23:59:59')
}

export function formatDate(date) {
  return moment(date).format('YYYY-MM-DD HH:mm:ss')
}

/**
 * 2019/09/17 下午11:00:00 => 2019/09/17 23:00:00
 * @param time
 * @returns {string}
 */
export function parseTimeToDateTimeString(time) {
  const newTime = new Date(time)
  const format = '{y}-{m}-{d} {h}:{i}:{s}'
  const formatObj = {
    y: newTime.getFullYear(),
    m: newTime.getMonth() + 1,
    d: newTime.getDate(),
    h: newTime.getHours(),
    i: newTime.getMinutes(),
    s: newTime.getSeconds()
  }

  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if ((key === 'h' || key === 'i' || key === 's') && (result.length > 0 && value < 10)) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}
