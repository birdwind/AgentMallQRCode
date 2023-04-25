import Vue from 'vue'
import status from './status'
import * as notifyStatus from './notifyStatus'
import * as notifyStatusText from './notifyStatusText'
import * as payOrderStatus from './payOrderStatus'
import * as payOrderStatusText from './payOrderStatusText'
import * as pagination from './pagination'
import * as switchView from './switch'
import button from './button'
import select from './select'
import input from './input'
import dateRangePicker from './dateRangePicker'
import datePicker from './datePicker'
import spinningButton from './spinningButton'
import TimeSelect from './timeSelect'
import link from './link'
import * as ellipsis from './ellipsis'
import spinningButtonNoCounter from './spinningButtonNoCounter'
import spinningButtonWithCounter from './spinningButtonWithCounter'
import Transfer from './transfer'
import TransferPanel from './transferPanel'

Vue.component('bs-status', status.components.bsStatus)
Vue.component('bs-freeze-status', status.components.bsFreezeStatus)
Vue.component('bs-backend-login-status', status.components.bsBackendLoginStatus)
Vue.component('bs-account-status', status.components.bsAccountStatus)
Vue.component('bs-risk-status', status.components.bsRiskStatus)
Vue.component('bs-pay-order-check-paid-process-status', status.components.bsPayOrderCheckPaidProcessStatus)
Vue.component('bs-bank-card-status', status.components.bsBankCardStatus)
Vue.component('bs-bank-card-type', status.components.bsBankCardType)
Vue.component('bs-usb-type', status.components.bsUsbType)

Vue.component('bs-notify-status', notifyStatus.default)
Vue.component('bs-notify-status-text', notifyStatusText.default)

Vue.component('bs-pay-order-status', payOrderStatus.default)
Vue.component('bs-pay-order-status-text', payOrderStatusText.default)

Vue.component('bs-pagination', pagination.default)

Vue.component('bs-switch', switchView.default)

Vue.component('bs-button', button.components.bsButton)
Vue.component('bs-search-button', button.components.searchButton)
Vue.component('bs-add-button', button.components.addButton)
Vue.component('bs-edit-button', button.components.editButton)
Vue.component('bs-submit-button', button.components.submitButton)
Vue.component('bs-cancel-button', button.components.cancelButton)
Vue.component('bs-export-button', button.components.exportButton)
Vue.component('bs-detail-button', button.components.detailButton)
Vue.component('bs-spinning-button', spinningButton)
Vue.component('bs-spinning-button-nocounter', spinningButtonNoCounter)
Vue.component('bs-spinning-button-with-counter', spinningButtonWithCounter)

Vue.component('bs-select', select)
Vue.component('bs-time-select', TimeSelect)

Vue.component('bs-input', input.components.bsInput)
Vue.component('bs-text-area', input.components.bsTextArea)

Vue.component('bs-date-range-picker', dateRangePicker)

Vue.component('bs-date-picker', datePicker)

Vue.component('bs-merchant-link', link.components.bsMerchantLink)
Vue.component('bs-account-link', link.components.bsAccountLink)
Vue.component('bs-ellipsis', ellipsis.default)

Vue.component('bs-transfer', Transfer)
Vue.component('bs-transfer-panel', TransferPanel)
