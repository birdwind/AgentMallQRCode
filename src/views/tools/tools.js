import MdInput from '@/components/MDinput/index.vue'
import XLSX from 'xlsx'
import { deepClone, generateUUID } from '@/utils'
import { getJsDateFromExcel } from 'excel-date-to-js'
import { formatDate, formatDateAsStart } from '@/utils/format'

export default {
  name: 'tools',
  components: { MdInput },
  props: [],
  data() {
    return {
      paging: {
        isLoading: false,
        query: {}
      },
      tableHeader: {
        key: {
          order: '',
          name: '',
          quantity: '',
          product: '',
          productAmount: '',
          productPayment: '',
          paymentPayment: '',
          paymentAmount: '',
          productInfoDate: '',
          paymentInfoDate: ''
        },
        value: {
          order: '順序',
          name: '',
          quantity: '',
          product: 'product',
          productAmount: '',
          productPayment: '',
          paymentPayment: '',
          paymentAmount: '',
          productInfoDate: '',
          paymentInfoDate: ''
        }
      },
      tableData: [],
      tableDataUnSorted: [],
      settingDialog: {
        isVisible: false,
        isLoading: false,
        rules: {},
        productInfoColumn: [],
        paymentInfoColumn: [],
        data: {},
        temp: getJsDateFromExcel(44928.28681712963),
        defaultData: {
          data: {
            productInfo: {
              data: []
            },
            paymentInfo: {
              data: []
            },
            productInfoColumn: [],
            productStock: []
          },
          productStockDefault: {
            productInfoColumn: [],
            stock: []
          },
          stockDefault: {
            name: '',
            quantity: 0
          }
        }
      },
      previewDialog: {
        title: '',
        isVisible: false,
        isLoading: false,
        data: null
      }
    }
  },
  computed: {
    wishColumn() {
      const header = []
      for (const productStockItem of this.settingDialog.defaultData.data.productStock) {
        for (const columnName of productStockItem.productInfoColumn) {
          if (header.indexOf(columnName) < 0) {
            header.push(columnName)
          }
        }
      }
      return header
    }
  },
  mounted() {

  },
  watch: {
    'tableHeader.key.name': {
      handler: function(val) {
        this.setTableColumnValue('name', this.settingDialog.productInfoColumn, val)
      }
    },
    'tableHeader.key.quantity': {
      handler: function(val) {
        this.setTableColumnValue('quantity', this.settingDialog.productInfoColumn, val)
      }
    },
    'tableHeader.key.product': {
      handler: function(val) {
        this.setTableColumnValue('product', this.settingDialog.productInfoColumn, val)
      }
    },
    'tableHeader.key.productAmount': {
      handler: function(val) {
        this.setTableColumnValue('productAmount', this.settingDialog.productInfoColumn, val)
      }
    },
    'tableHeader.key.productPayment': {
      handler: function(val) {
        this.setTableColumnValue('productPayment', this.settingDialog.productInfoColumn, val)
      }
    },
    'tableHeader.key.productInfoDate': {
      handler: function(val) {
        this.setTableColumnValue('productInfoDate', this.settingDialog.productInfoColumn, val)
      }
    },
    'tableHeader.key.paymentAmount': {
      handler: function(val) {
        this.setTableColumnValue('paymentAmount', this.settingDialog.paymentInfoColumn, val)
      }
    },
    'tableHeader.key.paymentPayment': {
      handler: function(val) {
        this.setTableColumnValue('paymentPayment', this.settingDialog.paymentInfoColumn, val)
      }
    },
    'tableHeader.key.paymentInfoDate': {
      handler: function(val) {
        this.setTableColumnValue('paymentInfoDate', this.settingDialog.paymentInfoColumn, val)
      }
    }
  },
  methods: {
    getCssStyle(cell) {
      // TODO Init
    },
    onSortChange(column) {
      if (column.order) {
        if (!column.prop || this.tableData.length <= 1) {
          return
        }

        const list = this.tableData.slice(0, this.tableData.length - 1)
        const summaryList = this.tableData.slice(this.tableData.length - 1, this.tableData.length)
        list.sort((a, b) => {
          const aValue = a[column.prop]
          const bValue = b[column.prop]
          if (column.order === 'ascending') {
            return aValue === bValue ? 0 : aValue < bValue ? -1 : 1
          } else {
            return aValue === bValue ? 0 : aValue > bValue ? -1 : 1
          }
        })
        list.push(summaryList[0])
        this.tableData = list
      } else {
        this.tableData = deepClone(this.tableDataUnSorted)
      }
    },
    handleTableDataUpdate(list) {
      this.tableData = list
      this.tableDataUnSorted = deepClone(list)
    },
    handleSettingDialog() {
      this.settingDialog.isVisible = true
      this.settingDialog.data = deepClone(this.settingDialog.defaultData.data)
    },
    handleUploadProductInfo() {
      this.$refs['product-info-upload-input'].click()
    },
    handleUploadPaymentInfo() {
      this.$refs['payment-info-upload-input'].click()
    },
    handlePreview(fileTag, fileData) {
      this.previewDialog.isVisible = true
      this.previewDialog.data = fileData
      this.previewDialog.title = fileTag === 'productInfo' ? '訂購資訊' : '對帳資訊'
    },
    handleAddProductStockCategory() {
      const productStock = deepClone(this.settingDialog.defaultData.productStockDefault)
      const stock = deepClone(this.settingDialog.defaultData.stockDefault)
      for (const productInfoColumnElementIndex of this.settingDialog.data.productInfoColumn) {
        productStock.productInfoColumn.push(this.getHeader(this.settingDialog.productInfoColumn, productInfoColumnElementIndex))
      }
      productStock.stock.push(stock)
      this.settingDialog.data.productStock.push(productStock)
    },
    handleDeleteProductStockCategory(index) {
      this.settingDialog.data.productStock.splice(index, 1)
    },
    handleAddProductStock(index) {
      const stock = deepClone(this.settingDialog.defaultData.stockDefault)
      this.settingDialog.data.productStock[index].stock.push(stock)
    },
    handleDeleteProductStock(index, stockIndex) {
      this.settingDialog.data.productStock[index].stock.splice(stockIndex, 1)
    },
    handleConfirmSettingDialog() {
      this.settingDialog.isVisible = false
      this.settingDialog.defaultData.data = deepClone(this.settingDialog.data)
      this.handleTableDataUpdate(this.settingDialog.defaultData.data.productInfo.data)
    },
    handleUpload(fileTag, e) {
      const files = e.target.files
      const rawFile = files[0] // only use files[0]
      if (!rawFile) return
      this.settingDialog.isLoading = true
      this.excelReader(rawFile).then((file) => {
        if (fileTag === 'productInfo') {
          this.settingDialog.data.productInfo = file
          this.settingDialog.productInfoColumn = []
          for (let i = 0; i < file.header.length; i++) {
            this.settingDialog.productInfoColumn.push({ id: i, name: file.header[i] })
          }
        } else if (fileTag === 'paymentInfo') {
          this.settingDialog.data.paymentInfo = file

          this.settingDialog.paymentInfoColumn = []
          for (let i = 0; i < file.header.length; i++) {
            this.settingDialog.paymentInfoColumn.push({ id: i, name: file.header[i] })
          }
        }
      }).finally(() => {
        this.settingDialog.isLoading = false
      })
    },
    handleAllocation: function() {
      // 對帳
      this.reconcile(this.settingDialog.data.productInfo.data, this.settingDialog.data.paymentInfo.data, {
        product: this.tableHeader.value.productPayment,
        payment: this.tableHeader.value.paymentPayment
      }, {
        product: this.tableHeader.value.productInfoDate,
        payment: this.tableHeader.value.paymentInfoDate
      }, {
        product: this.tableHeader.value.productAmount,
        payment: this.tableHeader.value.paymentAmount
      })

      // 排序規則
      this.sortOrderList(this.tableData, 3)

      // 配給
      this.distributeProducts(this.tableData, this.settingDialog.data.productStock)
    },
    excelReader(excelFileData) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = e => {
          const data = e.target.result
          const workbook = XLSX.read(data, { type: 'array', cellText: false, cellDates: true })
          const firstSheetName = workbook.SheetNames[0]
          const worksheet = workbook.Sheets[firstSheetName]
          const response = {}
          response.header = this.getHeaderRow(worksheet)
          response.data = XLSX.utils.sheet_to_json(worksheet, { raw: false, dateNF: 'yyyy/MM/dd hh:mm:ss' })
          response.data.forEach(item => {
            item.uuid = generateUUID()
          })
          resolve(response)
        }
        reader.readAsArrayBuffer(excelFileData)
      })
    },
    setTableColumnValue(columnKey, row, index) {
      this.tableHeader.value[columnKey] = this.getHeader(row, index)
    },
    getHeaderRow(sheet) {
      const headers = []
      const range = XLSX.utils.decode_range(sheet['!ref'])
      let C
      const R = range.s.r
      /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) { /* walk every column in the range */
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
        /* find the cell in the first row */
        let hdr = 'UNKNOWN ' + C // <-- replace with your desired default
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
        headers.push(hdr)
      }
      return headers
    },
    getHeader(row, columnIndex) {
      return row[columnIndex].name
    },
    reconcile(productList, paymentList, accountField, dateField, amountField) {
      // 對帳
      const products = deepClone(productList)
      const payments = deepClone(paymentList)

      products.forEach(product => {
        const productDate = formatDateAsStart(product[dateField.product])
        let isReconciled = '否'
        let correctPaymentDate = ''

        payments.forEach(payment => {
          // console.log('交易日期', `${payment[dateField.payment]}, ${formatDateAsStart(payment[dateField.payment])}`)
          const paymentDate = formatDateAsStart(payment[dateField.payment])
          const paymentAccountLastFive = payment[accountField.payment] ? payment[accountField.payment].substr(11, 5) : ''

          // console.log('後五碼', `${paymentAccountLastFive}, ${product[accountField.product]}`)
          // console.log('日期', `${paymentDate}, ${productDate}`)
          // console.log('金額', `${payment[amountField.payment]}, ${product[amountField.product]}`)

          if (paymentAccountLastFive === product[accountField.product] &&
            paymentDate === productDate &&
            parseFloat(payment[amountField.payment]) === parseFloat(product[amountField.product])) {
            // console.log('後五碼', `${paymentAccountLastFive}, ${product[accountField.product]}`)
            // console.log('日期', `${paymentDate}, ${productDate}`)
            // console.log('金額', `${payment[amountField.payment]}, ${product[amountField.product]}`)

            isReconciled = '是'
            correctPaymentDate = formatDate(payment[dateField.payment])
          }
        })

        product['已匯款'] = isReconciled
        product['到帳時間'] = correctPaymentDate
        product[this.tableHeader.value.order] = -1
      })

      this.handleTableDataUpdate(deepClone(products))
    },
    sortOrderList(orderList, bundleQuantity) {
      const tempOrderList = deepClone(orderList.filter(order => order['已匯款'] === '是'))
      tempOrderList.sort((a, b) => new Date(a['到帳時間']) - new Date(b['到帳時間']))

      const bundleList = tempOrderList.filter(order => parseInt(order[this.tableHeader.value.quantity], 10) >= bundleQuantity)
      const unBundleList = tempOrderList.filter(order => parseInt(order[this.tableHeader.value.quantity], 10) < bundleQuantity)

      const sortedOrders = [...unBundleList.slice(0, 10), ...bundleList, ...unBundleList.slice(10)]

      sortedOrders.forEach((sortedOrder, index) => {
        const correspondingOrder = orderList.find(order => order.uuid === sortedOrder.uuid)
        if (correspondingOrder) {
          correspondingOrder[this.tableHeader.value.order] = index
        }
      })
      this.handleTableDataUpdate(this.tableData)
    },
    distributeProducts(orderList, stockList) {
      // orderList = [{ '時間戳記': '2023/04/18 15:08:11', '電子郵件地址': 'tiffany989@gmail.com', '在哪個地方留言訂購的': '三群', 'IG或是FB帳號': 'bbpz19__hn', 'LINE ID': '0979100123ning', 'LINE姓名': 'Serena Hsu', '這是你拆卡團匯款的第幾筆': '拆卡團只匯款1筆', '此筆購買的數量': '24', '全部購買總包數(請按照當初匯款所有筆數的總包數填寫)': '拆卡24包', '是否有分開多次匯款': '否', '是否有刮刮卡不拆卡團': '否', '寄送方式 (國內運費皆為到貨時二補下單!!!!)': '台北面交', '訂購人姓名': '徐寧', '訂購人手機': '0902186123', '匯款日期': '2023/04/18 00:00:00', '匯款後五碼': '23644', '匯款金額': '3600', '多次分開匯款者請務必匯款幾次填單幾次': '好的', '照片卡 [許願1]': '赫1', '照片卡 [許願2]': '赫2', '照片卡 [許願3]': '赫3', '照片卡 [許願4]': '海1', '照片卡 [許願5]': '海2', '照片卡 [許願6]': '海3', '照片卡 [許願7]': '雲1', '照片卡 [許願8]': '雲2', '照片卡 [許願9]': '雲3', '照片卡 [許願10]': '旭1', '照片卡 [許願11]': '旭2', '照片卡 [許願12]': '旭3', '照片卡 [許願13]': '圭1', '照片卡 [許願14]': '圭2', '照片卡 [許願15]': '圭3', '照片卡 [許願16]': '特1', '照片卡 [許願17]': '特2', '照片卡 [許願18]': '特3', '照片卡 [許願19]': '源1', '照片卡 [許願20]': '源2', '照片卡 [許願21]': '源3', '照片卡 [許願22]': '童1', '照片卡 [許願23]': '童2', '照片卡 [許願24]': '童3', '字卡許願順序(8人皆要完整填寫) [許願1]': '赫', '字卡許願順序(8人皆要完整填寫) [許願2]': '海', '字卡許願順序(8人皆要完整填寫) [許願3]': '雲', '字卡許願順序(8人皆要完整填寫) [許願4]': '圭', '字卡許願順序(8人皆要完整填寫) [許願5]': '旭', '字卡許願順序(8人皆要完整填寫) [許願6]': '特', '字卡許願順序(8人皆要完整填寫) [許願7]': '源', '字卡許願順序(8人皆要完整填寫) [許願8]': '童', 'uuid': '55409146-1416-4956-ac8e-ddd5444e3cd7', '已匯款': '是', '到帳時間': '2023-04-18 12:57:00', '順序': 6 }, { '時間戳記': '2023/04/18 19:04:32', '電子郵件地址': 'a0909204399@gmail.com', '在哪個地方留言訂購的': 'IG', 'IG或是FB帳號': 'aiden_7.20', 'LINE ID': '0909204399', 'LINE姓名': '蔡', '這是你拆卡團匯款的第幾筆': '拆卡團只匯款1筆', '此筆購買的數量': '1', '全部購買總包數(請按照當初匯款所有筆數的總包數填寫)': '不拆1+拆卡1', '是否有分開多次匯款': '否', '是否有刮刮卡不拆卡團': '是', '寄送方式 (國內運費皆為到貨時二補下單!!!!)': '7-11賣貨便', '訂購人姓名': '蔡謹憶', '訂購人手機': '0909204399', '匯款日期': '2023/04/18 00:00:00', '匯款後五碼': '62287', '匯款金額': '130', '多次分開匯款者請務必匯款幾次填單幾次': '好的', '照片卡 [許願1]': '赫3', '照片卡 [許願2]': '赫2', '照片卡 [許願3]': '赫1', '照片卡 [許願4]': '雲1', '照片卡 [許願5]': '雲2', '照片卡 [許願6]': '雲3', '照片卡 [許願7]': '海3', '照片卡 [許願8]': '海2', '照片卡 [許願9]': '海1', '照片卡 [許願10]': '圭2', '照片卡 [許願11]': '圭3', '照片卡 [許願12]': '圭1', '照片卡 [許願13]': '特1', '照片卡 [許願14]': '特2', '照片卡 [許願15]': '特3', '照片卡 [許願16]': '旭3', '照片卡 [許願17]': '旭2', '照片卡 [許願18]': '旭1', '照片卡 [許願19]': '源3', '照片卡 [許願20]': '源2', '照片卡 [許願21]': '源1', '照片卡 [許願22]': '童1', '照片卡 [許願23]': '童2', '照片卡 [許願24]': '童3', '字卡許願順序(8人皆要完整填寫) [許願1]': '赫', '字卡許願順序(8人皆要完整填寫) [許願2]': '雲', '字卡許願順序(8人皆要完整填寫) [許願3]': '海', '字卡許願順序(8人皆要完整填寫) [許願4]': '圭', '字卡許願順序(8人皆要完整填寫) [許願5]': '特', '字卡許願順序(8人皆要完整填寫) [許願6]': '旭', '字卡許願順序(8人皆要完整填寫) [許願7]': '源', '字卡許願順序(8人皆要完整填寫) [許願8]': '童', 'uuid': 'ae3fdac2-7d63-46ac-a778-655318d3eab5', '已匯款': '是', '到帳時間': '2023-04-18 01:33:00', '順序': 1 }, { '時間戳記': '2023/04/18 19:04:38', '電子郵件地址': 'hi830107@yahoo.com.tw', '在哪個地方留言訂購的': 'IG', 'IG或是FB帳號': 'qzvi1994', 'LINE ID': 'aaaaaa8317', 'LINE姓名': 'wu', '這是你拆卡團匯款的第幾筆': '拆卡團只匯款1筆', '此筆購買的數量': '1', '全部購買總包數(請按照當初匯款所有筆數的總包數填寫)': '拆卡1包', '是否有分開多次匯款': '否', '是否有刮刮卡不拆卡團': '否', '寄送方式 (國內運費皆為到貨時二補下單!!!!)': '合併「寄送」與其他購買的商品', '訂購人姓名': '吳沁臻', '訂購人手機': '0976159538', '匯款日期': '2023/04/18 00:00:00', '匯款後五碼': '16042', '匯款金額': '150', '多次分開匯款者請務必匯款幾次填單幾次': '好的', '照片卡 [許願1]': '赫1', '照片卡 [許願2]': '赫2', '照片卡 [許願3]': '赫3', '照片卡 [許願4]': '海1', '照片卡 [許願5]': '海2', '照片卡 [許願6]': '海3', '照片卡 [許願7]': '雲1', '照片卡 [許願8]': '雲2', '照片卡 [許願9]': '雲3', '照片卡 [許願10]': '圭1', '照片卡 [許願11]': '圭2', '照片卡 [許願12]': '圭3', '照片卡 [許願13]': '特1', '照片卡 [許願14]': '特2', '照片卡 [許願15]': '特3', '照片卡 [許願16]': '童1', '照片卡 [許願17]': '童2', '照片卡 [許願18]': '童3', '照片卡 [許願19]': '旭1', '照片卡 [許願20]': '旭2', '照片卡 [許願21]': '旭3', '照片卡 [許願22]': '源1', '照片卡 [許願23]': '源2', '照片卡 [許願24]': '源3', '字卡許願順序(8人皆要完整填寫) [許願1]': '赫', '字卡許願順序(8人皆要完整填寫) [許願2]': '海', '字卡許願順序(8人皆要完整填寫) [許願3]': '雲', '字卡許願順序(8人皆要完整填寫) [許願4]': '圭', '字卡許願順序(8人皆要完整填寫) [許願5]': '特', '字卡許願順序(8人皆要完整填寫) [許願6]': '童', '字卡許願順序(8人皆要完整填寫) [許願7]': '旭', '字卡許願順序(8人皆要完整填寫) [許願8]': '源', '合併寄送或面交的東西': '4/17匯款，立牌組-赫*1', 'uuid': 'de1cbf66-2f5d-43bb-b2a7-e5a79eda9318', '已匯款': '是', '到帳時間': '2023-04-18 00:57:00', '順序': 0 }, { '時間戳記': '2023/04/18 19:04:42', '電子郵件地址': 'bb980528@gmail.com', '在哪個地方留言訂購的': 'IG', 'IG或是FB帳號': 'rou_030410/槿', 'LINE ID': 'qawsedrf28 ', 'LINE姓名': '槿', '這是你拆卡團匯款的第幾筆': '拆卡團只匯款1筆', '此筆購買的數量': '1', '全部購買總包數(請按照當初匯款所有筆數的總包數填寫)': '1', '是否有分開多次匯款': '否', '是否有刮刮卡不拆卡團': '否', '寄送方式 (國內運費皆為到貨時二補下單!!!!)': '7-11賣貨便', '訂購人姓名': '李槿柔', '訂購人手機': '0902009837', '匯款日期': '2023/04/18 00:00:00', '匯款後五碼': '74381', '匯款金額': '130', '多次分開匯款者請務必匯款幾次填單幾次': '好的', '照片卡 [許願1]': '雲2', '照片卡 [許願2]': '雲3', '照片卡 [許願3]': '雲1', '照片卡 [許願4]': '圭2', '照片卡 [許願5]': '圭3', '照片卡 [許願6]': '圭1', '照片卡 [許願7]': '赫2', '照片卡 [許願8]': '赫3', '照片卡 [許願9]': '赫1', '照片卡 [許願10]': '特3', '照片卡 [許願11]': '特2', '照片卡 [許願12]': '特1', '照片卡 [許願13]': '海3', '照片卡 [許願14]': '海2', '照片卡 [許願15]': '海1', '照片卡 [許願16]': '旭3', '照片卡 [許願17]': '旭2', '照片卡 [許願18]': '旭1', '照片卡 [許願19]': '童3', '照片卡 [許願20]': '童2', '照片卡 [許願21]': '童1', '照片卡 [許願22]': '源1', '照片卡 [許願23]': '源2', '照片卡 [許願24]': '源3', '字卡許願順序(8人皆要完整填寫) [許願1]': '雲', '字卡許願順序(8人皆要完整填寫) [許願2]': '圭', '字卡許願順序(8人皆要完整填寫) [許願3]': '赫', '字卡許願順序(8人皆要完整填寫) [許願4]': '特', '字卡許願順序(8人皆要完整填寫) [許願5]': '海', '字卡許願順序(8人皆要完整填寫) [許願6]': '源', '字卡許願順序(8人皆要完整填寫) [許願7]': '旭', '字卡許願順序(8人皆要完整填寫) [許願8]': '童', '備註': '感謝', 'uuid': 'e12fc88e-ed7b-4a0f-a0f6-b67f63f8f896', '已匯款': '是', '到帳時間': '2023-04-18 06:45:00', '順序': 2 }, { '時間戳記': '2023/04/18 19:04:45', '電子郵件地址': 'lisaxji6@gmail.com', '在哪個地方留言訂購的': '一群', 'LINE ID': '0987457175', 'LINE姓名': '曲', '這是你拆卡團匯款的第幾筆': '拆卡團只匯款1筆', '此筆購買的數量': '1', '全部購買總包數(請按照當初匯款所有筆數的總包數填寫)': '拆卡1包', '是否有分開多次匯款': '否', '是否有刮刮卡不拆卡團': '否', '寄送方式 (國內運費皆為到貨時二補下單!!!!)': '台北面交', '訂購人姓名': '羅家曲', '訂購人手機': '0987457175', '匯款日期': '2023/04/18 00:00:00', '匯款後五碼': '56416', '匯款金額': '150', '多次分開匯款者請務必匯款幾次填單幾次': '好的', '照片卡 [許願1]': '海3', '照片卡 [許願2]': '海1', '照片卡 [許願3]': '海2', '照片卡 [許願4]': '旭3', '照片卡 [許願5]': '旭2', '照片卡 [許願6]': '旭1', '照片卡 [許願7]': '特1', '照片卡 [許願8]': '特2', '照片卡 [許願9]': '特3', '照片卡 [許願10]': '雲1', '照片卡 [許願11]': '雲2', '照片卡 [許願12]': '雲3', '照片卡 [許願13]': '圭1', '照片卡 [許願14]': '圭2', '照片卡 [許願15]': '圭3', '照片卡 [許願16]': '赫1', '照片卡 [許願17]': '赫2', '照片卡 [許願18]': '赫3', '照片卡 [許願19]': '源1', '照片卡 [許願20]': '源2', '照片卡 [許願21]': '源3', '照片卡 [許願22]': '童1', '照片卡 [許願23]': '童2', '照片卡 [許願24]': '童3', '字卡許願順序(8人皆要完整填寫) [許願1]': '海', '字卡許願順序(8人皆要完整填寫) [許願2]': '旭', '字卡許願順序(8人皆要完整填寫) [許願3]': '圭', '字卡許願順序(8人皆要完整填寫) [許願4]': '赫', '字卡許願順序(8人皆要完整填寫) [許願5]': '特', '字卡許願順序(8人皆要完整填寫) [許願6]': '雲', '字卡許願順序(8人皆要完整填寫) [許願7]': '源', '字卡許願順序(8人皆要完整填寫) [許願8]': '童', 'uuid': 'e988795d-4d5c-4037-8690-026f7893a5ca', '已匯款': '是', '到帳時間': '2023-04-18 09:35:00', '順序': 3 }, { '時間戳記': '2023/04/18 19:04:55', '電子郵件地址': 'joyce920101@icloud.com', '在哪個地方留言訂購的': '三群', 'LINE ID': 'joyce920101', 'LINE姓名': '羿綾🌙', '這是你拆卡團匯款的第幾筆': '拆卡團只匯款1筆', '此筆購買的數量': '24', '全部購買總包數(請按照當初匯款所有筆數的總包數填寫)': 'SJ 安可場第二次周邊刮刮卡包 拆卡24包', '是否有分開多次匯款': '否', '是否有刮刮卡不拆卡團': '否', '寄送方式 (國內運費皆為到貨時二補下單!!!!)': '7-11賣貨便', '訂購人姓名': '黃羿綾', '訂購人手機': '0975961883', '匯款日期': '2023/04/18 00:00:00', '匯款後五碼': '78325', '匯款金額': '3600', '多次分開匯款者請務必匯款幾次填單幾次': '好的', '照片卡 [許願1]': '赫1', '照片卡 [許願2]': '赫2', '照片卡 [許願3]': '赫3', '照片卡 [許願4]': '海1', '照片卡 [許願5]': '海2', '照片卡 [許願6]': '海3', '照片卡 [許願7]': '雲1', '照片卡 [許願8]': '雲2', '照片卡 [許願9]': '雲3', '照片卡 [許願10]': '圭1', '照片卡 [許願11]': '圭2', '照片卡 [許願12]': '圭3', '照片卡 [許願13]': '旭1', '照片卡 [許願14]': '旭2', '照片卡 [許願15]': '旭3', '照片卡 [許願16]': '特1', '照片卡 [許願17]': '特2', '照片卡 [許願18]': '特3', '照片卡 [許願19]': '雲1', '照片卡 [許願20]': '童2', '照片卡 [許願21]': '童3', '照片卡 [許願22]': '源1', '照片卡 [許願23]': '源2', '照片卡 [許願24]': '源3', '字卡許願順序(8人皆要完整填寫) [許願1]': '赫', '字卡許願順序(8人皆要完整填寫) [許願2]': '海', '字卡許願順序(8人皆要完整填寫) [許願3]': '雲', '字卡許願順序(8人皆要完整填寫) [許願4]': '圭', '字卡許願順序(8人皆要完整填寫) [許願5]': '旭', '字卡許願順序(8人皆要完整填寫) [許願6]': '特', '字卡許願順序(8人皆要完整填寫) [許願7]': '童', '字卡許願順序(8人皆要完整填寫) [許願8]': '源', 'uuid': '4d83f5f8-d5c6-4182-b6aa-8b136d2b06c7', '已匯款': '是', '到帳時間': '2023-04-18 14:20:00', '順序': 7 }, { '時間戳記': '2023/04/18 19:06:30', '電子郵件地址': 'nestea50325@gmail.com', '在哪個地方留言訂購的': '三群', 'LINE ID': 'Chensik0618', 'LINE姓名': 'Chen', '這是你拆卡團匯款的第幾筆': '拆卡團只匯款1筆', '此筆購買的數量': '1', '全部購買總包數(請按照當初匯款所有筆數的總包數填寫)': '拆卡*1', '是否有分開多次匯款': '否', '是否有刮刮卡不拆卡團': '否', '寄送方式 (國內運費皆為到貨時二補下單!!!!)': '7-11賣貨便', '訂購人姓名': '王苑蓁', '訂購人手機': '0987453099', '匯款日期': '2023/04/18 00:00:00', '匯款後五碼': '35185', '匯款金額': '130', '多次分開匯款者請務必匯款幾次填單幾次': '好的', '照片卡 [許願1]': '圭3', '照片卡 [許願2]': '圭2', '照片卡 [許願3]': '圭1', '照片卡 [許願4]': '赫3', '照片卡 [許願5]': '赫1', '照片卡 [許願6]': '赫2', '照片卡 [許願7]': '海3', '照片卡 [許願8]': '海2', '照片卡 [許願9]': '海1', '照片卡 [許願10]': '雲3', '照片卡 [許願11]': '雲2', '照片卡 [許願12]': '雲1', '照片卡 [許願13]': '特3', '照片卡 [許願14]': '特2', '照片卡 [許願15]': '特1', '照片卡 [許願16]': '旭3', '照片卡 [許願17]': '旭2', '照片卡 [許願18]': '旭1', '照片卡 [許願19]': '源3', '照片卡 [許願20]': '源2', '照片卡 [許願21]': '源1', '照片卡 [許願22]': '童3', '照片卡 [許願23]': '童2', '照片卡 [許願24]': '童1', '字卡許願順序(8人皆要完整填寫) [許願1]': '圭', '字卡許願順序(8人皆要完整填寫) [許願2]': '赫', '字卡許願順序(8人皆要完整填寫) [許願3]': '海', '字卡許願順序(8人皆要完整填寫) [許願4]': '雲', '字卡許願順序(8人皆要完整填寫) [許願5]': '特', '字卡許願順序(8人皆要完整填寫) [許願6]': '旭', '字卡許願順序(8人皆要完整填寫) [許願7]': '源', '字卡許願順序(8人皆要完整填寫) [許願8]': '童', 'uuid': '1fa2f7ac-05f4-45a2-8141-f003b48782ac', '已匯款': '是', '到帳時間': '2023-04-18 16:46:00', '順序': 5 }, { '時間戳記': '2023/04/18 19:07:50', '電子郵件地址': 'ssdd3231@gmail.com', '在哪個地方留言訂購的': 'IG', 'IG或是FB帳號': 'peggylu0417', 'LINE ID': 'peggylu0417', 'LINE姓名': 'Peggy Lu', '這是你拆卡團匯款的第幾筆': '多次匯款的第1筆', '此筆購買的數量': '1', '全部購買總包數(請按照當初匯款所有筆數的總包數填寫)': '拆卡3包', '是否有分開多次匯款': '是', '是否有刮刮卡不拆卡團': '否', '寄送方式 (國內運費皆為到貨時二補下單!!!!)': '7-11賣貨便', '訂購人姓名': '呂珮綺', '訂購人手機': '0911194366', '匯款日期': '2023/04/18 00:00:00', '匯款後五碼': '52681', '匯款金額': '130', '多次分開匯款者請務必匯款幾次填單幾次': '好的', '照片卡 [許願1]': '源1', '照片卡 [許願2]': '源2', '照片卡 [許願3]': '源3', '照片卡 [許願4]': '特1', '照片卡 [許願5]': '特2', '照片卡 [許願6]': '特3', '照片卡 [許願7]': '雲1', '照片卡 [許願8]': '雲2', '照片卡 [許願9]': '雲3', '照片卡 [許願10]': '童1', '照片卡 [許願11]': '童2', '照片卡 [許願12]': '童3', '照片卡 [許願13]': '赫1', '照片卡 [許願14]': '赫2', '照片卡 [許願15]': '赫3', '照片卡 [許願16]': '海1', '照片卡 [許願17]': '海2', '照片卡 [許願18]': '海3', '照片卡 [許願19]': '旭1', '照片卡 [許願20]': '旭2', '照片卡 [許願21]': '旭3', '照片卡 [許願22]': '圭1', '照片卡 [許願23]': '圭2', '照片卡 [許願24]': '圭3', '字卡許願順序(8人皆要完整填寫) [許願1]': '源', '字卡許願順序(8人皆要完整填寫) [許願2]': '特', '字卡許願順序(8人皆要完整填寫) [許願3]': '雲', '字卡許願順序(8人皆要完整填寫) [許願4]': '童', '字卡許願順序(8人皆要完整填寫) [許願5]': '赫', '字卡許願順序(8人皆要完整填寫) [許願6]': '海', '字卡許願順序(8人皆要完整填寫) [許願7]': '旭', '字卡許願順序(8人皆要完整填寫) [許願8]': '圭', 'uuid': '161a5fd3-2301-470b-896a-c434b0d77ba4', '已匯款': '是', '到帳時間': '2023-04-18 15:51:00', '順序': 4 }, { '時間戳記': '2023/04/18 19:07:51', '電子郵件地址': 'ruw6219570@gmail.com', '在哪個地方留言訂購的': 'IG', 'IG或是FB帳號': '1stop_30', 'LINE ID': '076219570', 'LINE姓名': '姜依廷', '這是你拆卡團匯款的第幾筆': '拆卡團只匯款1筆', '此筆購買的數量': '3', '全部購買總包數(請按照當初匯款所有筆數的總包數填寫)': '拆卡3包', '是否有分開多次匯款': '否', '是否有刮刮卡不拆卡團': '否', '寄送方式 (國內運費皆為到貨時二補下單!!!!)': '7-11賣貨便', '訂購人姓名': '姜依廷', '訂購人手機': '0971161332', '匯款日期': '2022/04/18 00:00:00', '匯款後五碼': '97197', '匯款金額': '450', '多次分開匯款者請務必匯款幾次填單幾次': '好的', '照片卡 [許願1]': '圭3', '照片卡 [許願2]': '圭2', '照片卡 [許願3]': '圭1', '照片卡 [許願4]': '海3', '照片卡 [許願5]': '海2', '照片卡 [許願6]': '海1', '照片卡 [許願7]': '赫3', '照片卡 [許願8]': '赫2', '照片卡 [許願9]': '赫1', '照片卡 [許願10]': '雲3', '照片卡 [許願11]': '雲2', '照片卡 [許願12]': '雲1', '照片卡 [許願13]': '旭3', '照片卡 [許願14]': '旭2', '照片卡 [許願15]': '旭1', '照片卡 [許願16]': '特3', '照片卡 [許願17]': '特2', '照片卡 [許願18]': '特1', '照片卡 [許願19]': '源3', '照片卡 [許願20]': '源2', '照片卡 [許願21]': '源1', '照片卡 [許願22]': '童3', '照片卡 [許願23]': '童2', '照片卡 [許願24]': '童1', '字卡許願順序(8人皆要完整填寫) [許願1]': '圭', '字卡許願順序(8人皆要完整填寫) [許願2]': '海', '字卡許願順序(8人皆要完整填寫) [許願3]': '赫', '字卡許願順序(8人皆要完整填寫) [許願4]': '雲', '字卡許願順序(8人皆要完整填寫) [許願5]': '旭', '字卡許願順序(8人皆要完整填寫) [許願6]': '特', '字卡許願順序(8人皆要完整填寫) [許願7]': '源', '字卡許願順序(8人皆要完整填寫) [許願8]': '童', '合併寄送或面交的東西': '無', '備註': '感謝開團', 'uuid': '581b0bcd-6b69-4325-9a72-321628f3f26c', '已匯款': '否', '到帳時間': '', '順序': -1 }]
      // stockList = [{ 'productInfoColumn': ['照片卡 [許願1]', '照片卡 [許願2]', '照片卡 [許願3]'], 'stock': [{ 'name': '赫1', 'quantity': '1' }, { 'name': '赫2', 'quantity': '2' }] }]
      const tempStockList = deepClone(stockList)

      tempStockList.forEach(stockItem => {
        const stockMap = {}
        stockItem.stock.forEach(item => {
          stockMap[item.name] = item.quantity
        })

        stockItem.productInfoColumn.forEach((stockItemColumn, index) => {
          orderList.forEach(orderItem => {
            if (!orderItem.isDone) {
              const productName = orderItem[stockItemColumn]
              if (stockMap[productName] > 0) {
                stockMap[productName] -= 1
                orderItem.isDone = true
                if (orderItem[this.tableHeader.value.product]) {
                  orderItem[this.tableHeader.value.product].push(productName)
                } else {
                  orderItem[this.tableHeader.value.product] = [productName]
                }
              }
            }
          })
        })
      })
      // this.handleTableDataUpdate(orderList)
    }
  }
}
