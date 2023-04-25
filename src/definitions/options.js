import i18n from '@/lang'
import {
  AccountChannelType,
  AccountChannelTypeGroup,
  AccountStatus,
  BankCardStatus,
  BankCardType,
  CatchMode,
  DialogType,
  FoundToCofferType,
  NotifyStatus,
  PayOrderStatus,
  RiskStatus,
  SecurityType,
  SettlementClosingDay,
  UserLevel,
  WithdrawOrderStatus,
  DayStatus,
  ServiceFeeType,
  ConnStatus
} from '@/definitions/constants'

export const DialogTypeOptions = [
  { id: DialogType.Create, name: i18n.t('dialog.create') },
  { id: DialogType.Update, name: i18n.t('dialog.update') }
]

export const StatusOptions = [
  { id: 0, name: i18n.t('status.disabled'), color: 'danger' },
  { id: 1, name: i18n.t('status.enabled'), color: 'success' }
]

export const IsBackendLoginOptions = [
  { id: 0, name: i18n.t('status.disabled'), color: 'danger' },
  { id: 1, name: i18n.t('status.enabled'), color: 'success' }
]

export const NetworkOptions = [
  { id: '1', name: 'BNB' },
  { id: '2', name: 'ETH' }
]

export const UserListstatusOptions = [
  { id: 0, name: i18n.t('status.disabled'), color: 'danger' },
  { id: 1, name: i18n.t('status.enabled'), color: 'success' },
  { id: 2, name: i18n.t('status.cancellation'), color: 'success' }
]

export const FreezeStatusOptions = [
  { id: 0, name: i18n.t('freezeStatus.notFrozen'), color: 'success' },
  { id: 1, name: i18n.t('freezeStatus.fullFrozen'), color: 'danger' },
  { id: 2, name: i18n.t('freezeStatus.gameFrozen'), color: 'danger' },
  { id: 3, name: i18n.t('freezeStatus.withdrawFrozen'), color: 'danger' }
]

export const ReviewStatusOptions = [
  { id: 0, name: i18n.t('status.pending'), color: '#0066FF' },
  { id: 1, name: i18n.t('status.checking'), color: '#0066FF' },
  { id: 2, name: i18n.t('status.successed'), color: 'success' },
  { id: 3, name: i18n.t('status.failed'), color: 'danger' }
]

export const BrandOptions = [
  { id: 'BSK', name: 'BSK' }
]

export const CurrencyOptions = [
  { id: 'ZOD', name: 'ZOD' }
]

export const FundingExchangeTypeOptions = [
  { id: 1, name: i18n.t('fundingDetail.recharge') },
  { id: 2, name: i18n.t('fundingDetail.withdraw') }
]

export const MerchantBalanceOptions = [
  { id: 1, name: i18n.t('fundingDetail.recharge') },
  { id: 2, name: i18n.t('fundingDetail.withdraw') },
  { id: 3, name: i18n.t('fundingDetail.expenditure') },
  { id: 4, name: i18n.t('fundingDetail.income') }
]

export const UserLevelOptions = [
  { id: UserLevel.SuperAdmin, name: i18n.t('userLevel.superAdmin') },
  { id: UserLevel.NormalAdmin, name: i18n.t('userLevel.normalAdmin') },
  { id: UserLevel.BrandAdmin, name: i18n.t('userLevel.brandAdmin') },
  { id: UserLevel.GeneralAgent, name: i18n.t('userLevel.generalAgent') }
]

export const AccountSettlementOptions = [
  { id: 0, name: 'D0', selectable: true },
  { id: 1, name: 'D1', selectable: true }
]

