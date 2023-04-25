import { showFailure } from '@/utils/executionMessage'
import { sprintf } from 'sprintf-js'

export default {
  name: 'BsSpinningButtonWithCounter',
  template: `
    <el-button @click="handleClick" size="mini" class="filter-item" :type="type" v-waves>
    <span>{{title}} {{timer.time/1000}} s</span>
      <i class="el-icon-loading el-icon--right"/>
    </el-button>
  `,
  props: {
    title: {
      default: '',
      type: String | Number
    },
    type: {
      default: 'primary',
      type: String
    },
    timeout: {
      default: 30 * 1000,
      type: Number
    },
    accountId: {
      default: null,
      type: Number | String
    },
    timers: {
      default: null,
      type: Array
    },
    timer: {
      default: null,
      type: Object
    }
  },
  data() {
    return {
      isSpinning: false,
      counter: 0,
      countdown: undefined
    }
  },
  methods: {
    handleClick(evt) {
      if (this.timer.time > 0) {
        showFailure(sprintf(this.$t('button.systemBusy'), this.timeout / 1000))
        return
      }
      this.$emit('click', evt)
    }
  }
}
