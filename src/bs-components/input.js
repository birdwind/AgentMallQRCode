import i18n from '@/lang'

const template = `
    <el-input v-model="inputVal"
              :placeholder="placeholder"
              clearable
              :type="type"
              :style="{ width: width }"
              class="filter-item"
              :disabled="disabled"
              :resize="resize"
              :rows="rows"
              @change="onChange($event)"
              @blur="onBlur($event)"
              @focus="$emit('focus', $event)"/>
`

const bsInput = {
  name: 'BsInput',
  template,
  props: {
    value: {
      type: [String, Number]
    },
    placeholder: {
      type: String
    },
    width: {
      type: String,
      default: 'auto'
    },
    type: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    resize: {
      type: String
    },
    rows: {
      type: Number
    }
  },
  data() {
    return {
      inputVal: this.value
    }
  },
  methods: {
    onChange(event) {
      this.$emit('change', event)
    },
    onBlur(event) {
      this.$emit('blur', event)
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

// bsTextArea 獨立一個 template
const templateArea = `
    <el-input v-model="inputVal"
              :placeholder="placeholder"
              clearable
              :type="type"
              :style="{ width: width }"
              class="filter-item"
              :disabled="disabled"
              :resize="resize"
              :rows="rows"
              @change="onChange($event)"
              @focus="$emit('focus', $event)"/>
`

const bsTextArea = {
  name: 'BsTextArea',
  template: templateArea,
  props: {
    value: String,
    placeholder: {
      default: i18n.t('table.memo'),
      type: String
    },
    width: {
      default: 'auto',
      type: String
    },
    disabled: Boolean,
    resize: {
      default: 'both',
      type: String
    },
    rows: {
      default: 6,
      type: Number
    }
  },
  data() {
    return {
      inputVal: this.value,
      type: 'textarea'
    }
  },
  methods: {
    onChange(event) {
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

export default {
  name: 'input',
  components: {
    bsInput,
    bsTextArea
  }
}
