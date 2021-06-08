<template>
  <div class="box">
    <div class="p-product-detail">


			<div class="carousel">
				<div class="tab">
					<span class="active" @click="tabclicke" ref="span">简欧</span>
					<span @click="tabclicke" ref="span">中式</span>
				</div>
				<div class="swiper-container s2">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<!--简欧-->
							<div class="swiper-container jo">
								<div class="swiper-wrapper">
									<div class="swiper-slide">1</div>
									<div class="swiper-slide">2</div>
									<div class="swiper-slide">简欧 slide3</div>
									<div class="swiper-slide">简欧 slide4</div>
								</div>
								<div class="pagination"></div>
							</div>
						</div>
						<div class="swiper-slide">
							<!--中式-->
							<div class="swiper-container zs">
								<div class="swiper-wrapper">
									<div class="swiper-slide">中式 slide1</div>
									<div class="swiper-slide">中式 slide2</div>
									<div class="swiper-slide">中式 slide3</div>
									<div class="swiper-slide">中式 slide4</div>
								</div>
								<div class="pagination"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

    

    <!--  <div class="carousel">
        <div class="c-carousel">
          <div class="carousel-slice">
            <van-swipe :autoplay="33000">
              <van-swipe-item v-for="(image, index) in swipeImg" :key="index">
                <img class="swipeimg" v-lazy="image"/>
              </van-swipe-item>
            </van-swipe>
          </div>
        </div>
        <div class="m-color-picker">
        </div>
      </div> -->
      <!-- 商品信息 -->
      <div class="m-product-info">
        <div class="preview-price">
          <div class="price">$29.97</div>
          <div class="original-price">$65</div>
        </div>
        <div class="main-price">
          <span class="small">约</span>¥196
        </div>
        <div class="promotion-tags">
          <div class="c-tag">特惠</div>
          <div class="tag">4.6折</div>
        </div>
        <div class="main-title"> Vans | Old Skool Suede Sneaker</div>
        <div class="protect-bar">
          <div class="protect-item">
            <van-icon name="flower-o" />机器人下单
          </div>
          <div class="protect-item">
            <van-icon name="bag-o" />官网直邮
          </div>
          <div class="protect-item">
            <van-icon name="discount" />100%正品
          </div>
        </div>
      </div>
      <!--规格选择-->
      <div class="m-specification" @click="buy">
        <div class="title">规格</div>
        <div class="tips">
          请选择<span class="unselected-item">尺码</span>
        </div>
      </div>
      <!-- 服务 -->
      <div class="m-features">
        <div class="title">服务</div>
        <div class="tag">支持便捷直邮</div>
        <div class="tag">同步官网</div>
        <div class="tag">官网直邮</div>
        <div class="tag">正品保障</div>
        <div class="tag">包裹已消毒</div>

      </div>
      <!--foot -->
      <van-goods-action>
          <van-goods-action-icon icon="wap-home-o" color="#5A5A5A" />
          <van-goods-action-icon icon="service-o" color="#5A5A5A" />
          <van-goods-action-icon icon="bag-o" color="#5A5A5A" />
          <van-goods-action-button text="立即购买" @click="buy"/>
          <van-goods-action-button text="加入购物车" @click="addcart"/>
      </van-goods-action>

      <van-sku v-model="skushow" :sku="sku" :goods="goods" :goods-id="goodsId" :quota="quota" :quota-used="quotaUsed" 
      :hide-stock="sku.hide_stock" @buy-clicked="onBuyClicked" @add-cart="onAddCartClicked" />
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import '../../assets/js/idangerous.swiper'
import '../../assets/js/swiper.min.js'

