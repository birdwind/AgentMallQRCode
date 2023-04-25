export default {
  name: 'BsSwitch',
  template: `
    <el-switch v-model="inputVal"
               :active-value="1" :inactive-value="0"
               active-color="#13ce66" inactive-color="#ff4949"/>
  `,
  props: ['value'],
  data() {
    return { inputVal: this.value }
  },
  watch: {
    inputVal(val) {
      this.$emit('input', val)
    },
    value(val) {
      this.inputVal = val
    }
  }
}
