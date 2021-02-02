<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import debounce from 'lodash/debounce'
export default {
  mounted () {
    const resizeFunc = debounce(() => {
      this.setWidth()
    }, 300, {
      leading: false,
      trailing: true
    })
    this.setWidth()
    window.onresize = resizeFunc
  },
  methods: {
    ...mapMutations(['setBrowserWidth']),
    setWidth () {
      if (window.innerWidth) {
        this.setBrowserWidth(window.innerWidth)
      } else if (document.body && document.body.clientWidth) {
        this.setBrowserWidth(document.body.clientWidth)
      } else {
        this.setBrowserWidth(document.documentElement.clientWidth)
      }
    }
  }
}
</script>

<style lang="scss">

</style>
