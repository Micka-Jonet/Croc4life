<template>
  <Header/>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style lang="scss">
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  @import "../src/assets/styles/variables.scss";

  #app {
    font-family: $text-font;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $first-color;
  }

  .container-default {
    width: 1080px;
  }
</style>
