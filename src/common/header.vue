
<template>
  <header class="main-header">
    <a href="../../index2.html" class="logo">
      <span class="logo-lg">PersonManager</span>
    </a>
    <nav class="navbar navbar-static-top">
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </a>
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img
                src="https://q1.qlogo.cn/g?b=qq&nk=952396285&s=5"
                class="user-image"
                alt="User Image"
              >
              <span class="hidden-xs">{{userinfo.userDisplayName}}</span>
            </a>
            <ul class="dropdown-menu">
              <li class="user-header">
                <img
                  src="https://q1.qlogo.cn/g?b=qq&nk=952396285&s=5"
                  class="img-circle"
                  alt="User Image"
                >
                <p>
                  <small>{{userinfo.userDisplayName}}</small>
                </p>
                <p>
                  <small>{{userinfo.userDesc}}</small>
                </p>
              </li>
              <li class="user-footer">
                <div class="pull-left">
                  <a href="#" class="btn btn-default btn-flat">个人信息</a>
                </div>
                <div class="pull-right">
                  <a href="#" class="btn btn-default btn-flat">退出</a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import Axios from "axios";
import { mapState } from "Vuex";
export default {
  name: "header",
  data() {
    return {
      userinfo:''
    };
  },
  methods: {
    user() {
      Axios.get("https://slogc.cc/api/user",{
      }).then(response => {
        this.userinfo = response.data.result;
        console.log(response.data.result);
      });
    }
  },
  mounted() {
    this.user();
  },
  computed: {}
};
</script>
<style scoped>
</style>
