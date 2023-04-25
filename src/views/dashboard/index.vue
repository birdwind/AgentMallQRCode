<template>
  <div class="dashboard-container">
    <input v-model="barcode" style="background: #FFFFFF;padding: 6px;width: 100%;" placeholder="請輸入條碼">

    <div>
      <span style="color: #FFFFFF">查詢條碼: {{ lastBarcode }}</span>
      <br>
      <span style="color: #FFFFFF">查詢結果: {{ result }}</span>
    </div>
    <div
      style="width: 300px; height: 300px; border: #FFFFFF solid 1px; border-radius: 8px; overflow-y: scroll; padding: 3px 6px;"
    >
      <div
        v-for="(item, index) in resultList.slice().reverse()"
        :key="index"
        style="color: #FFFFFF; display: grid; grid-template-columns: 60% 40%;"
      >
        <span style="text-overflow: ellipsis;">{{ item.barcode }} </span>
        <span style="color: red;">{{ item.orderId }}</span>
      </div>
    </div>
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
      result: '',
      resultList: []
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

      this.result = '搜索中'
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

      if (orderId === '') {
        this.result = '查無單號'
      } else {
        this.result = orderId
      }

      this.lastBarcode = barcodeString
      this.resultList.push({ barcode: barcodeString, orderId: orderId })
      this.barcode = ''
    }
  }
}
</script>
