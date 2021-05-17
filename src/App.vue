<template>
  <div id="app">
   <router-view/>
  <!-- <HelloWorld/>
      <Tabbar></Tabbar> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
   created: function () {
    // this.$router.push('/Tabbar')
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
body{
  font-family: -apple-system,BlinkMacSystemFont,arial,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
  font-size: 14px;
  width: 100%;
  height: 100%;
  min-width: 320px;
  max-width: 640px;
  margin: 0 auto;
}
p{
  padding: 0;
  margin: 0;
}
body,html{
  width: 100%;
  height: 100%;
}
#app {
}
</style>
