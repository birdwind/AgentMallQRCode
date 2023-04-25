<template>
  <div class="dashboard-container app-container ">

    <div class="filter-container" style="display: flex;">
      <bs-input v-model="barcode" style="width: 100%;" placeholder="請輸入條碼" />
      <bs-button style="margin-left: 12px;" title="查詢" />
    </div>

    <el-table
      v-loading="isLoading"
      :data="resultList.slice().reverse()"
      :element-loading-text="$t('table.loading')"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column prop="System" label="條碼" min-width="100">
        <template slot-scope="scope">{{ $t(scope.row.barcode) }}</template>
      </el-table-column>
      <el-table-column prop="Version" label="編號" min-width="100" align="center">
        <template slot-scope="scope">{{ scope.row.orderId | isNull }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { GoogleSpreadsheet } from 'google-spreadsheet'

const credentials = require('@/assets/credentials.json')

export default {
  name: 'Dashboard',
  components: {},
  data() {
    return {
      sheetData: null,
      barcode: '',
      lastBarcode: '',
      timer: null,
      resultList: [],
      isLoading: false
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  watch: {
    'barcode': {
      handler: function(val) {
        if (val) {
          if (this.timer) {
            clearTimeout(this.timer)
          }

          this.timer = setTimeout(async() => {
            await this.searchBarCode(val)
          }, 1000)
        }
      }
    }
  },
  methods: {
    async loadGoogleSheet(docId, sheetId) {
      const doc = new GoogleSpreadsheet(docId)
      await doc.useServiceAccountAuth(credentials)
      await doc.loadInfo()
      this.sheetData = await doc.sheetsById[sheetId].getRows()
    },
    async updateGoogleSheetCell(docId, sheetId, row) {
      console.log(row)
      await row.save()
    },
    async searchBarCode(barcodeString) {
      const docId = '1K4BFsJQUcQSRWwL2YoaAtV3_fw-Vc8rJRaDA8SyTuAw'
      const sheetId = '277981836'
      this.isLoading = true
      let orderId = ''
      if (!this.sheetData) {
        await this.loadGoogleSheet(docId, sheetId)
      }
      for (const index in this.sheetData) {
        const tempSheetData = this.sheetData[index]
        if (tempSheetData.單號 === barcodeString) {
          tempSheetData.到貨 = 'true'
          await this.updateGoogleSheetCell(docId, sheetId, tempSheetData).then(() => {
            orderId = tempSheetData.編號
          })
          break
        }
      }

      this.lastBarcode = barcodeString
      this.resultList.push({ barcode: barcodeString, orderId: orderId })
      this.barcode = ''
      this.isLoading = false
    }
  }
}
</script>
