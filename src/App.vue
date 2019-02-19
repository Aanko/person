<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@media screen and (min-width: 414px) {
  .wrapper {
    min-height: 1024px;
  }
  .content-wrapper {
    min-height: 940px;
  }
}
body {
  background-color: #f4f4f4;
  padding: 0px;
  margin: 0px;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
