import MdInput from '@/components/MDinput/index.vue'
import XLSX from 'xlsx'
import { deepClone } from '@/utils'
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
          product: '',
          productAmount: '',
          productPayment: '',
          paymentPayment: '',
          paymentAmount: '',
          productInfoDate: '',
          paymentInfoDate: ''
        },
        value: {
          order: '',
          name: '',
          product: '',
          productAmount: '',
          productPayment: '',
          paymentPayment: '',
          paymentAmount: '',
          productInfoDate: '',
          paymentInfoDate: ''
        }
      },
      tableData: [],
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
            name: '',
            stock: '',
            productInfoColumn: []
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
      // TODO Init
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
    handleAddProductStock() {
      const productStock = deepClone(this.settingDialog.defaultData.productStockDefault)
      for (const productInfoColumnElementIndex of this.settingDialog.data.productInfoColumn) {
        productStock.productInfoColumn.push(this.getHeader(this.settingDialog.productInfoColumn, productInfoColumnElementIndex))
      }
      this.settingDialog.data.productStock.push(productStock)
    },
    handleDeleteProductStock(index) {
      this.settingDialog.data.productStock.splice(index, 1)
    },
    handleConfirmSettingDialog() {
      this.settingDialog.isVisible = false
      this.settingDialog.defaultData.data = deepClone(this.settingDialog.data)
      this.tableData = this.settingDialog.defaultData.data.productInfo.data
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
      this.reconcile(this.settingDialog.data.paymentInfo.data, this.settingDialog.data.productInfo.data, {
        product: this.tableHeader.value.productPayment,
        payment: this.tableHeader.value.paymentPayment
      }, {
        product: this.tableHeader.value.productInfoDate,
        payment: this.tableHeader.value.paymentInfoDate
      }, {
        product: this.tableHeader.value.productAmount,
        payment: this.tableHeader.value.paymentAmount
      })
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
    reconcile(products, payments, accountField, dateField, amountField) {
      products.forEach(product => {
        const productDate = formatDateAsStart(product[dateField.product])
        payments.forEach(payment => {
          const paymentDate = formatDateAsStart(payment[dateField.payment])

          if (
            payment[accountField.payment].endsWith(product[accountField.product]) &&
            paymentDate === productDate &&
            parseFloat(payment[amountField.payment]) === parseFloat(product[amountField.product])
          ) {
            product['已匯款'] = true
            product['匯款正確日期'] = formatDate(payment[dateField.payment])
          } else {
            product['已匯款'] = false
          }
        })
      })

      return products
    }
    // reconciliation(productData, paymentData, accountColumnName, dateColumnName, moneyColumnName) {
    //   // 對帳
    //   for (const productRowData in productData) {
    //     paymentData.find(item => {
    //       const paymentAccount = item[accountColumnName.payment].slice(11, 16)
    //       const productAccount = productRowData[accountColumnName.product]
    //       if (paymentAccount === productAccount) {
    //         const paymentDate = formatDateAsStart(new Date(item[dateColumnName.payment]))
    //         const paymentMoney = item[moneyColumnName.payment]
    //
    //         const productDate = formatDateAsStart(new Date(productRowData[dateColumnName.product]))
    //         const productMoney = item[moneyColumnName.product]
    //
    //         if (paymentDate === productDate) {
    //           if (paymentMoney === productMoney) {
    //             productRowData[dateColumnName.product] = formatDate(new Date(productRowData[dateColumnName.product]))
    //             return true
    //           }
    //         }
    //       }
    //       return false
    //     })
    //   }
    // }
  }
}

