import { PayOrderStatusOptions } from '@/definitions/options'

export default {
  name: 'BsPayOrderStatus',
  template: `
    <el-tag v-if="getOption(status)" :type="getOption(status).color">
      {{getOption(status).name}}
    </el-tag>
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
    getOption(status) {
      if (this.mode === 'simple') {
        const found = this.PayOrderStatusOptions.find(option => option.id === status)
        if (!found) {
          return {}
        }

        if (found.simple) {
          return found
        } else {
          return this.PayOrderStatusOptions.find(option => option.id === found.redirect)
        }
      } else {
        return this.PayOrderStatusOptions.find(option => option.id === status)
      }
    }
  }
}
