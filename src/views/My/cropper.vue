<template>
  <div class="hello">

    <!-- <p>预览</p>
    <div class="before"></div> -->
    <div class="upImg" style="display:none">
      <div class="head"> 
          <div class="cross_left">
              <!-- <van-icon name="cross" size="1.5rem" color="#ffffff"/>  -->
              <span>修剪照片</span>
          </div>
          <div class="cross_right">
              <!-- <van-icon name="success" size="1.5rem" color="#ffffff"/> -->
          </div>
      </div>
      <div class="Tailor" :style="{'height':screenHeight}">
          <img src="../../assets/carousel-2.png" :ref="img" alt="">
      </div>
    </div>


    <iy-button style="margin: 30px auto;" type="error" @click="sureSava">裁剪</iy-button>

    <div class="container">
      <div class="img-container">
        <img src="../../assets/logo.png" ref="image" alt=""> 
      </div>
      <div class="afterCropper">
        <img :src="afterImg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'

export default {
  name: 'HelloWorld',
  data () {
    return {
        myCropper: null,
        afterImg: '',
        screenHeight:'',
        img:'',
      }
  },
  created(){
    this.$nextTick(() => {
      var height = window.screen.height//屏幕高度
      var headHeight= document.querySelectorAll("div[class='head']")[0].clientHeight;
      console.log(headHeight)
      this.screenHeight = (height-headHeight)+"px";
    });
  },
  mounted() {
    this.init()
  },
  methods: {
    init(){
      this.myCropper = new Cropper(this.$refs.image, {
        viewMode: 1,//视图控制， 0限制裁剪框不能超出图片的范围  且图片填充模式为 cover 最边长填充
        dragMode: 'none',//拖拽脱模式
        initialAspectRatio: 1,//裁剪框宽高比的初始值 默认与图片宽度比相同 
        aspectRatio: 1, //设置裁剪框为固定的宽高比
        preview: '.before',//预览 设置一个区域容器预览裁剪后的效果
        background: false,//是否在容器内显示网格状的背景 默认true
        autoCropArea: 0.6,//设置裁剪区域占图片的大小  值为0-1 默认0、8表示80%区域
        zoomOnWheel: false,//是否通过鼠标滚轮缩放图片 默认true
      })
    },
    sureSava(){
      this.afterImg = this.myCropper.getCroppedCanvas({
        imageSmoothingQuality: 'high'
      }).toDataURL('image/jpeg')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.upImg{
    width: 100%;
}
.upImg .head{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin:0 0.5rem;
}
.upImg .head .cross_left{
    display: flex;
    align-items: center;
}
.upImg .head .cross_left span{
    color: #ffffff;
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 1px;
    margin: 0.5rem 0 0.5rem 0.75rem;
}
.upImg .Tailor{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}
.upImg .Tailor img{
    max-width: 100%;
    max-height: 100%;
    margin: auto;
}
.hiddenInput{
    display: none;
}
/****/
.container{
  display: flex;
}
.before{
  width: 100px;
  height: 100px;
  overflow: hidden;
  /* 这个属性可以得到想要的效果 */
}
.img-container{
  height: 400px;
  overflow: hidden;
}
.afterCropper{
  flex: 1;
  margin-left: 20px;
  border: 1px solid salmon; 
  text-align: center;
}
.afterCropper img{
  width: 150px;
  margin-top: 30px;
}
</style>
