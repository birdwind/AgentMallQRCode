const template = `
        <el-button @click="handleClick" size="mini" class="filter-item" :type="type">
          {{label}}
        </el-button>
    `

const bsButton = {
  name: 'bsButton',
  props: ['title'],
  data() {
    return {
      label: this.title,
      type: 'primary'
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  },
  template
}

const searchButton = {
  name: 'searchButton',
  data() {
    return {
      label: this.$t('table.search'),
      type: 'primary'
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  },
  template
}

const addButton = {
  name: 'addButton',
  data() {
    return {
      label: this.$t('table.add'),
      type: 'primary'
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  },
  template
}

const editButton = {
  name: 'editButton',
  data() {
    return {
      label: this.$t('table.edit'),
      type: 'primary'
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  },
  template
}

const submitButton = {
  name: 'submitButton',
  data() {
    return {
      label: this.$t('table.confirm'),
      type: 'primary'
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  },
  template
}

const cancelButton = {
  name: 'cancelButton',
  data() {
    return {
      label: this.$t('table.cancel'),
      type: 'danger'
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  },
  template
}

const exportButton = {
  name: 'exportButton',
  data() {
    return {
      label: this.$t('table.export'),
      type: 'primary'
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  },
  template
}

const detailButton = {
  name: 'detailButton',
  data() {
    return {
      label: this.$t('table.detail'),
      type: 'primary'
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  },
  template
}

export default {
  name: 'button',
  components: {
    bsButton,
    searchButton,
    addButton,
    editButton,
    submitButton,
    cancelButton,
    exportButton,
    detailButton
  }
}
