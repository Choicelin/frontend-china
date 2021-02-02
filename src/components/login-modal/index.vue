<template>
  <div class="login">
      <div class="login-real-modal" @click="closeModal"></div>
      <div class="login-content"></div>
    </div>
</template>

<script>
export default {
  methods: {
    closeModal () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  .login-real-modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(73, 73, 73, 0.69);
    z-index: 30;
  }
  .login-content {
    position: absolute;
    top: 80px;
    border: 1px solid rgb(204, 204, 204);
    background: #fff;
    overflow: auto;
    margin: 0 auto;
    padding: 20px;
    left: 5px !important;
    right: 5px !important;
    z-index: 35;
  }
  @media (min-width: 768px) {
    .login-content {
      width: 500px;
    }
  }
}

</style>