export const AccountStatusOptions = [
  { id: AccountStatus.Disabled, name: i18n.t('accountStatus.disabled'), color: 'danger', selectable: true, simple: false },
  { id: AccountStatus.Enabled, name: i18n.t('accountStatus.enabled'), color: 'success', selectable: true, simple: true },
  { id: AccountStatus.ReachedLimit, name: i18n.t('accountStatus.reachedLimit'), color: 'warning', selectable: true, simple: false },
  {
    id: AccountStatus.UnderRiskControl,
    name: i18n.t('accountStatus.underRiskControl'),
    color: 'warning',
    selectable: true,
    simple: false
  },
  { id: AccountStatus.Suspended, name: i18n.t('accountStatus.suspended'), color: 'warning', selectable: true, simple: true },
  { id: AccountStatus.Cooling, name: i18n.t('accountStatus.cooling'), color: 'warning', selectable: true, simple: false },
  { id: AccountStatus.CoolingAmount, name: i18n.t('accountStatus.coolingAmount'), color: 'warning', selectable: true, simple: false }
]

export const RiskStatusOptions = [
  { id: RiskStatus.LoggedOut, name: i18n.t('riskStatus.loggedOut'), color: 'danger' },
  { id: RiskStatus.LoggedIn, name: i18n.t('riskStatus.loggedIn'), color: 'success' },
  { id: RiskStatus.LoggingIn, name: i18n.t('riskStatus.loggingId') }
]

export const CatchModeOptions = [
  { id: CatchMode.WebBrowser, name: i18n.t('catchMode.webBrowser') },
  { id: CatchMode.Selenium, name: i18n.t('catchMode.selenium') }
]

export const BankCardStatusOptions = [
  { id: BankCardStatus.Enabled, name: i18n.t('accountStatus.enabled'), color: 'success', selectable: true },
  { id: BankCardStatus.ReachedLimit, name: i18n.t('accountStatus.reachedLimit'), color: 'warning', selectable: true },
  { id: BankCardStatus.Cooling, name: i18n.t('accountStatus.cooling'), color: 'warning', selectable: true },
  { id: BankCardStatus.CoolingAmount, name: i18n.t('accountStatus.coolingAmount'), color: 'warning' },
  {
    id: BankCardStatus.UnderRiskControl,
    name: i18n.t('accountStatus.underRiskControl'),
    color: 'warning',
    selectable: true
  },
  { id: BankCardStatus.Suspended, name: i18n.t('accountStatus.suspended'), color: 'warning', selectable: true },
  { id: BankCardStatus.Disabled, name: i18n.t('accountStatus.disabled'), color: 'danger', selectable: true }
]

export const BankCardTypeOptions = [
  { id: BankCardType.ReceiptCard, name: i18n.t('bankCard.types.receiptCard') },
  { id: BankCardType.TransferCard, name: i18n.t('bankCard.types.transferCard'), color: 'warning' },
  { id: BankCardType.SafeCard, name: i18n.t('bankCard.types.safeCard'), color: 'success' },
  { id: BankCardType.PaymentCard, name: i18n.t('bankCard.types.paymentCard'), color: 'danger' }
]

export const UsbTypeOptions = [{ id: 0, name: i18n.t('bankCard.usbTypes.tmp') }]

export const SettlementPercentageOptions = [
  { id: 0, name: '0%' },
  { id: 10, name: '10%' },
  { id: 20, name: '20%' },
  { id: 30, name: '30%' },
  { id: 40, name: '40%' },
  { id: 50, name: '50%' },
  { id: 60, name: '60%' },
  { id: 70, name: '70%' },
  { id: 80, name: '80%' },
  { id: 90, name: '90%' },
  { id: 100, name: '100%' }
]

export const SettlementClosingDayOptions = [
  { id: SettlementClosingDay.D0, name: 'D0' },
  { id: SettlementClosingDay.D1, name: 'D1' },
  { id: SettlementClosingDay.T0, name: 'T0' },
  { id: SettlementClosingDay.T1, name: 'T1' }
]

