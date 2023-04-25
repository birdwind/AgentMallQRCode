import { NotifyStatusOptions } from '@/definitions/options'

export default {
  name: 'BsNotifyStatusText',
  // template: `
  //   <span :style="{color: shouldShowStatus(status) ? NotifyStatusOptions[status].hex : '#AAAAAA'}">
  //      {{shouldShowStatus(status) ? NotifyStatusOptions[status].name : ''}}
  //   </span>
  // `,
  template: `
    <span :style="{color: getColor()}">
       {{getText()}}
    </span>
  `,
  props: {
    status: Number
  },
  data() {
    return {
      NotifyStatusOptions
    }
  },
  methods: {
    isStatusEmpty() {
      if (this.status === undefined || this.status === null || this.status === '') {
        return true
      }
      const notify = NotifyStatusOptions[this.status]
      if (!notify) {
        return true
      }
      return false
    },
    getColor() {
      const defaultColor = '#AAAAAA'
      if (this.isStatusEmpty()) {
        return defaultColor
      }
      const notify = NotifyStatusOptions[this.status]

      if (!notify.hex) {
        return defaultColor
      }

      return notify.hex
    },
    getText() {
      const defaultText = ''
      if (this.isStatusEmpty()) {
        return defaultText
      }
      const notify = NotifyStatusOptions[this.status]

      if (!notify.name) {
        return defaultText
      }
      return notify.name
    },
    shouldShowStatus(status) {
      if (status === undefined || status === null || status === '') {
        return false
      } else {
        return true
      }
    }
  }
}
