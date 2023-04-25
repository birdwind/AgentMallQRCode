import { trancateText } from '@/utils/string'

const template = `
    <div>
      <span v-if="value && value.length > size">
        <el-tooltip placement="top">
          <div slot="content">{{value}}</div>
          <span>{{trancate(value)}}</span>
        </el-tooltip>
      </span>
      <span v-else>{{value}}</span>
    </div>
  `
export default {
  name: 'BsEllipsis',
  template,
  props: {
    value: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 20
    }
  },
  methods: {
    trancate(value) {
      return trancateText(value, this.size)
    }
  }
}
