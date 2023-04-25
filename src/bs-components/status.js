import {
  AccountStatusOptions,
  BankCardStatusOptions,
  BankCardTypeOptions,
  findOptionById,
  PayOrderCheckPaidProcessOptions,
  RiskStatusOptions,
  StatusOptions,
  FreezeStatusOptions,
  UsbTypeOptions
} from '@/definitions/options'
import { Message } from 'element-ui'
import i18n from '@/lang'
import { Regex, Rules } from '@/definitions/fieldCheck'

const template = `
    <div v-if="getOption(status)">
      <el-tag :type="getOption(status).color"
              v-waves
              :style="{cursor: clickable ? 'pointer' : 'default'}"
              @click.native="clickable && showDialog()">
        {{getOption(status).name}}
      </el-tag>
      <el-dialog :title="title"
                 :visible="dialogVisible"
                 :before-close="onCancel">
      <el-form
          :rules="rules"
          label-position="left"
          label-width="70px"
      >
        <el-form-item :label="$t('status.status')" prop="newStatus">
          <bs-select v-model="newStatus" :options="selectableOptions" :clearable="false" />
        </el-form-item>
        <el-form-item :label="$t('table.memo')">
          <bs-text-area v-model="newMemo" :rows="3" resize="row"/>
        </el-form-item>
        <div style="text-align: center; margin-top: 15px">
          <bs-cancel-button @click="onCancel"/>
          <bs-submit-button @click="onSubmit"/>
        </div>
       </el-form>
      </el-dialog>
    </div>
  `

const props = {
  clickable: {
    default: true,
    type: Boolean
  },
  status: Number,
  memo: String,
  onClickSubmit: Function,
  title: {
    default: i18n.t('accountStatus.changeMessage'),
    type: String
  }
}

const methods = {
  getOption(status) {
    return findOptionById(this.options, status)
  },
  showDialog() {
    this.dialogVisible = true
    this.newStatus = this.status
    this.newMemo = this.memo
  },
  onCancel() {
    this.dialogVisible = false
  },
  onSubmit() {
    // 不擋
    // if (this.newMemo) {
    //   this.dialogVisible = false
    //   this.$emit('on-click-submit', { status: this.newStatus, memo: this.newMemo })
    // } else {
    //   Message({
    //     message: i18n.t('status.memoNotEmpty'),
    //     type: 'error',
    //     duration: 5 * 1000
    //   })
    // }

    // 備註長度不可以大於 50
    if (this.newMemo && this.newMemo.length > 50) {
      Message({
        message: i18n.t('rules.memoLength'),
        type: 'error',
        duration: 5 * 1000
      })
      return
    }

    if (Regex.memo.test(this.newMemo)) {
      Message({
        message: i18n.t('rules.memo'),
        type: 'error',
        duration: 5 * 1000
      })
      return
    }

    // 必須選擇狀態
    if (this.newStatus === null || this.newStatus === undefined || this.newStatus === '') {
      Message({
        message: i18n.t('status.allStatus') + i18n.t('status.status'),
        type: 'error',
        duration: 5 * 1000
      })
      return
    }

    this.dialogVisible = false
    this.$emit('on-click-submit', { status: this.newStatus, memo: this.newMemo })
  }
}

const rules = {
  newStatus: [...Rules.requiredBlur]
}

const bsStatus = {
  name: 'BsStatus',
  template,
  props,
  data() {
    return {
      options: StatusOptions,
      selectableOptions: StatusOptions,
      newStatus: this.status,
      newMemo: this.memo,
      dialogVisible: false,
      rules
    }
  },
  methods
}

const bsFreezeStatus = {
  name: 'BsFreezeStatus',
  template,
  props,
  data() {
    return {
      options: FreezeStatusOptions,
      selectableOptions: FreezeStatusOptions,
      newStatus: this.status,
      newMemo: this.memo,
      dialogVisible: false,
      rules
    }
  },
  methods
}

const bsAccountStatus = {
  name: 'BsAccountStatus',
  template,
  props,
  data() {
    return {
      options: AccountStatusOptions,
      selectableOptions: AccountStatusOptions.filter(option => option.selectable),
      newStatus: this.status,
      newMemo: this.memo,
      dialogVisible: false,
      rules
    }
  },
  methods
}