export const NotifyStatusOptions = [
  { id: NotifyStatus.Created, name: i18n.t('notifyStatus.created'), color: 'info', hex: '#AAAAAA' },
  { id: NotifyStatus.Notifying, name: i18n.t('notifyStatus.notifying'), hex: '#0066FF' },
  { id: NotifyStatus.Succeeded, name: i18n.t('notifyStatus.succeeded'), color: 'success', hex: '#339933' },
  { id: NotifyStatus.Failed, name: i18n.t('notifyStatus.failed'), color: 'danger', hex: '#FF0000' },
  { id: NotifyStatus.NotifyError, name: i18n.t('notifyStatus.notifyError'), color: 'danger', hex: '#FF0000' }
]

// export const NotifyStatusOptionsNew = [
//   { id: NotifyStatus.Created, name: i18n.t('notifyStatus.created'), color: '#FF0000' },
//   { id: NotifyStatus.Notifying, name: i18n.t('notifyStatus.notifying'), color: '#0066FF' },
//   { id: NotifyStatus.Succeeded, name: i18n.t('notifyStatus.succeeded'), color: '#339933' },
//   { id: NotifyStatus.Failed, name: i18n.t('notifyStatus.failed'), color: '#FF0000' }
// ]

export const AccountChannelTypeOptions = [
  { id: AccountChannelType.Pc, name: i18n.t('channelType.pc'), group: AccountChannelTypeGroup.Pc },
  { id: AccountChannelType.WapQr, name: i18n.t('channelType.wapQr'), group: AccountChannelTypeGroup.Pc },
  { id: AccountChannelType.FaceQr, name: i18n.t('channelType.faceQr'), group: AccountChannelTypeGroup.Pc },
  { id: AccountChannelType.Wap, name: i18n.t('channelType.wap'), group: AccountChannelTypeGroup.Wap },
  { id: AccountChannelType.Face, name: i18n.t('channelType.face'), group: AccountChannelTypeGroup.Wap },
  { id: AccountChannelType.Auth, name: i18n.t('channelType.auth'), group: AccountChannelTypeGroup.Wap }
]

export const MerchantBalanceLogReasonOptions = [
  { id: 0, name: i18n.t('merchantBalanceLog.reasons.payActualAmount'), color: 'success' },
  { id: 1, name: i18n.t('merchantBalanceLog.reasons.payDiscountAmount'), color: 'success' },
  { id: 2, name: i18n.t('merchantBalanceLog.reasons.payFee'), negative: true, color: 'success' },

  { id: 10, name: i18n.t('merchantBalanceLog.reasons.withdrawActualAmount'), negativeFreeze: true, color: 'success' },
  { id: 11, name: i18n.t('merchantBalanceLog.reasons.withdrawDiscountAmount'), negativeFreeze: true, color: 'success' },
  { id: 12, name: i18n.t('merchantBalanceLog.reasons.withdrawFee'), negativeFreeze: true, color: 'success' },
  {
    id: 15,
    name: i18n.t('merchantBalanceLog.reasons.revertWithdrawActualAmount'),
    negativeFreeze: true,
    color: 'danger'
  },
  {
    id: 16,
    name: i18n.t('merchantBalanceLog.reasons.revertWithdrawDiscountAmount'),
    negativeFreeze: true,
    color: 'danger'
  },
  { id: 17, name: i18n.t('merchantBalanceLog.reasons.revertWithdrawFee'), negativeFreeze: true, color: 'danger' },

  { id: 18, name: i18n.t('merchantBalanceLog.reasons.freezeWithdrawActualAmount'), negative: true, color: 'success' },
  { id: 19, name: i18n.t('merchantBalanceLog.reasons.freezeWithdrawDiscountAmount'), negative: true, color: 'success' },
  { id: 14, name: i18n.t('merchantBalanceLog.reasons.freezeWithdrawFee'), negative: true, color: 'success' },

  { id: 20, name: i18n.t('merchantBalanceLog.reasons.foundToMerchantAmount'), negative: true, color: 'success' },
  { id: 21, name: i18n.t('merchantBalanceLog.reasons.revertFoundToMerchantAmount'), color: 'danger' },
  { id: 22, name: i18n.t('merchantBalanceLog.reasons.foundToMerchantFee'), negative: true, color: 'success' },
  { id: 23, name: i18n.t('merchantBalanceLog.reasons.revertFoundToMerchantFee'), color: 'danger' },

  { id: 30, name: i18n.t('merchantBalanceLog.reasons.manuallyChangeAddBalance'), color: 'success' },
  { id: 31, name: i18n.t('merchantBalanceLog.reasons.manuallyChangeSubtractBalance'), negative: true, color: 'danger' }
]

