<template>
  <div class="layout">
    <header-desktop v-if="browserWidth > 500" />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import HeaderDesktop from '@/components/layout/header-desktop'
export default {
  computed: {
    ...mapState(['browserWidth'])
  },
  components: {
    HeaderDesktop
  }
}
</script>

<style lang="scss" scoped>
.layout {
  background:#f6f6f6;
  min-height: 100vh;
}
</style>
