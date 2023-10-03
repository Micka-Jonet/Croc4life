<template>
  <Header/>
  <Presentation/>
</template>

<script>
import Header from './components/Header.vue'
import Presentation from './components/Presentation.vue'

export default {
  name: 'App',
  components: {
    Header,
    Presentation,
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
    color: $color-text;
  }

  .container-default {
    width: 1080px;
  }

  h2 {
    font-family: $title-font;
    color: $third-color !important;
  }
</style>
