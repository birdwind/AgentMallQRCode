import { PayOrderStatusOptions } from '@/definitions/options'
// <span :style="color: getOption(status).color">

export default {
  name: 'BsPayOrderStatusText',
  template: `
    <span :style="{color: getOption(status).hex}">
      {{getStatusName()}}
    </span>
  `,
  props: {
    mode: {
      type: String,
      default: 'full'
    },
    status: Number
  },
  data() {
    return {
      PayOrderStatusOptions
    }
  },
  methods: {
    getStatusName() {
      let newStatus = this.status
      // if (newStatus === 5 || newStatus === 4) {
      //   newStatus = 4
      // }
      // 前端對比後端狀態
      // 0 : 0
      // 3 : 3
      // 4 : 4
      // 5 : 5
      // 6 : 6, 7, 8, 9, 10, 11, 12
      // 13 : 13
      if (newStatus >= 6 && newStatus <= 12) {
        // newStatus = 3
        newStatus = 6
      }
      return this.getOption(newStatus).name
    },
    getOption(status) {
      return this.PayOrderStatusOptions.find(option => {
        return option.id === status
      })
    }
  }
}
