<template>
  <div id="app">
    <Layout/>
  </div>
</template>

<script>
  import Layout from './Components/Layout'
  export default {
    components: {
      Layout
    },
    name: 'app',
    data () {
      return {
        title: 'Book Me Vue App'
      }
    },
  }
</script>

<style lang="scss">
  @import "./assets/style/_variables.scss";  
  @import "./assets/style/_common.scss";   
</style>
