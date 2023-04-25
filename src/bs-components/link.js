import { hasAcl } from '@/utils/auth'

function checkRoles(roles) {
  for (const role of roles) {
    if (hasAcl(role)) {
      return true
    }
  }
  return false
}

function getRouter(routers, category, item) {
  const merchant = routers.find(r => r.name === category)
  if (!merchant || !checkRoles(merchant.meta.roles)) {
    return {
      shouldDisplay: false
    }
  }

  const merchantList = merchant.children.find(r => r.name === item)
  if (!merchantList || !checkRoles(merchantList.meta.roles)) {
    return {
      shouldDisplay: false
    }
  }

  return {
    shouldDisplay: true,
    to: {
      path: `${merchant.path}/${merchantList.path}`
    },
    key: merchantList.name
  }
}

const template = `
    <router-link v-if="shouldDisplay" :to="to" :key="key"><slot/></router-link>
    <span v-else><slot/></span>
`

const bsMerchantLink = {
  name: 'BsMerchantLink',
  template,
  props: {
    merchantId: {
      type: String
    }
  },
  data() {
    const router = getRouter(this.$store.getters.permissionRouters, 'merchant', 'merchantList')
    if (router.shouldDisplay) {
      router.to.query = {
        merchantId: this.merchantId
      }
    }
    return router
  }
}

const bsAccountLink = {
  name: 'BsAccountLink',
  template,
  props: {
    accountId: {
      type: Number
    },
    channelCode: {
      type: String
    }
  },
  data() {
    const router = getRouter(this.$store.getters.permissionRouters, 'channel', 'accountList')
    if (router.shouldDisplay) {
      router.to.query = {
        accountId: this.accountId,
        channelCode: this.channelCode
      }
    }
    return router
  }
}

export default {
  name: 'BsLink',
  components: {
    bsMerchantLink,
    bsAccountLink
  }
}
