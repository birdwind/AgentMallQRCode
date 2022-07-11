<template>
  <v-flex>
    <v-alert color="warning" elevation="2" border="top" colored-border>
      <v-flex class="py-6 d-flex flex-column justify-center align-center">
        <h2 class="display-2 warning--text">
          404
          <v-icon>mdi-ghost</v-icon>
        </h2>
        <h3 class="headline warning--text">PAGE NOT FOUND</h3>
        <p class="mt-3">不好意思，您沒有權限訪問或此頁面不存在</p>
      </v-flex>
    </v-alert>
  </v-flex>
</template>

<script lang="ts">
// Component
import { Component, Prop } from "vue-property-decorator";
import { BaseVue } from "@/base/view/BaseVue";

// Store

@Component({
  components: {},
})
export default class NotFound extends BaseVue {
  mounted() {
    //
  }
}
</script>