export const MerchantBalanceLogReasonGroupOptions = [
  { id: 0, name: i18n.t('merchantBalanceLog.reasonsGroup.pay'), reasonIds: [0] },
  { id: 1, name: i18n.t('merchantBalanceLog.reasonsGroup.discount'), reasonIds: [1, 11, 19] },
  { id: 2, name: i18n.t('merchantBalanceLog.reasonsGroup.fee'), reasonIds: [2, 12, 14, 22] },
  { id: 3, name: i18n.t('merchantBalanceLog.reasonsGroup.withdraw'), reasonIds: [10, 18, 20] },
  { id: 4, name: i18n.t('merchantBalanceLog.reasonsGroup.revertWithdraw'), reasonIds: [15, 21] },
  { id: 5, name: i18n.t('merchantBalanceLog.reasonsGroup.revertDiscount'), reasonIds: [16] },
  { id: 6, name: i18n.t('merchantBalanceLog.reasonsGroup.revertFee'), reasonIds: [17, 23] },
  { id: 7, name: i18n.t('merchantBalanceLog.reasonsGroup.manuallyIncrease'), reasonIds: [30] },
  { id: 8, name: i18n.t('merchantBalanceLog.reasonsGroup.manuallyDecrease'), reasonIds: [31] },
  { id: 9, name: i18n.t('merchantBalanceLog.reasonsGroup.servicesfee'), reasonIds: [3] }
]

export const SecurityTypeOptions = [
  { id: SecurityType.CreateOrder, name: i18n.t('security.types.createOrder') },
  { id: SecurityType.UserLogin, name: i18n.t('security.types.userLogin') },
  { id: SecurityType.WithdrawCardNo, name: i18n.t('security.types.withdrawCardNo') }
]

export const WithdrawOrderStatusOptions = [
  { id: WithdrawOrderStatus.Created, name: i18n.t('withdrawOrderList.statusOptions.created'), hex: '#000000' },
  // { id: WithdrawOrderStatus.Created, name: 'created', hex: '#000000' },
  {
    id: WithdrawOrderStatus.MerchantConfirmed,
    name: i18n.t('withdrawOrderList.statusOptions.merchantConfirmed'),
    hex: '#339933'
  },
  { id: WithdrawOrderStatus.Pending, name: i18n.t('withdrawOrderList.statusOptions.pending'), hex: '#0066FF' },
  { id: WithdrawOrderStatus.Processing, name: i18n.t('withdrawOrderList.statusOptions.processing'), hex: '#0066FF' },
  { id: WithdrawOrderStatus.Withdrawing, name: i18n.t('withdrawOrderList.statusOptions.withdrawing'), hex: '#0066FF' },
  // { id: WithdrawOrderStatus.Withdrawing, name: 'widthDrawing', hex: '#0066FF' },
  {
    id: WithdrawOrderStatus.Withdrawn,
    name: i18n.t('withdrawOrderList.statusOptions.withdrawn'),
    color: 'success',
    hex: '#339933'
  },
  {
    id: WithdrawOrderStatus.Completed,
    name: i18n.t('withdrawOrderList.statusOptions.completed'),
    color: 'success',
    hex: '#339933'
  },
  {
    id: WithdrawOrderStatus.FailedOnMerchantConfirm,
    name: i18n.t('withdrawOrderList.statusOptions.failedOnMerchantConfirm'),
    color: 'danger',
    hex: '#FF0000'
  },
  {
    id: WithdrawOrderStatus.FailedOnProcessing,
    name: i18n.t('withdrawOrderList.statusOptions.failedOnProcessing'),
    color: 'danger',
    hex: '#FF0000'
  },
  {
    id: WithdrawOrderStatus.FailedOnWithdrawing,
    name: i18n.t('withdrawOrderList.statusOptions.failedOnWithdrawing'),
    color: 'danger',
    hex: '#FF0000'
  },
  {
    id: WithdrawOrderStatus.FailedOnSign,
    name: i18n.t('withdrawOrderList.statusOptions.failedOnSign'),
    color: 'danger',
    hex: '#FF0000'
  }
]

