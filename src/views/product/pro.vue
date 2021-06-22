<template>
    <div class="carousel">
        <div class="tab">
            <span class="active" @click="tabclicke">简欧</span>
            <span @click="tabclicke" >中式</span>
        </div>
        <swiper ref="mySwiper" :options="swiperS" class="s2">
            <swiper-slide class="swiper-slideS2">
                <swiper :options="swiperjo">
                    <swiper-slide>
                        <img src="../../../static/carousel-2.png"/>
                    </swiper-slide>
                    <swiper-slide>简欧2</swiper-slide>
                    <div class="jo-pagination" slot="pagination1"></div>
                </swiper>
            </swiper-slide>
            <swiper-slide>
                <swiper :options="swiperzs">
                    <swiper-slide>中式1</swiper-slide>
                    <swiper-slide>中式2</swiper-slide>
                    <div class="zs-pagination" slot="pagination2"></div>
                </swiper>
            </swiper-slide>
        </swiper>


       <!-- <div class="tab">
            <span class="active" @click="tabclicke" ref="span">简欧</span>
            <span @click="tabclicke" ref="span">中式</span>
        </div>-->
        <!--<div class="swiper-container s2">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
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
        </div>-->
    </div>
</template>
<script>
import Swiper from 'swiper'
import $ from 'jquery'
import '../../assets/js/idangerous.swiper'
import '../../assets/js/swiper.min.js'
import '../../assets/js/sw.js'

export default {
  data(){
    return{
      nav:$(".carousel > .tab > span"),
      swiperS:{
        slidesPerView:1,
        on:{
            show:function(){
                this.switchTab(swiper.activeLoopIndex);
            }
        }
      },
      swiperjo:{
        slidesPerView:1,
        pagination:{
            el: '.jo-pagination',
            clickable: true
        },
      },
      swiperzs:{
        slidesPerView:1,
        pagination:{
            el: '.zs-pagination',
            clickable: true
        },
      }
    }
  },
  computed:{
    swiperBig:function(){
        return this.$refs.mySwiper.$swiper
    }
  },
  created(){
    // var mySwiper = new Swiper('.s2', {
    //   onlyExternal: true, // 禁用鼠标拖拉
    //   // loop: true, // 轮播嵌套的时候必须去掉这个，否则最后一个轮播的嵌套轮播异常
    //   onSlideChangeStart: function(swiper) {
    //     this.switchTab(swiper.activeLoopIndex);
    //     // 下面这段代码用于解决loop属性不能使用的问题
    //     if (swiper.activeLoopIndex == 3) {
    //       mySwiper.stopAutoplay();
    //       setTimeout(function() {
    //         this.nav.eq(0).trigger("click")
    //         mySwiper.startAutoplay();
    //       }, 2000)
    //     }
    //   }
    // })
  },
  mounted(){
    var _this = this
    var ee = $(".carousel > .tab > span")
    ee.on("click", function() {
        var index = $(this).index();
        console.log(index)
        ee.removeClass("active");
        $(this).addClass('active');
        console.log(this)
        _this.swiperBig.slideTo(index
        , 1000, false);
    });
    // this.swiperBig.slideTo(1, 1000, false);

    // var nav = $(".carousel > .tab > span")
	// console.log(this.nav.prevObject.length)
    
    // var mySwiper_jo = new Swiper('.jo', {
    //   pagination: {
    //     el: '.jo .pagination'
    //   },
    //   paginationClickable: true,
    //   onlyExternal: false, // 禁用鼠标拖拉
    //   loop: true,
    //   onSlideChangeStart: function(swiper) {
    //     switchTab(swiper.activeLoopIndex);
    //   }
    // })
    // var mySwiper_zs = new Swiper('.zs', {
    //   pagination: {
    //     el: '.zs .pagination'
    //   },
    //   paginationClickable: true,
    //   onlyExternal: false, // 禁用鼠标拖拉
    //   loop: true,
    //   onSlideChangeStart: function(swiper) {
    //     switchTab(swiper.activeLoopIndex);
    //   }
    // })
  },
  methods:{
    switchTab(index) {
      this.nav.removeClass('active')
      this.nav.eq(index).addClass("active")
    },
    tabclicke(){
        // var el = ev.currentTarget;
        // console.log(this.nav);
    //   var index = this.nav.index();
    //   console.log(index)
    //   this.nav.removeClass("active");
    //   $(this).addClass('active');
    //   this.swiperBig.slideTo(1, 1000, false);
    },
  }
}
</script>
<style scoped>
/*@import url("../../assets/css/swiper/swiper2.x.css");
@import url("../../assets/css/swiper/swiper.min.css");
@import url("../../assets/css/swiper/idangerous.swiper.css");
*/
.jo-pagination{

}
.swiper-container {
  width: 500px;
  height: 300px;
  margin: 20px auto;
}
.carousel .tab{
    font-size: 0;
}
.carousel .tab > span{
    font-size: 14px;
    display: inline-block;
    width: 25%;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
}
.carousel .tab > .active{
    color: #f43530;
    font-weight: bold;
}
.s2 .swiper-slideS2{
    line-height: 300px;
    background-color: #f4f4f4;
    color: black;
}
.s2 {
    width: 100%;
    height: 300px;
    text-align: center;
}
.s2 .swiper-slide{
    line-height: 300px;
    background-color: #f4f4f4;
    color: black;
}
</style>