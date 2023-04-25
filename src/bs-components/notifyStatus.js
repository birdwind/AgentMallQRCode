import { NotifyStatusOptions } from '@/definitions/options'

export default {
  name: 'BsNotifyStatus',
  template: `
    <el-tag v-if="NotifyStatusOptions[status]" :type="NotifyStatusOptions[status].color">
      {{NotifyStatusOptions[status].name}}
    </el-tag>
  `,
  props: {
    status: Number
  },
  data() {
    return {
      NotifyStatusOptions
    }
  }
}
