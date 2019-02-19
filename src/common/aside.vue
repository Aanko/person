
<template>
  <aside class="main-sidebar">
    <section class="sidebar">
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">MAIN NAVIGATION</li>
        <!-- <li class="treeview">
              <a href="#">
                <i class="fa fa-dashboard"></i>
                <span>职工管理</span>
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul class="treeview-menu">
                <li>
                  <a href="#">
                    <i class="fa fa-circle-o"></i>用户管理
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-circle-o"></i>员工管理
                  </a>
                </li>
              </ul>
        </li>-->
        <li class="treeview">
          <a href="#" @click="change('user')">
            <i class="fa fa-dashboard"></i>
            <span>用户管理</span>
          </a>
        </li>
        <li class="treeview">
          <a href="#" @click="change('staff')">
            <i class="fa fa-dashboard"></i>
            <span>员工管理</span>
          </a>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-dashboard"></i>
            <span>部门管理</span>
          </a>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-dashboard"></i>
            <span>职位管理</span>
          </a>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fa fa-dashboard"></i>
            <span>公告管理</span>
          </a>
        </li>
      </ul>
    </section>
  </aside>
</template>

<script>
import Axios from "axios";
import { mapState } from "Vuex";
export default {
  name: "aside",
  data() {
    return {};
  },
  methods: {
    change(name) {
      if (name == "user") {
        this.$router.push("user");
      }
      if (name == "staff") {
        this.$router.push("staff");
      }
    }
  },
  computed: {}
};
</script>
<style scoped>
</style>
