export default {
  name: 'BsSelect',
  template: `
    <el-select v-model="inputVal"
               :placeholder="placeholder || $t('status.allStatus')"
               :clearable="clearable"
               :multiple="multiple"
               class="filter-item"
               :allow-create="allowCreate"
               :filterable="filterable"
               :disabled="disabled"
               @input="$emit('input', $event)"
               @change="$emit('change', $event)"
               :style="{width: width}">
      <el-option v-for="status in options"
                 :key="status.id"
                 :label="status.name"
                 :value="status.id"/>
    </el-select>
  `,
  props: {
    value: {},
    placeholder: {
      type: String
    },
    options: {
      type: Array
    },
    width: {
      type: String
    },
    clearable: {
      type: Boolean,
      default: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    allowCreate: {
      type: Boolean,
      default: false
    },
    filterable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      inputVal: this.value
    }
  },
  methods: {
    onChange(event) {
      console.log(event)
      this.$emit('change', event)
    }
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