// export const WithdrawOrderStatusOptionsNew = [
//   { id: WithdrawOrderStatus.Created, name: i18n.t('withdrawOrderList.statusOptions.created'), color: '#000000' },
//   {
//     id: WithdrawOrderStatus.MerchantConfirmed,
//     name: i18n.t('withdrawOrderList.statusOptions.merchantConfirmed'),
//     color: '#339933'
//   },
//   { id: WithdrawOrderStatus.Pending, name: i18n.t('withdrawOrderList.statusOptions.pending'), color: '#0066FF' },
//   { id: WithdrawOrderStatus.Processing, name: i18n.t('withdrawOrderList.statusOptions.processing'), color: '#0066FF' },
//   {
//     id: WithdrawOrderStatus.Withdrawing,
//     name: i18n.t('withdrawOrderList.statusOptions.withdrawing'),
//     color: '#0066FF'
//   },
//   { id: WithdrawOrderStatus.Withdrawn, name: i18n.t('withdrawOrderList.statusOptions.withdrawn'), color: '#339933' },
//   { id: WithdrawOrderStatus.Completed, name: i18n.t('withdrawOrderList.statusOptions.completed'), color: '#339933' },
//   {
//     id: WithdrawOrderStatus.FailedOnMerchantConfirm,
//     name: i18n.t('withdrawOrderList.statusOptions.failedOnMerchantConfirm'),
//     color: '#FF0000'
//   },
//   {
//     id: WithdrawOrderStatus.FailedOnProcessing,
//     name: i18n.t('withdrawOrderList.statusOptions.failedOnProcessing'),
//     color: '#FF0000'
//   },
//   {
//     id: WithdrawOrderStatus.FailedOnWithdrawing,
//     name: i18n.t('withdrawOrderList.statusOptions.failedOnWithdrawing'),
//     color: '#FF0000'
//   },
//   {
//     id: WithdrawOrderStatus.FailedOnSign,
//     name: i18n.t('withdrawOrderList.statusOptions.failedOnSign'),
//     color: '#FF0000'
//   }
// ]

// 代付訂單頁面用（訂單下拉選單）
export const WithdrawOrderStatusSelectOptions = [
  // { id: 0, name: i18n.t('withdrawOrderList.statusOptions.created'), color: '#000000' },
  { id: WithdrawOrderStatus.Pending, name: i18n.t('withdrawOrderList.statusOptions.pending'), color: '#0066FF' },
  { id: WithdrawOrderStatus.Processing, name: i18n.t('withdrawOrderList.statusOptions.processing'), color: '#0066FF' },
  {
    id: WithdrawOrderStatus.Withdrawing,
    name: i18n.t('withdrawOrderList.statusOptions.withdrawing'),
    color: '#0066FF'
  },
  { id: WithdrawOrderStatus.Withdrawn, name: i18n.t('withdrawOrderList.statusOptions.withdrawn'), color: '#339933' },
  { id: WithdrawOrderStatus.Completed, name: i18n.t('withdrawOrderList.statusOptions.completed'), color: '#339933' },
  { id: WithdrawOrderStatus.FailedOnMerchantConfirm, name: i18n.t('withdrawOrderList.setFailed'), color: '#FF0000' }
]

