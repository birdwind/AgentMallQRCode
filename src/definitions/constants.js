import i18n from '@/lang'

export const ActionType = {
  ADD: 'add',
  DELETE: 'del',
  UPDATE: 'update'
}

export const DialogType = {
  Create: 0,
  Update: 1
}

export const Status = {
  Disabled: 0,
  Enabled: 1
}

// export const UserLevel = {
//   Merchant: -2,
//   SuperAdmin: -1,
//   GeneralAgent: 0
// }

// 改成只有兩種
export const UserLevel = {
  SuperAdmin: 1,
  NormalAdmin: 2,
  BrandAdmin: 3,
  GeneralAgent: 4
}

export const AccountStatus = {
  Disabled: 0,
  Enabled: 1,
  ReachedLimit: 2,
  UnderRiskControl: 3,
  Suspended: 4,
  Cooling: 5,
  CoolingAmount: 6
}

export const CatchMode = {
  WebBrowser: 0,
  Selenium: 1
}

export const BankCardStatus = {
  Disabled: 0,
  Enabled: 1,
  ReachedLimit: 2,
  UnderRiskControl: 3,
  Suspended: 4,
  Cooling: 5,
  CoolingAmount: 6
}

export const BankCardType = {
  ReceiptCard: 0,
  TransferCard: 1,
  SafeCard: 2,
  PaymentCard: 3
}

export const SettlementClosingDay = {
  D0: 0,
  D1: 1,
  T0: 2,
  T1: 3
}

export const NotifyStatus = {
  Created: 0,
  Notifying: 1,
  Succeeded: 2,
  Failed: 3,
  NotifyError: 4
}

export const RiskStatus = {
  LoggedOut: 0,
  LoggedIn: 1,
  LoggingIn: 2
}

export const AccountChannelTypeGroup = {
  Pc: 'PC',
  Wap: 'WAP'
}

export const AccountChannelType = {
  Pc: '_PC',
  WapQr: 'WAP_QR',
  FaceQr: 'FACE_QR',
  Wap: '_WAP',
  Face: 'FACE',
  Auth: 'AUTH'
}

export const ChannelCodeWithoutAccount = {
  Withdraw: 'WITHDRAW'
}

export const ChannelCode = {
  AliPay: 'ALIPAY',
  WeChant: 'WECHAT',
  PddAliPay: 'PDD_ALIPAY',
  PddWeChat: 'PDD_WECHAT',
  BankGate: 'BANKGATE',
  BankCard: 'BANKCARD',
  Withdraw: 'WITHDRAW'
}

export const AccountCode = {
  AliPay: {
    AliPayEnterprise: 'ALIPAY_ENTERPRISE',
    Pdd: 'PDD',
    Kuaijie: 'KUAIJIE',
    Lepay: 'LEPAY'
  },
  WeChant: {
    Pdd: 'PDD',
    Kuaijie: 'KUAIJIE'
  },
  PddAliPay: {
    ZifuPdd: 'ZIFU_PDD'
  },
  PddWeChat: {
    ZifuPdd: 'ZIFU_PDD'
  },
  BankGate: {
    WyPay: 'WYPAY'
  },
  BankCard: {
    Inner: 'INNER'
  }
}

export const AccountCodeList = [
  { channelCode: ChannelCode.AliPay, accountCode: AccountCode.AliPay.AliPayEnterprise },
  { channelCode: ChannelCode.AliPay, accountCode: AccountCode.AliPay.Pdd },
  { channelCode: ChannelCode.AliPay, accountCode: AccountCode.AliPay.Kuaijie },
  { channelCode: ChannelCode.AliPay, accountCode: AccountCode.AliPay.Lepay },
  { channelCode: ChannelCode.WeChant, accountCode: AccountCode.WeChant.Pdd },
  { channelCode: ChannelCode.WeChant, accountCode: AccountCode.WeChant.Kuaijie },
  { channelCode: ChannelCode.PddAliPay, accountCode: AccountCode.PddAliPay.ZifuPdd },
  { channelCode: ChannelCode.PddWeChat, accountCode: AccountCode.PddWeChat.ZifuPdd },
  { channelCode: ChannelCode.BankGate, accountCode: AccountCode.BankGate.WyPay },
  { channelCode: ChannelCode.BankCard, accountCode: AccountCode.BankCard.Inner }
]

