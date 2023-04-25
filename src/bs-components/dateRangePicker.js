export default {
  name: 'BsDateRangePicker',
  template: `
    <el-date-picker
      v-model="inputValue"
      :type="type || 'daterange'"
      :editable="editable === undefined ? true : editable"
      :clearable="clearable === undefined ? false : clearable"
      :start-placeholder="(placeholder || '') + $t('dateTimePicker.startTime')"
      :end-placeholder="(placeholder || '') + $t('dateTimePicker.endTime')"
      :default-time="type === 'datetimerange' ? ['00:00:00', '23:59:59'] : ['00:00:00', '00:00:00']"
      @change="handleChange"
    />
  `,
  props: ['value', 'clearable', 'placeholder', 'type', 'editable'],
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
  },
  methods: {
    handleChange(evt) {
      this.$emit('change', evt)
    },
    handleBlur(evt) {
      this.$emit('blur', evt)
    }
  }
}