// export const PayOrderStatusOptions = [
//   { id: PayOrderStatus.Created, name: i18n.t('payOrderList.statusOptions.created'), simple: true },
//   { id: PayOrderStatus.NotYetOpenPage, name: i18n.t('payOrderList.statusOptions.notYetOpenPage'), redirect: 3, simple: true },
//   { id: PayOrderStatus.OpenedPage, name: i18n.t('payOrderList.statusOptions.openedPage'), redirect: 3 },
//   { id: PayOrderStatus.ScannedQrCode, name: i18n.t('payOrderList.statusOptions.scannedQrCode'), simple: true },
//   { id: PayOrderStatus.Paid, name: i18n.t('payOrderList.statusOptions.paid'), color: 'success', simple: true },
//   { id: PayOrderStatus.Completed, name: i18n.t('payOrderList.statusOptions.completed'), color: 'success', redirect: 4, simple: true },
//   {
//     id: PayOrderStatus.ClosedOnNotYetOpenPage,
//     name: i18n.t('payOrderList.statusOptions.closedOnNotYetOpenPage'),
//     color: 'info',
//     simple: true
//   },
//   {
//     id: PayOrderStatus.ClosedOnOpenPage,
//     name: i18n.t('payOrderList.statusOptions.closedOnOpenedPage'),
//     color: 'info',
//     redirect: 6
//   },
//   {
//     id: PayOrderStatus.ClosedOnScannedQrCode,
//     name: i18n.t('payOrderList.statusOptions.closedOnScannedQrCode'),
//     color: 'info',
//     redirect: 6
//   },
//   {
//     id: PayOrderStatus.ClosedOnCreate,
//     name: i18n.t('payOrderList.statusOptions.closedOnCreate'),
//     color: 'info',
//     simple: true
//   }
// ]

export const PayOrderStatusOptions = [
  {
    id: PayOrderStatus.Created,
    name: i18n.t('payOrderList.statusOptions.created'),
    simple: true,
    hex: '#CC6600'
  },
  {
    id: PayOrderStatus.NotYetOpenPage,
    name: i18n.t('payOrderList.statusOptions.notYetOpenPage'),
    redirect: 3,
    hex: '#0066FF'
  },
  { id: PayOrderStatus.OpenedPage, name: i18n.t('payOrderList.statusOptions.openedPage'), redirect: 3, hex: '#0066FF' },
  {
    id: PayOrderStatus.ScannedQrCode,
    name: i18n.t('payOrderList.statusOptions.scannedQrCode'),
    simple: true,
    hex: '#0066FF'
  },
  {
    id: PayOrderStatus.Paid,
    name: i18n.t('payOrderList.statusOptions.paid'),
    color: 'success',
    simple: true,
    hex: '#339933'
  },
  {
    id: PayOrderStatus.Completed,
    name: i18n.t('payOrderList.statusOptions.completed'),
    color: 'success',
    redirect: 4,
    simple: true,
    hex: '#339933'
  },
  {
    id: PayOrderStatus.ClosedOnNotYetOpenPage,
    name: i18n.t('payOrderList.statusOptions.closedOnNotYetOpenPage'),
    color: 'info',
    simple: false,
    hex: '#AAAAAA'
  },
  {
    id: PayOrderStatus.ClosedOnOpenPage,
    name: i18n.t('payOrderList.statusOptions.closedOnOpenedPage'),
    color: 'info',
    redirect: 6,
    hex: '#AAAAAA'
  },
  {
    id: PayOrderStatus.ClosedOnScannedQrCode,
    name: i18n.t('payOrderList.statusOptions.closedOnScannedQrCode'),
    color: 'info',
    redirect: 6,
    hex: '#AAAAAA'
  },
  {
    id: PayOrderStatus.ClosedOnCreate,
    name: i18n.t('payOrderList.statusOptions.closedOnCreate'),
    color: 'info',
    hex: '#FF0000'
  },
  {
    id: PayOrderStatus.Fail,
    name: i18n.t('payOrderList.statusOptions.closedOnCreate'),
    color: 'info',
    simple: true,
    hex: '#FF0000'
  }
]