const bsRiskStatus = {
  name: 'BsRiskStatus',
  template,
  props,
  data() {
    return {
      options: RiskStatusOptions,
      selectableOptions: RiskStatusOptions,
      newStatus: this.status,
      newMemo: this.memo,
      dialogVisible: false,
      rules
    }
  },
  methods
}

const bsPayOrderCheckPaidProcessStatus = {
  name: 'BsPayOrderCheckPaidProcessStatus',
  template,
  props: {
    ...props,
    clickable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      options: PayOrderCheckPaidProcessOptions,
      selectableOptions: PayOrderCheckPaidProcessOptions,
      newStatus: this.status,
      newMemo: this.memo,
      dialogVisible: false,
      rules
    }
  },
  methods
}

const bsBankCardStatus = {
  name: 'BsDepositBankCardStatus',
  template,
  props,
  data() {
    return {
      options: BankCardStatusOptions,
      selectableOptions: BankCardStatusOptions,
      newStatus: this.status,
      newMemo: this.memo,
      dialogVisible: false,
      rules
    }
  },
  methods
}

const bsBankCardType = {
  name: 'BsBankCardType',
  template,
  props: {
    ...props,
    clickable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      options: BankCardTypeOptions,
      selectableOptions: BankCardTypeOptions,
      newStatus: this.status,
      newMemo: this.memo,
      dialogVisible: false,
      rules
    }
  },
  methods
}

const bsUsbType = {
  name: 'BsUsbType',
  template,
  props: {
    ...props,
    clickable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      options: UsbTypeOptions,
      selectableOptions: UsbTypeOptions,
      newStatus: this.status,
      newMemo: this.memo,
      dialogVisible: false,
      rules
    }
  },
  methods
}

// 是否后台可登
const backendLoginProps = {
  clickable: {
    default: true,
    type: Boolean
  },
  status: Number,
  memo: String,
  onClickSubmit: Function,
  title: {
    default: i18n.t('accountStatus.changeMessage'),
    type: String
  }
}

// 是否后台可登
const backendLoginTemplate = `
    <div v-if="getOption(status)">
      <el-tag :type="getOption(status).color"
              v-waves
              :style="{cursor: clickable ? 'pointer' : 'default'}"
              @click.native="clickable && showDialog()">
        {{getOption(status).name}}
      </el-tag>
      <el-dialog
        :title="title"
        :visible="dialogVisible"
        :before-close="onCancel"
      >

        <div v-if="status===1" style="text-align: center;">{{$t('merchantList.backendLoginTurnOff')}}</div>
        <div v-else style="text-align: center;">{{$t('merchantList.backendLoginTurnOn')}}</div>

        <div style="text-align: center; margin-top: 35px">
          <bs-cancel-button @click="onCancel"/>
          <bs-submit-button @click="onSubmit"/>
        </div>
      </el-dialog>
    </div>
  `

// 是否后台可登
const backendLoginmethods = {
  getOption(status) {
    return findOptionById(this.options, status)
  },
  showDialog() {
    this.dialogVisible = true
    this.newStatus = this.status
  },
  onCancel() {
    this.dialogVisible = false
  },
  onSubmit() {
    this.dialogVisible = false
    // status 自動切換相反
    this.$emit('on-click-submit', { isBackendLogin: this.newStatus === 1 ? 0 : 1 })
  }
}

// 是否后台可登
const bsBackendLoginStatus = {
  name: 'BsBackendLoginStatus',
  template: backendLoginTemplate,
  props: backendLoginProps,
  data() {
    return {
      options: StatusOptions,
      selectableOptions: StatusOptions,
      newStatus: this.status,
      newMemo: this.memo,
      dialogVisible: false
    }
  },
  methods: backendLoginmethods
}

export default {
  name: 'status',
  components: {
    bsStatus,
    bsAccountStatus,
    bsFreezeStatus,
    bsRiskStatus,
    bsPayOrderCheckPaidProcessStatus,
    bsBankCardStatus,
    bsBankCardType,
    bsUsbType,
    bsBackendLoginStatus
  }
}
