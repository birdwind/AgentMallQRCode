export default {
  name: 'system-info',
  components: {},
  props: [],
  data() {
    return {
      tableData: [{
        system: 'system.info.frontend',
        version: '20230417.1.0'
      },
      {
        system: 'system.info.backend',
        version: '20230326.1.0'
      }],
      paging: {
        isLoading: false,
        totalElements: null,
        query: {
          pageSize: 20,
          pageNum: 0,
          condition: 0,
          up: false
        }
      }
    }
  },
  computed: {},
  created() {},
  mounted() {
  },
  methods: {}
}

