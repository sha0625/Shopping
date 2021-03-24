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
    <div id="swip">
      <van-swipe :autoplay="5000" width="90%">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <div>
            <img v-lazy="image" width="100%" height="130px" />
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <img src="../../static/swiper/top01.png" alt="" width="100%">
    <div class="imgGroup">
      <img src="../../static/swiper/top02.png" width="49%" alt="">
      <img src="../../static/swiper/top03.png" width="49%" alt="">      
    </div>

    <div class="Hotlist">
      <div class="hot_top">
        <img src="../../static/index/icon.png" alt="" width="20px"><span>热卖榜单</span> <i></i> <span>看看大家都在买什么</span>
        <div class="gang"></div>
      </div>
      
    </div>

  </div>
   
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      active:0,
      meetingname:'',
      images: [
        '../../static/swiper/swiper03.png',
			  '../../static/swiper/swiper04.png',
        '../../static/swiper/swiper02.png',
				'../../static/swiper/swiper01.png',
        '../../static/swiper/swiper05.png',
			  '../../static/swiper/swiper06.png',
			]
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
.Hotlist{
    background: #fff;
    border-radius: 20px;
    width: 355px;
    height: 197px;
    margin-bottom: .266667rem;
    padding: 11px 12px 15px 12px;
    box-sizing: border-box;
    margin: 0 auto;
}
.hot_top i::before{
  content: '';
  width: 1px;
  height: 10px;
  background: rgb(204, 201, 201);
  position: absolute;
  top: 410px;
  left: 110px;
}
.Hotlist .hot_top img,.Hotlist .hot_top span{
  vertical-align: middle;
}

.imgGroup img{
  display: inline-block;
}
/deep/ .van-swipe__indicator {
  transform: rotate(45deg);
  width: 6px;
  height: 9px;
  border-radius:40%;
}
/deep/ .van-swipe__indicator--active {
    background-color: #696969;
}
/deep/ .van-swipe {
  border-radius: 10px;
  margin: 10px;
}
#body{
  width: 100%;
  height: 100%;
  background: #F7F7F7;
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