// 新的色碼用
// export const PayOrderStatusOptionsNew = [
//   { id: PayOrderStatus.Created, name: i18n.t('payOrderList.statusOptions.created'), simple: true, color: '#CC6600' },
//   { id: PayOrderStatus.NotYetOpenPage, name: i18n.t('payOrderList.statusOptions.notYetOpenPage'), redirect: 3, color: '#0066FF' },
//   { id: PayOrderStatus.OpenedPage, name: i18n.t('payOrderList.statusOptions.openedPage'), redirect: 3, color: '#0066FF' },
//   { id: PayOrderStatus.ScannedQrCode, name: i18n.t('payOrderList.statusOptions.scannedQrCode'), color: '#0066FF', simple: true },
//   { id: PayOrderStatus.Paid, name: i18n.t('payOrderList.statusOptions.paid'), color: '#0066FF', simple: true },
//   { id: PayOrderStatus.Completed, name: i18n.t('payOrderList.statusOptions.completed'), color: '#339933', redirect: 4, simple: true },
//   {
//     id: PayOrderStatus.ClosedOnNotYetOpenPage,
//     name: i18n.t('payOrderList.statusOptions.closedOnNotYetOpenPage'),
//     color: '#000000',
//     simple: true
//   },
//   {
//     id: PayOrderStatus.ClosedOnOpenPage,
//     name: i18n.t('payOrderList.statusOptions.closedOnOpenedPage'),
//     color: '#000000',
//     redirect: 6
//   },
//   {
//     id: PayOrderStatus.ClosedOnScannedQrCode,
//     name: i18n.t('payOrderList.statusOptions.closedOnScannedQrCode'),
//     color: '#000000',
//     redirect: 6
//   },
//   {
//     id: PayOrderStatus.ClosedOnCreate,
//     name: i18n.t('payOrderList.statusOptions.closedOnCreate'),
//     color: '#FF0000'
//   },
//   {
//     id: PayOrderStatus.Fail,
//     name: i18n.t('payOrderList.statusOptions.closedOnCreate'),
//     color: '#FF0000',
//     simple: true
//   }
// ]

export const PayOrderCheckPaidProcessOptions = [
  { id: 0, name: i18n.t('payOrderList.checkPaidProcessOptions.fromNotify') },
  { id: 1, name: i18n.t('payOrderList.checkPaidProcessOptions.manuallyRefresh') }
]

export const WyOrderStatusOptions = [
  { id: 0, name: i18n.t('wyOrderList.statusOptions.paying'), color: 'info' },
  { id: 1, name: i18n.t('wyOrderList.statusOptions.paid'), color: 'success' }
]

export const WyOrderMatchedOptions = [
  { id: 0, name: i18n.t('wyOrderList.matchedOptions.unmatched'), color: 'info' },
  { id: 1, name: i18n.t('wyOrderList.matchedOptions.matched'), color: 'success' }
]

export const BankCardOrderMatchedOptions = [
  { id: 0, name: i18n.t('bankCardOrderList.matchedOptions.unmatched'), color: 'info' },
  { id: 1, name: i18n.t('bankCardOrderList.matchedOptions.matchedManually'), color: 'success' },
  { id: 2, name: i18n.t('bankCardOrderList.matchedOptions.matched'), color: 'success' }
]

export const BankCardOrderTransferTypeOptions = [
  { id: 0, name: i18n.t('bankCardOrderList.transferTypeOptions.internetBanking') }
]

