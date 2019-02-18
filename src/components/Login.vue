<template>
  <div class="login-box">
    <div class="login-logo">
      <a href="../../index2.html">后台管理系统</a>
    </div>
    <div class="login-box-body">
      <form action="../../index2.html" method="post">
        <div class="form-group has-feedback">
          <input type="text" class="form-control" placeholder="账号">
          <!-- <span class="glyphicon glyphicon-envelope form-control-feedback"></span> -->
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control" placeholder="密码">
          <!-- <span class="glyphicon glyphicon-lock form-control-feedback"></span> -->
        </div>
        <div class="row">
          <div class="col-xs-12">
            <button type="submit"  @click="btn_login()" class="btn btn-primary btn-block btn-flat">登 录</button>
          </div>
        </div>
      </form>
    </div>
    <!-- /.login-box-body -->
    <!-- <div style="margin-top: 60px; text-align:center">
      <div class="container login-form">
        <div class="login-logo">Halo</div>
        <div class="login-body animated" style="width:300px ;margin:0px auto;">
          <form>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name="loginName"
                v-model="loginStore.loginName"
                id="login-name"
                placeholder="用户名"
                autocomplete="username"
              >
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                name="loginPwd"
                v-model="loginStore.loginPwd"
                id="login-pwd"
                placeholder="密码"
                autocomplete="current-password"
              >
            </div>
            <button
              type="button"
              id="btn-login"
              data-loading-text="登录中..."
              class="btn btn-block login-button"
              @click="btn_login()"
              style="animation-delay: 0.4s;outline: none;"
            >登录</button>
          </form>
        </div>
      </div>
    </div>-->
    {{loginStore.userdata}}
  </div>
</template>

<script>
import Axios from "axios";
import { mapState } from "Vuex";
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {
    btn_login() {
      this.$store.dispatch("login");
      this.$router.push("home");
    }
  },
  computed: {
    ...mapState(["loginStore"])
  }
};
</script>
<style scoped>
h1 {
  font-weight: normal;
}
</style>
