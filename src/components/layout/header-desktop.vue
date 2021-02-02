<template>
   <header class="app-header">
      <div class="container">
        <div class="inner">
          <a href="/" class="logo-text">
            前端 <span class="china-text">中国</span> |{{' '}}
            <span class="slogan">交流 分享</span>
          </a>
          <!-- <div class="app-user" @click="mouseEnterAvatar">
            <img class="avatar" src="" alt="" />
            <span>V2R</span>
          </div> -->
          <div class="login-with-register" @click="showLoginModal">
            登录
          </div>
        </div>
      </div>
      <login-modal @close="closeLoginModal" v-if="loginModalVisible" />
    </header>
</template>

<script>
import LoginModal from '@/components/login-modal'
export default {
  data () {
    return {
      LoginModalVisible: false
    }
  },
  components: {
    LoginModal
  },
  methods: {
    closeLoginModal () {
      this.LoginModalVisible = false
    },
    showLoginModal () {
      this.LoginModalVisible = true
    },
    mouseEnterAvatar () {
    }
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  background-color: #ffffff;
  box-shadow: 0px 2px 4px 0px rgba(123, 123, 123, 0.05);
  @media (min-width: 768px) {
    .container {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  @media (min-width: 576px) {
    .container {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  .container {
    max-width: 1180px;
    margin: 0 auto;
    padding-left: 5px;
    padding-right: 5px;
    .inner {
      display: flex;
      height: 70px;
      justify-content: space-between;
      align-items: center;
      .logo-text {
        color: $primary;
        font-size: 20px;
        flex: 0 0 215px;
      }
      .china-text {
        color: red;
      }
      .slogan {
        font-size: 14px;
      }
      .app-user {
        .avatar {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: red;
        }
        span {
          font-size: 16px;
          margin-left: 5px;
          color: #999;
        }
      }
      .login-with-register {
        height: 70px;
        top: 0;
        margin-top: 0;
        margin-bottom: 0;
        border-bottom: 0;
        display: inline-block;
        margin-left: 12px;
        margin-right: 12px;
        padding: 18px 22px;
        font-size: 18px;
        line-height: 33px;
        text-decoration: none;
        color: #7b7b7b;
        cursor: pointer;
      }
    }
  }
}

</style>>
