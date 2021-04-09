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
    <!-- 热卖榜单 -->
    <div class="Hotlist">
      <div class="hot_top">
        <img src="../../static/index/icon.png" alt="" width="18px">
        <span class="span">热卖榜单</span> 
        <i></i> 
        <span>看看大家都在买什么</span>
      </div>
      <div class="hotsale">
        <van-row>
          <van-col span="12">
            <div class="host_content"> 
              <div>
                <p>男鞋榜</p>
                <span>热销1486件</span>
              </div>
              <img src="../assets/hot/hot_1.jpg" width="77px" alt="">
            </div>
          </van-col>
          <van-col span="12">
            <div class="host_content"> 
              <div>
                <p>美护榜</p>
                <span>热销1865件</span>
              </div>
              <img src="../assets/hot/hot_2.jpg" width="77px" alt="">
            </div>
          </van-col>
        </van-row>
      <!--
       <van-row>
          <van-col span="6">
            <div class="host_content2">
              <div>
                <img src="../assets/hot/hot_3.jpg" alt="">
              </div>
              <p>女鞋榜</p>  
            </div>
          </van-col>
          <van-col span="6">
            <div class="host_content2">
              <div>
                <img src="../assets/hot/hot_4.jpg" alt="">
              </div>
              <p>配饰榜</p>  
            </div>
          </van-col>
          <van-col span="6">
            <div class="host_content2">
              <div>
                <img src="../assets/hot/hot_5.jpg" alt="">
              </div>
              <p>女包榜</p>  
            </div>
          </van-col>
          <van-col span="6">
            <div class="host_content2">
              <div>
                <img src="../assets/hot/hot_6.jpg" alt="">
              </div>
              <p>女装榜</p>  
            </div>
          </van-col>
        </van-row>
        -->
        
        <van-row >
          <van-col span="6" v-for="(item,index) in hotList" :key="index">
            <div class="host_content2">
              <div>
                <img :src="item.img" alt="">
              </div>
              <p>{{item.title}}</p>  
            </div>
          </van-col>
        </van-row> 
      </div>
    </div>
    <!-- 精选活动 -->
    <div class="activitie">
      <h2>精选活动</h2>
      <div>
        <div class="actList" v-for="(act ,index) in activities" :key="index" v-if=" index < showlen  ">
            <div class="actimg" >
              <img :src="act.img" width="100%" height="100%" alt="">
            </div>
            <div class="act_bo">
              <img :src="act.icon" alt="">
              <div>
                <p>{{act.tit}}</p>
                <span>{{act.text}}index:{{index}}</span>
              </div>          
            </div> 
                  
        </div>
      </div>

      <van-button class="load" @click="load" v-if="!showmore" >加载更多</van-button>

      <div class="loading-content">
        <div class="loading-box">
          <div class="image-wrap">
            <div class="image-box">
              <img src="../assets/img/load-1.png">
              <!-- <img src="../assets/img/load-2.png" style="position: absolute; left: 163px;transform: translateX(-50px)">
              <img src="../assets/img/load-3.png" style="position: absolute; left: 163px;transform: translateX(-60px)">
              <img src="../assets/img/load-4.png" style="position: absolute; left: 163px;transform: translateX(-70px)"> -->
            </div>
          </div>
          <div class="text">请稍后</div>
        </div>        
      </div> 

    </div>
  </div>
   
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      showmore:false,
      showlen:1,
      active:0,
      meetingname:'',
      images: [
        '../../static/swiper/swiper03.png',
			  '../../static/swiper/swiper04.png',
        '../../static/swiper/swiper02.png',
				'../../static/swiper/swiper01.png',
        '../../static/swiper/swiper05.png',
			  '../../static/swiper/swiper06.png',
			],
      hotList: [
        {'img':'../../static/hot/hot_3.jpg','title':'女鞋榜'},
        {'img':'../../static/hot/hot_4.jpg','title':'配饰榜'},
        {'img':'../../static/hot/hot_5.jpg','title':'女包榜'},
        {'img':'../../static/hot/hot_6.jpg','title':'女装榜'},
      ],
      activities: [
        {'img':'../../static/hot/jingxuan_1.png','icon':'../../static/hot/jingxuan_3.png',
          'tit':'Madaluxe Vault奢牌腕表2.7折起','text':'[1]别样 推荐'},
        {'img':'../../static/hot/jingxuan_2.jpg','icon':'../../static/hot/jingxuan_4.png',
          'tit':'别样独家|8折收香缇卡、海蓝之谜','text':'[2]留白 推荐'},
        {'img':'../../static/hot/jingxuan_2.jpg','icon':'../../static/hot/jingxuan_4.png',
          'tit':'别样独家|8折收香缇卡、海蓝之谜','text':'[3]留白 推荐'},
        {'img':'../../static/hot/jingxuan_1.png','icon':'../../static/hot/jingxuan_3.png',
          'tit':'Madaluxe Vault奢牌腕表2.7折起','text':'[4]留白 推荐'},
      ],
    }
  },
  created(){
  },
  methods: {
    onSearch(){
      this.$router.push({
        path:'/Seach'
			})
    },
    load(){
      this.showlen = this.showlen + 1
      console.log("showlen"+this.showlen +"--"+"length"+this.activities.length)

      if(this.activities.length===this.showlen){
        this.showmore=true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@keyframes rowup {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(60px);
    display: none;
  }
}
.loading-content{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;    
}
.loading-box{
  width: 100px;
  height: 100px;
  background: black;
  opacity: 0.8;
  border-radius: 20px;
  text-align: center;
  padding: 15px;
}
.loading-box .image-wrap{
  margin-top: 5px;
}
.loading-box .text{
  color: #f1ede6;
  margin-top: 15px;
}
.image-box img{
  width: 50px;
  height: 50px;
  animation: 2.5s rowup linear;
  animation-iteration-count:infinite;
  animation-direction:normal
}

.load{
  display: block;
  margin: 0 auto;
  width: 90%;
  height: 49px;
  border-radius: 31px;
  background: #eee;
  color: #333;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
}
.activitie {
  margin-bottom: 60px;
}
.activitie h2{
  color: #333;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
}
.activitie .actList{
  margin: 0 auto;
  width: 93%;
  height: 278px;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 10px;
}
.activitie .actList .actimg img{
  border-radius: 10px;
}
.act_bo{
  padding: 13px;
}
.act_bo img,.act_bo div{
  display: inline-block;
  vertical-align: middle;
}
.act_bo img{
  width: 44px;
  margin-right: 13px;
}
.act_bo p{
  font-size: 17px;
}
.act_bo span{
  font-size: 12px;
  color: #999;
}


p{
  margin: 0;
  padding: 0;
}
.Hotlist{
    margin: 0 auto;
    background: #fff;
    width: 93%;
    height: 230px;
    border-radius: 20px;
    box-sizing: border-box;
}
.hot_top i::before{
  content: '';
  width: 1px;
  height: 13px;
  background: rgb(184, 176, 176);
  position: absolute;
  top: 417px;
  left: 122px;
}
.Hotlist .hot_top img,.Hotlist .hot_top span{
  vertical-align: middle;
}
.hot_top .span{
  font-size: 17px;
  font-weight: bold;
}
.hot_top span:last-child{
  font-size: 12px;
  padding-left: 5px;
  color: #999;
}

.imgGroup img{
  display: inline-block;
}
.hotsale .van-row{
  margin-bottom: 8px;
}
.hotsale .host_content div,.hotsale .host_content img{
  display: inline-block;
  vertical-align: middle;
}
.hotsale .host_content div{
  margin-right: 20px;
}
.hotsale .host_content div p{
  font-weight: 500;
  margin: 0;
}
.hotsale .host_content div span{
  font-weight: 500;
  font-size: 12px;
  color: rgb(210, 125, 63);
}
.host_content2 div{
  height: 4.9rem;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.host_content2 p{
  font-size: 14px;
  text-align: center;
}
.host_content2 img{
  height: 4.9rem;
  width: 3.7rem;
}

/deep/ .van-swipe__indicator {
  width: 6px;
  height: 9px;
  border-radius:40%;
  transform: rotate(45deg);
}
/deep/ .van-swipe__indicator--active {
  background-color: #696969;
}
/deep/ .van-swipe {
  margin: 10px 10px 0 10px;
  border-radius: 10px;
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
  margin: 0 10px;
  display: inline-block;
}

</style>
