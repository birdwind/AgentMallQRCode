import i18n from '@/lang'
import { Message } from 'element-ui'

export function showSuccess(message) {
  Message({
    message: message || i18n.t('confirmDialog.executionSucceeded'),
    type: 'success',
    duration: 5 * 1000
  })
}

export function showFailure(message) {
  Message({
    message: message
      ? `${i18n.t('confirmDialog.executionFailed')} (${message})`
      : i18n.t('confirmDialog.executionFailed'),
    type: 'error',
    duration: 5 * 1000
  })
}
