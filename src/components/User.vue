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
          <div class="table-responsive">
            <table class="table" >
              <thead>
                <tr>
                  <th>产品</th>
                  <th>付款日期</th>
                  <th>状态</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>产品1</td>
                  <td>23/11/2013</td>
                  <td>待发货</td>
                </tr>
                <tr>
                  <td>产品2</td>
                  <td>10/11/2013</td>
                  <td>发货中</td>
                </tr>
                <tr>
                  <td>产品3</td>
                  <td>20/10/2013</td>
                  <td>待确认</td>
                </tr>
                <tr>
                  <td>产品4</td>
                  <td>20/10/2013</td>
                  <td>已退货</td>
                </tr>
              </tbody>
            </table>
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
</style>