export default {
  data(){
    return{
      swipeImg:[
        'https://5thave-img-cdn-g.bybieyang.com/pf/9ee31f92-ddf2-38dc-8734-1886a8566545.jpg?x-oss-process=image/format,jpg/interlace,1',
        'https://5thave-img-cdn-g.bybieyang.com/pf/97764d80-0248-3016-bc6e-b218ac840351.jpg?x-oss-process=image/format,jpg/interlace,1',
        'https://5thave-img-cdn-g.bybieyang.com/pf/04448b97-a084-30c5-9a06-39cdf518b4d1.jpg?x-oss-process=image/format,jpg/interlace,1',
        'https://5thave-img-cdn-g.bybieyang.com/pf/f49b2a41-5c02-3a23-8336-9547ccb656d7.jpg?x-oss-process=image/format,jpg/interlace,1'
      ],
      skushow: false,//是否显示商品规格弹窗
      sku:{        
        tree:[
          {
            k: '颜色：',
            k_s: 's1',
            v:[
              {
                id:'223',
                name:'Navy',
                imgUrl:'../../../static/product/vans01.jpg',
                previewImgUrl: '../../../static/product/vans01.jpg',
              },
              {
                id: '224',
                name: 'Black/Pewter',
                imgUrl: '../../../static/product/vans02.jpg',
                previewImgUrl: '../../../static/product/vans02.jpg',
              },
              {
                id: '225',
                name: 'Racing Red/True White',
                imgUrl: '../../../static/product/vans05.jpg',
                previewImgUrl: '../../../static/product/vans05.jpg',
              },
            ],
            largeImageMode: false,//大图模式
          },
          {
            k: '尺码：',
            k_s: 's2',
            k_id: '2',
            v:[
              {
                id: '1110',
                name: '36',
              },
              {
                id: '1111',
                name: '37',
              }
            ],
          }
        ],//蓝色36 蓝色37 灰色36 灰色37
        list: [
          {
            id: 2259, // skuId
            price: 43100, // 价格（单位分）
            s1: '223', // 颜色id
            s2: '1110', // 尺码id
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 2260, // skuId
            price: 43500, // 价格（单位分）
            s1: '223', // 颜色id
            s2: '1111', // 尺码id
            stock_num: 0 // 当前 sku 组合对应的库存
          },
          {
            id: 2261, // skuId
            price: 43500, // 价格（单位分）
            s1: '224', // 颜色id
            s2: '1110', // 尺码id
            stock_num: 66 // 当前 sku 组合对应的库存
          }, 
          {
            id: 2262, // skuId
            price: 43500, // 价格（单位分）
            s1: '224', // 颜色id
            s2: '1111', // 尺码id
            stock_num: 120 // 当前 sku 组合对应的库存
          },
          {
            id: 2263, // skuId
            price: 43500, // 价格（单位分）
            s1: '225', // 颜色id
            s2: '1110', // 尺码id
            stock_num: 66 // 当前 sku 组合对应的库存
          }, 
          {
            id: 2264, // skuId
            price: 43500, // 价格（单位分）
            s1: '225', // 颜色id
            s2: '1111', // 尺码id
            stock_num: 120 // 当前 sku 组合对应的库存
          }
        ],
        price: '421.00', // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品       
        hide_stock: false // 是否隐藏剩余库存
      },
      goods:{
        //默认商品 sku 缩略图
        picture:'../../../static/product/vans04.jpg'
      },//商品信息
      goodsId:'946755',//商品id
      quota:0,//限购数，0表示不限购
      quotaUsed:0,//已经购买过的数量
      messageConfig:''//
    }
  },
  mounted(){
    // console.log(this.$refs.span)
    var nav = document.querySelectorAll(".carousel > .tab > span")
    // nav = nav.index(0)
    console.log(nav)
    var mySwiper = new Swiper('.s2', {
      onlyExternal: true, // 禁用鼠标拖拉
      // loop: true, // 轮播嵌套的时候必须去掉这个，否则最后一个轮播的嵌套轮播异常
      onSlideChangeStart: function(swiper) {
        this.switchTab(swiper.activeLoopIndex);
        // 下面这段代码用于解决loop属性不能使用的问题
        if (swiper.activeLoopIndex == 3) {
          mySwiper.stopAutoplay();
          setTimeout(function() {
            this.nav.eq(0).trigger("click")
            mySwiper.startAutoplay();
          }, 2000)
        }
      }
    })
    var mySwiper_jo = new Swiper('.jo', {
      pagination: {
        el: '.jo .pagination'
      },
      paginationClickable: true,
      onlyExternal: false, // 禁用鼠标拖拉
      loop: true,
      onSlideChangeStart: function(swiper) {
        switchTab(swiper.activeLoopIndex);
      }
    })
    var mySwiper_zs = new Swiper('.zs', {
      pagination: {
        el: '.zs .pagination'
      },
      paginationClickable: true,
      onlyExternal: false, // 禁用鼠标拖拉
      loop: true,
      onSlideChangeStart: function(swiper) {
        switchTab(swiper.activeLoopIndex);
      }
    })
  },
  methods:{
    switchTab(index) {
      nav.removeClass('active')
      nav.eq(index).addClass("active")
    },
    tabclicke(){
      var nav2 = document.querySelectorAll(".carousel > .tab > span")
      console.log(nav2)
      var index = nav2.index();
      nav2.removeClass("active");
      this.addClass('active');
      mySwiper.swipeTo(index, 1000, false);
    },
    buy(){
      this.skushow = true
    },
    addcart(){
      this.skushow = true
    },
    onBuyClicked(){

    },
    onAddCartClicked(){
      
    }
  }
}
</script>
<style scoped>
/*@import url("../../assets/css/swiper/bootstrap.min.css");*/
@import url("../../assets/css/swiper/swiper2.x.css");
@import url("../../assets/css/swiper/swiper.min.css");
@import url("../../assets/css/swiper/idangerous.swiper.css");

@import url("../../assets/css/product_details.css");
.swiper-container {
  width: 500px;
  height: 300px;
  margin: 20px auto;
}
</style>