export const FoundToCofferTypeOptions = [
  { id: FoundToCofferType.AlipayToAlipay, name: i18n.t('foundToCofferOrder.types.alipayToAlipay') },
  {
    id: FoundToCofferType.AlipayToBankCard,
    name: i18n.t('foundToCofferOrder.types.alipayToBankCard'),
    color: 'warning'
  }
]

export function findOptionById(options, id) {
  return options.find(option => option.id === id)
}

export function findSettlementClosingName(id) {
  return SettlementClosingDayOptions.find(settlementClosingDay => settlementClosingDay.id === id).name
}

// 週一～週日
export const DayOptions = [
  { id: DayStatus.Sun, name: i18n.t('week.Sun') },
  { id: DayStatus.Mon, name: i18n.t('week.Mon') },
  { id: DayStatus.Tue, name: i18n.t('week.Tue') },
  { id: DayStatus.Wed, name: i18n.t('week.Wed') },
  { id: DayStatus.Thu, name: i18n.t('week.Thu') },
  { id: DayStatus.Fri, name: i18n.t('week.Fri') },
  { id: DayStatus.Sat, name: i18n.t('week.Sat') }
]

// 代付手续费:['从余额扣除手续费', '从出款金额扣除手续费']
export const ServiceFeeTypeOptions = [
  { id: ServiceFeeType.TypeA, name: i18n.t('withdrawChannelList.serviceFeeTypeA') },
  { id: ServiceFeeType.TypeB, name: i18n.t('withdrawChannelList.serviceFeeTypeB') }
]

// refresh time 5秒, 10秒, 30秒, 60秒, 120秒, 300秒
export const RefreshTimeOptions = [
  { id: 5, name: '5s' },
  { id: 10, name: '10s' },
  { id: 30, name: '30s' },
  { id: 60, name: '60s' },
  { id: 120, name: '120s' },
  { id: 300, name: '300s' }
]

export const BlackWhiteOptions = [
  { id: 'W', name: i18n.t('blackWhiteList.whiteList') },
  { id: 'B', name: i18n.t('blackWhiteList.blackList') }
]

// 连线状态
export const ConnectOptions = [
  { id: 0, name: i18n.t('accountList.statusOptions.good'), color: 'success' },
  { id: 1, name: i18n.t('accountList.statusOptions.error'), color: 'danger' },
  { id: 2, name: i18n.t('accountList.statusOptions.overtime'), color: 'danger' }
]

// 连线状态
export const ConnectStatusOptions = [
  { id: ConnStatus.Good, name: i18n.t('connectStatusOptions.good'), color: 'success' },
  { id: ConnStatus.Timeout, name: i18n.t('connectStatusOptions.timeout'), color: 'danger' },
  { id: ConnStatus.Error, name: i18n.t('connectStatusOptions.error'), color: 'danger' }
]

// 病徵選項
export const ConditionOptions = [
  { id: 1, name: i18n.t('symptom.dementia') },
  { id: 2, name: i18n.t('symptom.parkinson') },
  { id: 3, name: i18n.t('symptom.migraine') }
]

// 回答者選項
export const RespondentOptions = [
  { id: 1, name: i18n.t('role.patient') },
  { id: 2, name: i18n.t('role.caregiver') },
  { id: 3, name: i18n.t('role.nurse') }
]

// 排程選項
export const ScheduleOptions = [
  { id: 0, name: i18n.t('survey.schedule.one_of_month') },
  { id: 1, name: i18n.t('survey.schedule.two_of_month') },
  { id: 2, name: i18n.t('survey.schedule.one_of_week') },
  { id: 3, name: i18n.t('survey.schedule.two_of_week') },
  { id: 4, name: i18n.t('survey.schedule.one_of_day') },
  { id: 5, name: i18n.t('survey.schedule.ad_hoc') }
]