export const FoundToCofferType = {
  AlipayToAlipay: 0,
  AlipayToBankCard: 1
}

export const WithdrawChannelUrlType = {
  CreateOrder: 0,
  GetOrder: 1,
  GetBalance: 2
}

export const SecurityType = {
  CreateOrder: 0,
  UserLogin: 1,
  WithdrawCardNo: 2
}

export const RiskConfigType = {
  Money: 0,
  Number: 1,
  Percentage: 2,
  Json: 3
}

export const PayOrderStatus = {
  Created: 0,
  NotYetOpenPage: 1,
  OpenedPage: 2,
  ScannedQrCode: 3,
  Paid: 4,
  Completed: 5,
  ClosedOnNotYetOpenPage: 6,
  ClosedOnOpenPage: 7,
  ClosedOnScannedQrCode: 8,
  ClosedOnCreate: 9,
  Fail: 13
}

export const WithdrawOrderStatus = {
  Created: 0,
  MerchantConfirmed: 1,
  Pending: 2,
  Processing: 3,
  Withdrawing: 4,
  Withdrawn: 5,
  Completed: 6,
  FailedOnMerchantConfirm: -1,
  FailedOnProcessing: -2,
  FailedOnWithdrawing: -3,
  FailedOnSign: -4
}

export const FoundToMerchantOrderStatus = {
  Created: 0,
  Finished: 1,
  Canceled: 2
}

export const RiskConfig = [
  {
    key: 'ALIPAY_COOLING_AMOUNT',
    name: i18n.t('riskConfig.keys.alipayCoolingAmount'),
    type: RiskConfigType.Money
  },
  {
    key: 'ACCOUNT_SELECTING_TODAY_LEAST_AMOUNT',
    name: i18n.t('riskConfig.keys.accountSelectingTodayLeastAmount'),
    type: RiskConfigType.Number
  },
  {
    key: 'ORDER_SUCCESS_RATE',
    name: i18n.t('riskConfig.keys.orderSuccessRate'),
    type: RiskConfigType.Percentage
  },
  {
    key: 'PAID_SUCCESS_RATE',
    name: i18n.t('riskConfig.keys.paidSuccessRate'),
    type: RiskConfigType.Percentage
  },
  {
    key: 'BANKGATE_WYPAY',
    name: i18n.t('riskConfig.keys.bankGateWyPay'),
    type: RiskConfigType.Json
  },
  {
    key: 'ALIPAY_CLIENT_IP_VERIFICATION',
    name: i18n.t('riskConfig.keys.clientIpVerification'),
    type: RiskConfigType.Number
  },
  {
    key: 'BAN_REQUEST_IP_DIFFERENT_FROM_CLIENT_IP',
    name: i18n.t('riskConfig.keys.banRequestIpDifferentFromClientIp'),
    type: RiskConfigType.Number
  }
]

