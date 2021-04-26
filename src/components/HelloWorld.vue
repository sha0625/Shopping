<template>
  <div id="body">
    <!--搜索-->
    <div class="seach">
      <van-search v-model="meetingname" placeholder="请输入搜索关键词" @click="onSearch"/>
    </div>
    <!--标签栏Tabbar-->
    <van-tabbar v-model="active" >
      <van-tabbar-item replace to="/home" icon="home-o">Hemo</van-tabbar-item>
      <van-tabbar-item replace to="/Category" icon="search">分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  <van-tabs v-model="tabactive" color="#323233" swipeable>
    <van-tab title="最新">
      <!-- 轮播 -->
      <div id="swip">
        <van-swipe :autoplay="5000" width="90%">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <div>
              <img v-lazy="image" width="100%" height="130px" />
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- END 轮播 -->
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
      </div>
      <!-- END 精选活动 -->

      <!-- Loading -->
      <div class="loading-content" v-if="loading">
        <div class="image-wrap">
          <div class="image-box">
            <img src="../assets/img/load-1.png">
            <img src="../assets/img/load-2.png">
            <img src="../assets/img/load-3.png">
            <img src="../assets/img/load-4.png"> 
          </div>
        </div>
        <div class="text">请稍后</div>     
      </div> 
      <!-- END Loading -->

      <!-- 猜你喜欢 -->
      <div class="assume">
        <h2>猜你喜欢</h2>
        <div class="content">
          <div class="product-item" v-for="(item,index) in list" :key="index" v-if="index < productlen">
            <div class="img-wrap">
              <img alt="" :src="item.img">
            </div>        
            <div class="detail">
              <p class="name">{{item.title}}</p>
              <span class="dollar-price">{{item.dprice}}</span>
              <div class="main-price-area">
                <p class="main-price ">{{item.mpirce}}</p>
                <span class="like">{{item.like}}人收藏</span>
              </div>
            </div>
            <div class="color-num">
              <div class="tag">{{item.colour}}色可选 </div>
            </div>          
          </div>
        </div>
        <div class="tip" v-if="tipactive">别拉了！到底啦~</div>
      <!-- END 猜你喜欢 -->
      </div>

    </van-tab>
    <van-tab title="潮牌">潮牌</van-tab>
    <van-tab title="美妆">美妆</van-tab>
    <van-tab title="时尚">时尚</van-tab>
    <van-tab title="男士">男士</van-tab>
    <van-tab title="健康">健康</van-tab>
    <van-tab title="母婴">母婴</van-tab>
    <van-tab title="品质生活">品质生活</van-tab>

  </van-tabs>  

  </div>
   
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      tipactive:false,
      REQUIRE: true, // 是否可以加载数据
      productlen:5, //每页显示5个
      loading:false,//加载动画控制
      showmore:false,//加载按钮
      showlen:1,//计数
      active:0,//标签栏控制
      meetingname:'',//搜索框控制
      tabactive:'',//轮播
      pages:1,//第一页
      list:[],//全部数据
      images: [
        '../../static/swiper/swiper03.png',
			  '../../static/swiper/swiper04.png',
        '../../static/swiper/swiper02.png',
				'../../static/swiper/swiper01.png',
        '../../static/swiper/swiper05.png',
			  '../../static/swiper/swiper06.png',
			],//轮播图
      hotList: [
        {'img':'../../static/hot/hot_3.jpg','title':'女鞋榜'},
        {'img':'../../static/hot/hot_4.jpg','title':'配饰榜'},
        {'img':'../../static/hot/hot_5.jpg','title':'女包榜'},
        {'img':'../../static/hot/hot_6.jpg','title':'女装榜'},
      ],//热榜
      activities: [
        {'img':'../../static/hot/jingxuan_1.png','icon':'../../static/hot/jingxuan_3.png',
          'tit':'Madaluxe Vault奢牌腕表2.7折起','text':'[1]别样 推荐'},
        {'img':'../../static/hot/jingxuan_2.jpg','icon':'../../static/hot/jingxuan_4.png',
          'tit':'别样独家|8折收香缇卡、海蓝之谜','text':'[2]留白 推荐'},
        {'img':'../../static/hot/jingxuan_2.jpg','icon':'../../static/hot/jingxuan_4.png',
          'tit':'别样独家|8折收香缇卡、海蓝之谜','text':'[3]留白 推荐'},
        {'img':'../../static/hot/jingxuan_1.png','icon':'../../static/hot/jingxuan_3.png',
          'tit':'Madaluxe Vault奢牌腕表2.7折起','text':'[4]留白 推荐'},
      ],//精选活动
      yourlove: [
        {'img':'../../static/list/assume-4.jpg','name':'Aveeno Baby | 婴儿温和洗发水 含天然燕麦提取物含天然燕麦提取物','dprice':'$10.99','mpirce':'¥74','like':'0','colour':'1'},
        {'img':'../../static/list/assume-3.jpg','name':'Hugo Boss | Hugo Boss Multi-stripe Cotton Socks In Black','dprice':'$10.99','mpirce':'¥74','like':'0','colour':'1'},
        {'img':'../../static/list/assume-2.jpg','name':'Theory | Piazza Plaid Wool Blazer','dprice':'$10.99','mpirce':'¥74','like':'0','colour':'1'},
        {'img':'../../static/list/assume-1.jpg','name':'Tommy Hilfiger | 白T恤','dprice':'$10.99','mpirce':'¥74','like':'0','colour':'1'},
      ],//猜你喜欢
    }
  },
  created(){
  },
  mounted(){
    const url = '../../static/sea.json'
    this.$axios.get(url).then(res=>{
      this.list = res.data.list
      // console.log(this.list)
    })

    // 添加滚动事件、检测滚动到页面底部
    window.addEventListener('scroll',this.scrollBottom)
  },
  methods: {
    onSearch(){
      this.$router.push({
        path:'/Seach'
			})
    },
    load(){
      this.loading = true;      
      setTimeout(() => {
        this.loading = false;
        this.showlen = this.showlen + 1
        if(this.activities.length===this.showlen){
          this.showmore=true
        }
      }, 1000) 
    },
    scrollBottom(){
      // var scroll = (window.screen.height+document.documentElement.scrollTop)-30
      // var clientHeight = document.body.clientHeight;
      // console.log("clientHeight-"+clientHeight)
      // console.log("scroll-"+scroll)
      if (((window.screen.height + document.documentElement.scrollTop)-30 >= (document.body.clientHeight)) && this.REQUIRE) {
        this.loading = true;
        this.pages = this.pages+1
        console.log("pages--"+this.pages)
        setTimeout(() => {
          this.loading = false;
          this.productlen = this.productlen+5
          if( Math.ceil(this.list.length/5) === this.pages){
            this.REQUIRE = false;
            setTimeout(() => {
              this.tipactive= true
              // this.tipactive= false
            },500)
          }
        }, 1000)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/deep/ .van-tab--active {
  font-weight: 600;
}
/* #region  猜你喜欢 */
h2{
  padding: 0px;
  margin: 0px;
}
.assume{
  background: #fff;
  padding-top: 15px;
}
.assume h2{
  color: #333;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 15px;
}
.assume .content{
  display: flex;
  flex-wrap: wrap;
}
.product-item{
  display: inline-block;
  width: 49.4%;
  position: relative;
  margin-bottom: 25px;
}
.product-item .img-wrap{
  width: 100%;
  height: 187px;
  margin-bottom: 15px;
  display: flex;
}
.product-item .img-wrap img{
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: auto;
}
.detail{
  margin: 0 15px;
}
.detail .name{
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 16px;
}
.detail .dollar-price{
  font-size: 13px;
  color: #333;
  margin-bottom: 4px;
}
.detail .main-price-area{
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.detail .main-price-area .main-price{
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #333;
}
.detail .main-price-area .like{
  color: #bbb;
  font-size: 12px;
  line-height: 20px;
}
.product-item .color-num{
  position: absolute;
  top: 12px;
  left: 12px;
}
.product-item .color-num .tag{
  background: rgb(242, 242, 242);
  color: rgb(102, 102, 102);
  height: 15px;
  line-height: 16px;
  font-size: 12px;
  white-space: nowrap;
  border-radius: 15px;
  margin-right: 6px;
  padding: 0px 5px;
  position: relative;
}
.tip{
  margin-bottom: 50px;
  height: 20px;
  width: 100%;
  background: #f4f4f4a8;
  font-size: 12px;
  text-align: center;
  line-height: 20px;
}

/* #endregion */
/* #region  Loading */
@keyframes Loading {
  0% {
    transform: translateX(-30px)
  }
  to {
    transform: translateX(-360px)
  }
}
.loading-content{
  position: fixed;
  top: 50%;
	left: 50%;
  transform: translate(-50%,-70%);
  width: 100px;
  height: 100px;
  background: black;
  opacity: 0.8;
  border-radius: 20px;
  font-size: 14px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 99;
}
.loading-content .image-wrap {
  position: relative;
  width: 50px;
  height: 50px;
  overflow: hidden;
}
.loading-content .image-wrap .image-box{
  width: 360px;
  transform: translateX(-30px);
  -webkit-animation: Loading 3.5s steps(4) infinite;
  animation: Loading 1.5s steps(4) infinite;
}
.loading-box .image-wrap{
  margin-top: 5px;
}
.loading-content .text{
  color: #f1ede6;
}
.image-box img{
  display: inline-block;
  width: 40px;
	padding: 0 20px;
}
/* #endregion */
/* #region  精选活动 */
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
  margin-bottom: 20px;
}
.activitie h2{
  color: #333;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin: 24px 0px 10px 0px;
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
/* #endregion */
/* #region  热卖榜单 */
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
  top: 378px;
  left: 108px;
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
/* #endregion */
#body{
  width: 100%;
  height: 100%;
  background: #F7F7F7;
  margin-bottom: 30px;
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
