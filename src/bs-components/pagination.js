export default {
  name: 'pagination',
  template: `
    <div class="pagination-container">
      <el-pagination
        v-if="showHidden"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage + 1"
        :page-sizes="pageSizes"
        :page-size="thePageSize"
        :page-count="thePageCount"
        layout="total, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  `,
  props: {
    currentPage: Number,
    pageSize: Number,
    total: Number,
    onChangePage: Function,
    onChangePageSize: Function,
    isShowPageSize: false
  },
  data() {
    return {
      pageSizes: [10, 20, 30, 50],
      showHidden: true // 分頁 bug 修復 (透過按鈕切換指定頁數後分頁會壞掉)
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('on-change-page-size', val)
    },
    handleCurrentChange(val) {
      // 分頁 bug 修復 (透過按鈕切換指定頁數後分頁會壞掉)
      this.showHidden = false
      this.$emit('on-change-page', val - 1)
      // 分頁 bug 修復 (透過按鈕切換指定頁數後分頁會壞掉)
      this.$nextTick(() => {
        this.showHidden = true
      })
    }
  },
  computed: {
    thePageSize() {
      return this.pageSize || 20
    },
    thePageCount() {
      return this.total / (this.pageSize || 20) +
        (this.total % (this.pageSize || 20) > 0 ? 1 : 0)
    }
  }
}
