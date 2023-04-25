export default {
  name: 'BsTimeSelect',
  template: `
    <el-time-picker
      :clearable="clearable === undefined ? false : clearable"
      :is-range="true"
      range-separator="-"
      :start-placeholder="$t('dateTimePicker.startTime')"
      :end-placeholder="$t('dateTimePicker.endTime')"
      v-model="inputValue"/>
  `,
  props: ['value', 'clearable'],
  data() {
    let value = this.value
    if (!value || !Array.isArray(value)) {
      value = null
      this.$emit('input', value)
    }
    return {
      inputValue: value
    }
  },
  watch: {
    inputValue(val) {
      this.$emit('input', val)
    },
    value(val) {
      this.inputValue = val
    }
  }
}