export const Permission = {
  // 品牌管理
  BrandManagement: 'BRAND_MANAGEMENT',
  // 品牌列表
  BrandList: 'BRAND_LIST',
  // 品牌列表 - 新增
  BrandCreate: 'BRAND_CREATE',
  // 品牌列表 - 更新
  BrandUpdate: 'BRAND_UPDATE',
  // 品牌列表 - 查詢
  BrandPage: 'BRAND_PAGE',

  // 商戶管理
  MerchantManagement: 'CUSTOMER_INFORMATION_QUERY',
  // 商户管理
  Merchant: 'MERCHANT',
  // 商户管理 - 新增
  MerchantAdd: 'MERCHANT_ADD',
  // 商户管理 - 更新
  MerchantUpdate: 'MERCHANT_UPDATE',
  // 商户管理 - 更新状态
  MerchantUpdateStatus: 'MERCHANT_UPDATE_STATUS',
  // 商户管理 - 列表
  MerchantList: 'MERCHANT_LIST',
  // 商户管理 - 生成请求金钥
  MerchantGenerateRequestKey: 'MERCHANT_GENERATE_REQUEST_KEY',
  // 商户管理 - 渠道结算列表
  MerchantGetChannelSettlement: 'MERCHANT_GET_CHANNEL_SETTLEMENT',
  // 商户管理 - 渠道基本费率
  MerchantGetChannelBaseRate: 'MERCHANT_GET_CHANNEL_BASE_RATE',
  // 商户管理 - 取得父代理
  MerchantGetAgent: 'MERCHANT_GET_AGENT',

  Agent: 'AGENT',
  AgentAdd: 'AGENT_ADD',
  AgentUpdate: 'AGENT_UPDATE',

  // 代理管理 - 更新状态
  AgentUpdateStatus: 'AGENT_UPDATE_STATUS',

  AgentList: 'AGENT_LIST',

  // 渠道管理
  ChannelManagement: 'CHANNEL_MANAGEMENT',

  // 渠道管理
  Channel: 'CHANNEL',
  // 渠道管理 - 新增
  ChannelAdd: 'CHANNEL_ADD',
  // 渠道管理 - 更新
  ChannelUpdate: 'CHANNEL_UPDATE',
  // 渠道管理 - 列表
  ChannelList: 'CHANNEL_LIST',

  // 账号管理
  Account: 'ACCOUNT',
  // 账号管理 - 新增
  AccountAdd: 'ACCOUNT_ADD',
  // 账号管理 - 更新
  AccountUpdate: 'ACCOUNT_UPDATE',
  // 账号管理 - 状态更新
  AccountStatusUpdate: 'ACCOUNT_STATUS_UPDATE',
  // 账号管理 - 列表
  AccountList: 'ACCOUNT_LIST',
  // 账号管理 - 测单
  AccountTest: 'ACCOUNT_TEST',
  // 账号管理 - 绑定的银行卡
  AccountBankCard: 'ACCOUNT_BANK_CARD',

  AccountGroup: 'ACCOUNT_GROUP',
  AccountGroupAdd: 'ACCOUNT_GROUP_ADD',
  AccountGroupUpdate: 'ACCOUNT_GROUP_UPDATE',
  AccountGroupList: 'ACCOUNT_GROUP_LIST',

  // 账号组管理 - 配额概况
  AccountGroupQuotaList: 'ACCOUNT_GROUP_QUOTA_LIST',

  AccountAllocation: 'ACCOUNT_ALLOCATION',
  AccountAllocationUpdate: 'ACCOUNT_ALLOCATION_UPDATE',
  AccountAllocationList: 'ACCOUNT_ALLOCATION_LIST',

  // 账号组 - 可分配列表
  AccountGroupAssignableList: 'ACCOUNT_GROUP_ASSIGNABLE_LIST',

  BankCard: 'BANK_CARD',
  BankCardAdd: 'BANK_CARD_ADD',
  BankCardUpdate: 'BANK_CARD_UPDATE',
  BankCardList: 'BANK_CARD_LIST',

  // 代付渠道管理
  WithdrawChannel: 'WITHDRAW_CHANNEL',
  // 代付渠道管理 - 新增
  WithdrawChannelAdd: 'WITHDRAW_CHANNEL_ADD',
  // 代付渠道管理 - 更新
  WithdrawChannelUpdate: 'WITHDRAW_CHANNEL_UPDATE',
  // 代付渠道管理 - 列表
  WithdrawChannelList: 'WITHDRAW_CHANNEL_LIST',
  // 代付渠道管理 - 测单
  WithdrawChannelTest: 'WITHDRAW_CHANNEL_TEST',
  // 代付渠道管理 - 更新
  WithdrawChannelRefresh: 'WITHDRAW_CHANNEL_REFRESH',
  // 代付渠道管理 - 更新
  WithdrawChannelSetting: 'WITHDRAW_CHANNEL_UPDATE',

  // 代付銀行
  WithdrawChannelBankCode: 'WITHDRAW_CHANNEL_BANK_CODE',
  // 代付银行列表 - 列表
  WithdrawChannelBankCodeList: 'WITHDRAW_CHANNEL_BANK_CODE_LIST',
  // 代付银行列表 - 新增
  WithdrawChannelBankCodeAdd: 'WITHDRAW_CHANNEL_BANK_CODE_ADD',
  // 代付银行列表 - 修改
  WithdrawChannelBankCodeUpdate: 'WITHDRAW_CHANNEL_BANK_CODE_UPDATE',

  // 代付银行卡黑名單
  WithdrawBankCardBlackList: 'WITHDRAW_BANKCARD_BLACKLIST',
  // 代付银行卡黑名单 - 列表
  WithdrawBankCardBlackListList: 'WITHDRAW_BANKCARD_BLACKLIST_LIST',
  // 代付银行卡黑名单 - 新增
  WithdrawBankCardBlackListAdd: 'WITHDRAW_BANKCARD_BLACKLIST_ADD',
  // 代付银行卡黑名单 - 修改
  WithdrawBankCardBlackListUpdate: 'WITHDRAW_BANKCARD_BLACKLIST_UPDATE',
  // 代付银行卡黑名单 - 删除
  WithdrawBankCardBlackListDelete: 'WITHDRAW_BANKCARD_BLACKLIST_DELETE',

  // 權限管理
  PermissionManagement: 'PERMISSION_MANAGEMENT',
  // 菜单管理
  AdminList: 'ADMIN_LIST',
  Acl: '权限',
  // 菜单管理 - 列表
  AuthList: 'AUTH_LIST',
  // 角色管理
  Role: '角色',
  // 角色管理 - 新增
  RoleAdd: 'ROLE_ADD',
  // 角色管理 - 更新
  RoleUpdate: 'ROLE_UPDATE',
  // 角色管理 - 列表
  RoleList: 'ROLE_LIST',
  // 日志管理
  Log: 'LOG',
  // 日志管理 - 列表
  LogList: 'LOG_LIST',
  // 账号 - 资讯
  AdminInfo: 'ADMIN_INFO',

  // 商户账变日志
  MerchantBalanceLog: 'MERCHANT_BALANCE_LOG',
  // 商户账变日志 - 列表
  MerchantBalanceLogList: 'MERCHANT_BALANCE_LOG_LIST',
  // 商户账变日志 - 导出CSV
  MerchantBalanceLogListCsv: 'MERCHANT_BALANCE_LOG_LIST_CSV',
  Bulletin: 'BULLETIN',
  BulletinUpdate: 'BULLETIN_UPDATE',
  BulletinList: 'BULLETIN_LIST',

  // 賬戶管理
  UserManagement: 'USER_MANAGEMENT',
  // 用户管理
  User: 'USER',
  // 用户管理 - 新增
  UserAdd: 'USER_ADD',
  // 用户管理 - 更新
  UserUpdate: 'USER_UPDATE',
  // 用户管理 - 列表
  UserList: 'USER_LIST',
  // 用户管理 - 重置密码
  UserResetPassword: 'USER_RESET_PASSWORD',
  // 用户管理 - 資產
  UserAsset: 'USER_ASSET',
  // 用户管理 - 资金进出
  FundInOut: 'FUND_IN_OUT',
  // 用户管理 - 资金明细
  UserAssetsLog: 'USER_ASSETS_LOG',

  // 訂單管理
  OrderManagement: 'ORDER_MANAGEMENT',
  // 收款订单
  PayOrder: 'PAY_ORDER',
  // 收款订单 - 列表
  PayOrderList: 'PAY_ORDER_LIST',
  // 收款订单 - 导出Excel
  PayOrderListExcel: 'PAY_ORDER_LIST_EXCEL',
  // 收款订单 - 刷新
  PayOrderPull: 'PAY_ORDER_PULL',
  // 代付订单
  WithdrawOrder: 'WITHDRAW_ORDER',
  // 代付订单 - 列表
  WithdrawOrderList: 'WITHDRAW_ORDER_LIST',
  // 代付订单 - 导出Excel
  WithdrawOrderListExcel: 'WITHDRAW_ORDER_LIST_EXCEL',
  // 代付订单 - 刷新
  WithdrawOrderPull: 'WITHDRAW_ORDER_PULL',
  // 代付订单 - 设为成功
  WithdrawOrderSetSuccess: 'WITHDRAW_ORDER_SET_SUCCESS',
  // 代付订单 - 设为失败
  WithdrawOrderSetFailed: 'WITHDRAW_ORDER_SET_FAILED',

  FoundToMerchantOrder: 'FOUND_TO_MERCHANT_ORDER',
  FoundToMerchantOrderList: 'FOUND_TO_MERCHANT_ORDER_LIST',
  FoundToMerchantOrderAdd: 'FOUND_TO_MERCHANT_ORDER_ADD',
  FoundToMerchantOrderStatusUpdate: 'FOUND_TO_MERCHANT_ORDER_STATUS_UPDATE',
  FoundToMerchantOrderFeeUpdate: 'FOUND_TO_MERCHANT_ORDER_FEE_UPDATE',

  // 订单通知
  OrderNotify: 'ORDER_NOTIFY',

  WyOrder: 'WY_ORDER',
  WyOrderList: 'WY_ORDER_LIST',
  BankCardOrder: 'BANK_CARD_ORDER',
  BankCardOrderList: 'BANK_CARD_ORDER_LIST',

  // 報表管理
  ReportManagement: 'REPORT',
  // 每日报表
  DailyReport: 'DAILY_REPORT',

  // 充值
  DailyRechargeReport: 'DAILY_RECHARGE_REPORT',
  // 提款
  DailyWithdrawReport: 'DAILY_WITHDRAW_REPORT',

  // 商户提款报表
  MerchantWithdrawReport: 'MERCHANT_WITHDRAW_REPORT',
  // 商户充值报表
  MerchantRechargeReport: 'MERCHANT_RECHARGE_REPORT',

  // 每日报表 - 列表
  DailyReportList: 'DAILY_REPORT_LIST',
  // 每日报表 - 导出CSV
  DailyReportListCsv: 'DAILY_REPORT_LIST_CSV',
  // 商户报表
  MerchantReport: 'MERCHANT_REPORT',
  // 商户报表 - 列表
  MerchantReportList: 'MERCHANT_REPORT_LIST',
  // 商户报表 - 导出CSV
  MerchantReportListCsv: 'MERCHANT_REPORT_LIST_CSV',
  // 每日报表 - 商户不可用余额总和
  MerchantSumUpFrozenAmount: 'MERCHANT_SUM_UP_FROZEN_AMOUNT',

  AgentReport: 'AGENT_REPORT',
  AgentReportList: 'AGENT_REPORT_LIST',
  AgentReportListCsv: 'AGENT_REPORT_LIST_CSV',
  AgentReportDetail: 'AGENT_REPORT_DETAIL',
  AgentReportDetailList: 'AGENT_REPORT_DETAIL_LIST',
  AgentReportDetailListCsv: 'AGENT_REPORT_DETAIL_LIST_CSV',
  RedoReport: 'REDO_REPORT',
  RedoReportExecute: 'REDO_REPORT_EXECUTE',

  // 風控管理
  RiskManagement: 'RISK_MANAGEMENT',

  RiskReportAccountBalance: 'RISK_REPORT_ACCOUNT_BALANCE',
  RiskReportAccountBalanceList: 'RISK_REPORT_ACCOUNT_BALANCE_LIST',
  RiskReportAccountBalanceListExcel: 'RISK_REPORT_ACCOUNT_BALANCE_LIST_CSV',

  // 账号额度
  RiskReportAccount: 'RISK_REPORT_ACCOUNT',
  // 账号额度 - 列表
  RiskReportAccountList: 'RISK_REPORT_ACCOUNT_LIST',
  // 账号额度 - 导出CSV
  RiskReportAccountListCsv: 'RISK_REPORT_ACCOUNT_LIST_CSV',

  // 商户额度
  RiskReportMerchant: 'RISK_REPORT_MERCHANT',
  // 商户额度 - 列表
  RiskReportMerchantList: 'RISK_REPORT_MERCHANT_LIST',
  // 商户额度 - 导出CSV
  RiskReportMerchantListCsv: 'RISK_REPORT_MERCHANT_LIST_CSV',

  FoundToCofferOrder: 'FOUND_TO_COFFER_ORDER',

  // 资金下发 - 新增
  FoundToCofferOrderAdd: 'FOUND_TO_COFFER_ORDER_ADD',

  FoundToCofferOrderList: 'FOUND_TO_COFFER_ORDER_LIST',
  FoundToCofferOrderStatusUpdate: 'FOUND_TO_COFFER_ORDER_STATUS_UPDATE',
  MerchantChargeOrder: 'MERCHANT_CHARGE_ORDER',
  MerchantChargeOrderAdd: 'MERCHANT_CHARGE_ORDER_ADD',
  MerchantChargeOrderUpdate: 'MERCHANT_CHARGE_ORDER_UPDATE',
  MerchantChargeOrderList: 'MERCHANT_CHARGE_ORDER_LIST',

  // IP安全
  Security: 'SECURITY',
  // IP安全 - 新增
  SecurityAdd: 'SECURITY_ADD',
  // IP安全 - 更新
  SecurityUpdate: 'SECURITY_UPDATE',
  // IP安全 - 列表
  SecurityList: 'SECURITY_LIST',

  // 风控参数
  RiskConfig: 'RISK_CONFIG',
  // 风控参数 - 更新
  RiskConfigUpdate: 'RISK_CONFIG_UPDATE',
  // 风控参数 - 列表
  RiskConfigList: 'RISK_CONFIG_LIST',

  MerchantUser: 'MERCHANT_USER',
  MerchantUserList: 'MERCHANT_USER_LIST',
  MerchantUserUpdate: 'MERCHANT_USER_UPDATE',
  MerchantUserReport: 'MERCHANT_USER_REPORT',

  BannedIp: 'BANNED_IP',
  BannedIpList: 'BANNED_IP_LIST',
  BannedIpAdd: 'BANNED_IP_ADD',
  BannedIpUpdate: 'BANNED_IP_UPDATE',
  PayPage: 'PAY_PAGE',
  PayPageList: 'PAY_PAGE_LIST',

  // 用户来源
  OrderTrace: 'ORDER_TRACE',
  // 用户来源 - 列表
  OrderTraceList: 'ORDER_TRACE_LIST',

  // 網易
  RiskWy: 'RISK_WY',
  RiskWyLogin: 'RISK_WY_LOGIN',
  RiskWyQueryOrder: 'RISK_WY_QUERY_ORDER',
  RiskWyQueryBalance: 'RISK_WY_QUERY_BALANCE',

  // 個人信息
  Profile: 'PROFILE',
  ProfileMerchant: 'PROFILE_MERCHANT',
  ProfileMerchantGet: 'PROFILE_MERCHANT_GET',

  // 用户信息
  ProfileUser: 'PROFILE_USER',
  // 用户信息 - 列表
  ProfileUserGet: 'PROFILE_USER_GET',
  // 用户信息 - 更新
  ProfileUserUpdate: 'PROFILE_USER_UPDATE',

  // 索引
  Indexing: 'INDEXING',
  // 索引 - 渠道
  IndexingChannel: 'INDEXING_CHANNEL',
  // 索引 - 账号组
  IndexingAccountGroup: 'INDEXING_ACCOUNT_GROUP',
  // 索引 - 账号
  IndexingAccount: 'INDEXING_ACCOUNT',
  // 索引 - 代付渠道
  IndexingWithdrawChannel: 'INDEXING_WITHDRAW_CHANNEL',
  // 索引 - 银行卡
  IndexingBankCard: 'INDEXING_BANK_CARD',
  // 索引 - 最常使用银行卡
  IndexingMostUsedBankCard: 'INDEXING_MOST_USED_BANK_CARD',
  // 索引 - 商户
  IndexingMerchant: 'INDEXING_MERCHANT',
  // 索引 - 用户
  IndexingUser: 'INDEXING_USER',
  // 索引 - 角色
  IndexingRole: 'INDEXING_ROLE',
  // 索引 - 银行名缩写
  IndexingBankAbbreviation: 'INDEXING_BANK_ABBREVIATION',
  // 索引 - 公告
  IndexingBulletin: 'INDEXING_BULLETIN',
  // 索引 - 商品目录
  IndexingCatalog: 'INDEXING_CATALOG',
  IndexingAccountCode: 'INDEXING_ACCOUNT_CODE',

  // 黑白名單
  BlackWhite: 'BLACK_WHITE',
  // 商户黑白名单 - 更新
  BlackWhiteUpdate: 'BLACK_WHITE_UPDATE',
  // 商户黑白名单 - 列表
  BlackWhiteList: 'BLACK_WHITE_LIST',
  // 商户黑白名单 - 新增
  BlackWhiteAdd: 'BLACK_WHITE_ADD',
  // 商户黑白名单 - 删除
  BlackWhiteDelete: 'BLACK_WHITE_DELETE',
  // 商户黑白名单 - 设定
  BlackWhiteSetRedis: 'BLACK_WHITE_SET_REDIS',

  // 系统管理
  SystemManagement: 'SYSTEM_MANAGEMENT',
  // 支付渠道管理
  PayChannelManagement: 'PAY_CHANNEL_MANAGEMENT',
  // 代付渠道管理
  WithdrawChannelManagement: 'WITHDRAW_CHANNEL_MANAGEMENT',
  // 支付订单管理
  PayOrderManagement: 'PAY_ORDER_MANAGEMENT',
  // 代付订单管理
  WithdrawOrderManagement: 'WITHDRAW_ORDER_MANAGEMENT',

  // 用户信息 - 生成 QR Code
  ProfileUserGenerateQrCode: 'PROFILE_USER_GENERATE_QR_CODE',

  // 用户信息 - 驗證 TOTP Code
  ProfileUserVerifyTotpCode: 'PROFILE_USER_VERIFY_TOTP_CODE',

  // 用户信息 - 重置 TOTP SecretKey
  ProfileUserResetQrCode: 'PROFILE_USER_RESET_QR_CODE',

  // 索引 - 代付渠道商
  IndexingWithdrawVendor: 'INDEXING_WITHDRAW_VENDOR',

  // 索引 - 商户ALL
  IndexingMerchantall: 'INDEXING_MERCHANTALL',

  // 索引 - 渠道(依狀態)
  IndexingChannelByStatus: 'INDEXING_CHANNEL_BY_STATUS',

  // 代付订单 - 通知
  WithdrawOrderNotify: 'WITHDRAW_ORDER_NOTIFY',

  // 索引 - 踢出
  UserKick: 'USER_KICK',

  // 資訊
  VersionGet: 'VERSION_GET',

  // 商戶日誌
  MerChantLog: 'MERCHANT_LOG',

  // 商戶日誌列表
  MerChantLogList: 'MERCHANT_LOG_LIST',

  // 代付訂單支付失敗按鈕
  WithdrawOrderFailStatus: 'WITHDRAW_ORDER_FAIL_STATUS',

  // 列表页面上点击追踪状态修改
  AccountTraceStatusUpdate: 'ACCOUNT_TRACE_STATUS_UPDATE',

  // 新增检测连线状态接口(点击"连线刷新"使用)
  AccountCheckConnection: 'ACCOUNT_CHECK_CONNECTION',

  // 代付渠道 - 追踪状态更新
  WithdrawChannelTraceStatusUpdate: 'WITHDRAW_CHANNEL_TRACE_STATUS_UPDATE',

  // 代付渠道 - 刷新追踪状态
  WithdrawChannelCheckConnection: 'WITHDRAW_CHANNEL_CHECK_CONNECTION',

  // 支付订单按钮"查看日志"
  PayOrderHttpLog: 'PAY_ORDER_HTTP_LOG',

  // 代付订单按钮"查看日志"
  WithdrawOrderHttpLog: 'WITHDRAW_ORDER_HTTP_LOG'
}

// 對應 db 設定參數
export const DayStatus = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6
}

// 對應 db 設定參數
export const ServiceFeeType = {
  TypeA: 0,
  TypeB: 1
}

// 連線狀態
export const ConnStatus = {
  Good: 'GOOD',
  Timeout: 'TIMEOUT',
  Error: 'ERROR'
}
