<template>
  <div class="skin-blue">
    <div class="wrapper">
      <!-- header -->
      <Vheader></Vheader>
      <Vaside></Vaside>
      <div class="content-wrapper">
        <section class="content-header">
          <h1>仪表盘</h1>
          <ol class="breadcrumb">
            <li>
              <a href="#">
                <i class="fa fa-dashboard"></i> 首页
              </a>
            </li>
            <li>
              <a href="#">仪表盘</a>
            </li>
            <li class="active">员工管理页面</li>
          </ol>
        </section>
        <section class="content">员工管理页面</section>
      </div>
      <!-- footer -->
      <Vfooter></Vfooter>
      <!-- <div class="control-sidebar-bg"></div>   -->
    </div>
  </div>
</template>

<script>
import Vheader from "../common/header";
import Vaside from "../common/aside";
import Vfooter from "../common/footer";
export default {
  name: "home",
  data() {
    return {};
  },
  components: { Vheader: Vheader, Vaside: Vaside, Vfooter: Vfooter },
  methods: {}
};
</script>
<style scoped>
h1 {
  font-weight: normal;
}
</style>
