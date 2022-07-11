<template>
  <v-app class="justify-center align-center">
    <v-alert prominent type="error">
      <v-row align="center">
        <v-col class="grow">401 Unauthorized</v-col>
      </v-row>
    </v-alert>
  </v-app>
</template>

<script lang="ts">
// Component
import { Component, Prop } from "vue-property-decorator";
import { BaseVue } from "@/base/view/BaseVue";

// Store

@Component({
  components: {},
})
export default class Unauthorized extends BaseVue {}
</script>
