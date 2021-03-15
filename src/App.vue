<template>
  <div id="app">
    <router-view/>
     <!-- <Tabbar></Tabbar> -->
  </div>
</template>

<script>
import Tabbar from './components/tabbar/Tabbar.vue'
export default {
  name: 'App',
   created: function () {
    // this.$router.push('/Tabbar')
  },
  components: {
    Tabbar
  }
}
</script>

<style>

#app {
}
</style>
