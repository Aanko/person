<template>
  <div class="skin-blue">
    <div class="wrapper">
      <header class="main-header">
        <a href="../../index2.html" class="logo">
          <span class="logo-lg">管理系统</span>
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
                  <span class="hidden-xs">爱扯淡的虾</span>
                </a>
                <ul class="dropdown-menu">
                  <li class="user-header">
                    <img
                      src="https://q1.qlogo.cn/g?b=qq&nk=952396285&s=5"
                      class="img-circle"
                      alt="User Image"
                    >
                    <p>
                      <small>爱扯淡的虾</small>
                    </p>
                    <p>
                      <small>啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</small>
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
              <a href="#">
                <i class="fa fa-dashboard"></i>
                <span>用户管理</span>
              </a>
            </li>
            <li class="treeview">
              <a href="#">
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
      <footer class="main-footer">
        <div class="pull-right hidden-xs">
          <b>Version</b> 2.4.0
        </div>
        <strong>
          Copyright &copy; 2014-2016
          <a href="https://slogc.cc">爱扯淡的虾</a>.
        </strong> All rights
        reserved.
      </footer>

      <div class="control-sidebar-bg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
h1 {
  font-weight: normal;
}
</style>
