export default {
  name: 'BsDatePicker',
  template: `
    <el-date-picker
      v-model="inputValue"
      :type="type || 'date'"
      :clearable="clearable === undefined ? false : clearable"
      :placeholder="(placeholder || '') + $t('dateTimePicker.startTime')"
      :picker-options="pickerOptions"
      :editable="editable"
    />
  `,
  props: ['value', 'clearable', 'placeholder', 'type', 'disabledDate', 'editable'],
  data() {
    let value = this.value
    if (!value) {
      value = null
      this.$emit('input', value)
    }
    return {
      inputValue: value,
      pickerOptions: {
        disabledDate: this.disabledDate
      }
    }
  },
  watch: {
    inputValue(val) {
      this.$emit('input', val)
      this.$emit('change', val)
    },
    value(val) {
      this.inputValue = val
    }
  }
}
