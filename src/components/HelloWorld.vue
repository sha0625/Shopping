<template>
  <div id="body">
    <!--搜索-->
    <div class="seach">
        <van-search v-model="meetingname" placeholder="请输入搜索关键词" @click="onSearch"/>
    </div>
    <!--标签栏Tabbar-->
    <van-tabbar v-model="active" >
      <van-tabbar-item replace to="/home" icon="home-o">Hemo</van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    </van-tabbar>   
  </div>
   
</template>

<script>
// import Button from 'vant/lib/button';

// import { Button, Tabbar, TabbarItem  } from 'vant';
export default {
  // components:{
		// 'van-button':Button
	// },
  // components: { Button, [Tabbar.name]: Tabbar, [TabbarItem.name]: TabbarItem},
  name: 'HelloWorld',
  data () {
    return {
      active:0,
      meetingname:''
    }
  },
  methods: {
    onSearch(){
      this.$router.push({
				path:'/Seach'
			})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  background: rgb(240, 233, 233);
}
#body{
  width: 100%;
  height: 100%;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
