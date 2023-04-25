import { showFailure } from '@/utils/executionMessage'
import { sprintf } from 'sprintf-js'

export default {
  name: 'BsSpinningButton',
  template: `
    <el-button @click="handleClick" size="mini" class="filter-item" :type="type" v-waves>
      <span v-if="isSpinning">{{title}} {{counter / 1000}}s</span>
      <span v-else>{{title}}</span>
      <i v-if="isSpinning" class="el-icon-loading el-icon--right"/>
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
      if (this.isSpinning) {
        showFailure(sprintf(this.$t('button.systemBusy'), this.timeout / 1000))
        return
      }
      this.startTimer()
      this.$emit('click', evt)
    },
    startTimer() {
      this.isSpinning = true
      this.counter = this.timeout

      this.countdown = setInterval(() => {
        this.counter -= 1000
        if (this.counter <= 0) {
          this.isSpinning = false
          clearInterval(this.countdown)
          this.countdown = undefined
        }
      }, 1000)
    }
  }
}
