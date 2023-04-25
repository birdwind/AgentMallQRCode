import Emitter from 'element-ui/src/mixins/emitter'
import Locale from 'element-ui/src/mixins/locale'
import Migrating from 'element-ui/src/mixins/migrating'
import TransferPanel from 'element-ui/packages/transfer/src/transfer-panel.vue'
import ElButton from 'element-ui/packages/button'
import { deepClone, generateUUID } from '@/utils'

export default {
  name: 'BsTransfer',
  template: `
    <div class="el-transfer">
    <transfer-panel
      v-bind="$props"
      ref="leftPanel"
      :data="sourceData"
      :title="titles[0] || t('el.transfer.titles.0')"
      :default-checked="leftDefaultChecked"
      :placeholder="filterPlaceholder || t('el.transfer.filterPlaceholder')"
      @checked-change="onSourceCheckedChange"
      style="text-align: start;">
      <slot name="left-footer"></slot>
    </transfer-panel>
    <div class="el-transfer__buttons">
      <el-button
        type="primary"
        :class="['el-transfer__button', hasButtonTexts ? 'is-with-texts' : '']"
        @click.native="addToLeft"
        :disabled="rightChecked.length === 0">
        <i class="el-icon-arrow-left"></i>
        <span v-if="buttonTexts[0] !== undefined">{{ buttonTexts[0] }}</span>
      </el-button>
      <el-button
        type="primary"
        :class="['el-transfer__button', hasButtonTexts ? 'is-with-texts' : '']"
        @click.native="addToRight"
        :disabled="leftChecked.length === 0">
        <span v-if="buttonTexts[1] !== undefined">{{ buttonTexts[1] }}</span>
        <i class="el-icon-arrow-right"></i>
      </el-button>
    </div>
    <bs-transfer-panel
      v-bind="$props"
      ref="rightPanel"
      :data="targetData"
      :title="titles[1] || t('el.transfer.titles.1')"
      :default-checked="rightDefaultChecked"
      :placeholder="filterPlaceholder || t('el.transfer.filterPlaceholder')"
      @checked-change="onTargetCheckedChange"
      style="text-align: start;">
      <slot name="right-footer"></slot>
    </bs-transfer-panel>
    </div>
  `,

  mixins: [Emitter, Locale, Migrating],

  components: {
    TransferPanel,
    ElButton
  },
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    titles: {
      type: Array,
      default() {
        return []
      }
    },
    buttonTexts: {
      type: Array,
      default() {
        return []
      }
    },
    filterPlaceholder: {
      type: String,
      default: ''
    },
    filterMethod: Function,
    leftDefaultChecked: {
      type: Array,
      default() {
        return []
      }
    },
    rightDefaultChecked: {
      type: Array,
      default() {
        return []
      }
    },
    renderContent: Function,
    value: {
      type: Array,
      default() {
        return []
      }
    },
    format: {
      type: Object,
      default() {
        return {}
      }
    },
    filterable: Boolean,
    props: {
      type: Object,
      default() {
        return {
          label: 'label',
          key: 'key',
          disabled: 'disabled'
        }
      }
    },
    targetOrder: {
      type: String,
      default: 'original'
    }
  },

  data() {
    return {
      leftChecked: [],
      rightChecked: []
    }
  },

  computed: {
    // dataObj() {
    //   const key = this.props.key;
    //   return this.data.reduce((o, cur) => (o[cur[key]] = cur) && o, {});
    // },

    sourceData() {
      return this.data // 固定数组

      // 筛选出没有this.value的数据
      // return this.data.filter(item => this.value.indexOf(item[this.props.key]) === -1);
    },

    targetData() {
      const list = []
      if (this.value && this.value.length > 0) {
        this.value.forEach(valItem => {
          this.data.forEach(dataItem => {
            const valString = String(valItem)
            const valKey = valString.slice(0, valString.indexOf('_') > 0 ? valString.indexOf('_') : valString.length)
            if (valKey === String(dataItem.key)) {
              const item = deepClone(dataItem)
              item.key = valItem
              list.push(item)
            }
          })
        })
      }
      return list
      // if (this.targetOrder === 'original') {
      // 筛选出this.value的数据
      // return this.data.filter(item => this.value.indexOf(item[this.props.key]) > -1);
      // } else {
      // return this.value.reduce((arr, cur) => {
      //   const val = this.dataObj[cur];
      //   if (val) {
      //     arr.push(val);
      //   }
      //   return arr;
      // }, []);
      // }
    },

    hasButtonTexts() {
      return this.buttonTexts.length === 2
    }
  },

  watch: {
    value(val) {
      this.dispatch('ElFormItem', 'el.form.change', val)
    }
  },

  methods: {
    getMigratingConfig() {
      return {
        props: {
          'footer-format': 'footer-format is renamed to format.'
        }
      }
    },

    onSourceCheckedChange(val, movedKeys) {
      this.leftChecked = val
      if (movedKeys === undefined) return
      this.$emit('left-check-change', val, movedKeys)
    },

    onTargetCheckedChange(val, movedKeys) {
      this.rightChecked = val
      if (movedKeys === undefined) return
      this.$emit('right-check-change', val, movedKeys)
    },

    addToLeft() {
      const currentValue = this.value.slice()
      this.rightChecked.forEach(item => {
        // const itemKey = item.slice(0, item.indexOf('_') > 0 ? item.indexOf('_') : item.length)
        // console.log(itemKey)
        const index = currentValue.indexOf(item)
        console.log(index, item)
        if (index > -1) {
          currentValue.splice(index, 1)
        }
      })
      this.value = currentValue.slice()
      this.$emit('input', currentValue)
      this.$emit('change', currentValue, 'left', this.rightChecked)
    },

    addToRight() {
      let currentValue = this.value.slice()
      const itemsToBeMoved = []
      const key = this.props.key
      this.data.forEach(item => {
        const itemKey = item[key]
        if (
          this.leftChecked.indexOf(itemKey) > -1
          // && this.value.indexOf(itemKey) === -1
        ) {
          itemsToBeMoved.push(`${itemKey}_${generateUUID()}`)
          // itemsToBeMoved.push(itemKey)
        }
      })
      currentValue = currentValue.concat(itemsToBeMoved)

      this.$emit('value', currentValue.slice())
      // currentValue = this.targetOrder === 'unshift'
      //   ? itemsToBeMoved.concat(currentValue)
      //   : currentValue.concat(itemsToBeMoved);
      this.$emit('input', currentValue)
      this.$emit('change', currentValue, 'right', this.leftChecked)
      this.$refs.leftPanel.checked = []
    },

    clearQuery(which) {
      if (which === 'left') {
        this.$refs.leftPanel.query = ''
      } else if (which === 'right') {
        this.$refs.rightPanel.query = ''
      }
    }
  }
}
