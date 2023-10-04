<template>
  <Header/>
  <Presentation/>
  <Questions/>
</template>

<script>
import Header from './components/Header.vue'
import Presentation from './components/Presentation.vue'
import Questions from './components/Questions.vue'

export default {
  name: 'App',
  components: {
    Header,
    Presentation,
    Questions,
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
    margin: 0 auto;
  }

  h2 {
    font-family: $title-font;
    color: $third-color !important;
  }
</style>
