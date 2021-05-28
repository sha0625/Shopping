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
      <van-tabbar-item to="/My" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  <van-tabs v-model="tabactive" color="#323233" swipeable>
    <van-tab title="最新">
      <!-- 轮播 -->
      <div id="swip">
        <van-swipe :autoplay="5000" width="90%">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <div>
              <img v-lazy="image" width="100%" height="100%" />
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
          <div class="i"></div>
          <span>看看大家都在买什么</span>
        </div>
        <div class="hotsale">
          <van-row>
            <van-col span="12">
              <div class="host_content"> 
                <div class="sub-left">
                  <p>男鞋榜</p>
                  <span>热销1486件</span>
                </div>
                <div class="sub-right">
                  <img src="../assets/images/hot/hot_1.jpg" alt="">
                </div>
              </div>
            </van-col>
            <van-col span="12">
              <div class="host_content"> 
                <div class="sub-left">
                  <p>美护榜</p>
                  <span>热销1865件</span>
                </div>
                <div class="sub-right">
                  <img src="../assets/images/hot/hot_2.jpg" alt="">
                </div>
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
                  <span>{{act.text}}</span>
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
          <div class="product-item" @click="get_details" v-for="(item,index) in list" :key="index" v-if="index < productlen">
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
          'tit':'Madaluxe Vault奢牌腕表2.7折起','text':'别样 推荐'},
        {'img':'../../static/hot/jingxuan_2.jpg','icon':'../../static/hot/jingxuan_4.png',
          'tit':'别样独家|8折收香缇卡、海蓝之谜','text':'留白 推荐'},
        {'img':'../../static/hot/jingxuan_2.jpg','icon':'../../static/hot/jingxuan_4.png',
          'tit':'别样独家|8折收香缇卡、海蓝之谜','text':'别样 推荐'},
        {'img':'../../static/hot/jingxuan_1.png','icon':'../../static/hot/jingxuan_3.png',
          'tit':'Madaluxe Vault奢牌腕表2.7折起','text':'留白 推荐'},
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
    get_details(){
      this.$router.push({
        path:'/Pro_deta'
      })
    },
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
    scrollBottom(e){
      var scrollHeight = document.documentElement.scrollHeight //滚动条的总高度
      var scroll = (window.screen.height+document.documentElement.scrollTop)
      var clientHeight = document.body.clientHeight;
      var top = e.srcElement.scrollingElement.scrollTop;//滚动条滚动时，距离顶部的距离
      var screen = window.screen.height//屏幕高度
      // console.log("screen--"+screen+"   top--"+top +"   scrollHeight--"+scrollHeight+"  screenTop"+(top+screen))
      
      if (((top+screen) >= scrollHeight ) && this.REQUIRE) {
        this.loading = true;
        this.pages = this.pages+1
        setTimeout(() => {
          this.loading = false;
          this.productlen = this.productlen+5
          if( Math.ceil(this.list.length/5) === this.pages){
            this.REQUIRE = false;
            setTimeout(() => {
              this.tipactive= true
            },500)
          }
        }, 1000)
      }
    },
    getRem(pwidth,prem){
      var html = document.getElementsByTagName("html")[0];
      var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
      html.style.fontSize = oWidth/pwidth*prem + "px";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/index.css'
</style>
