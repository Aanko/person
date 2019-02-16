<template>
  <div>
    <header>
      <nav class="navbar-default" style="background-color: #3c8dbc;">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#" style="color:#fff">管理系统</a>
            <i class="fa fa-reorder" style="color:#fff"></i>
          </div>
          <div class="navbar-text navbar-right" style="margin-right:50px">
            <span style="color:#fff;margin:0px 10px 0px 0px">管理员用户</span>
            <a href="#" class="navbar-link" style="color:#fff">
              <i class="fa fa-sign-out"></i> 退出
            </a>
          </div>
        </div>
      </nav>
    </header>
    <aside style="width:200px;height:100%">
      <ul class="nav nav-pills nav-stacked">
        <li role="presentation" class="active">
          <a href="#">Home</a>
        </li>
        <li role="presentation">
          <a href="#">Profile</a>
        </li>
        <li role="presentation">
          <a href="#">Messages</a>
        </li>
      </ul>
    </aside>
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
