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
            <!-- <li class="active">404 error</li> -->
          </ol>
        </section>
        <section class="content">
          <div class="row">
            <div class="col-lg-3 col-xs-6">
              <div class="small-box bg-aqua">
                <div class="inner">
                  <h3>150</h3>
                  <p>成员</p>
                </div>
                <a href="#" class="small-box-footer">
                  详细信息
                  <i class="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-xs-6">
              <div class="small-box bg-green">
                <div class="inner">
                  <h3>5</h3>
                  <p>部门</p>
                </div>
                <div class="icon">
                  <i class="ion ion-stats-bars"></i>
                </div>
                <a href="#" class="small-box-footer">
                  详细信息
                  <i class="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-xs-6">
              <div class="small-box bg-yellow">
                <div class="inner">
                  <h3>4</h3>
                  <p>职位</p>
                </div>
                <div class="icon">
                  <i class="ion ion-person-add"></i>
                </div>
                <a href="#" class="small-box-footer">
                  详细信息
                  <i class="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-xs-6">
              <div class="small-box bg-red">
                <div class="inner">
                  <h3>65</h3>
                  <p>公告</p>
                </div>
                <div class="icon">
                  <i class="ion ion-pie-graph"></i>
                </div>
                <a href="#" class="small-box-footer">
                  详细信息
                  <i class="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
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
