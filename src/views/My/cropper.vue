<template>
  <div class="box">
    <div class="upImg">
      <div class="head"> 
        <div class="cross_left">
          <van-icon name="cross" size="1.5rem" color="#ffffff"/> 
          <span>修剪照片</span>
        </div>
        <div class="cross_right" @click="sureSava">
          <van-icon name="success" size="1.5rem" color="#ffffff"/>
        </div>
      </div>
      <div class="Tailor" :style="{'height':screenHeight}">
      	<!--<img src="../../assets//carousel-2.png" ref="image"> -->
        <img :src="avatar" ref="image">
          <!-- <img :src="photoInfo.avatar" alt=""> -->
      </div>
    </div>
  </div>
</template>
<script>
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'
export default {
  data(){
    return{
      screenHeight:'',
      myCropper: null,
      avatar:'../../../static/carousel-2.png',
      photoInfo: {
        // 初始图片
        avatar: ''
      },
    }
  },
  created(){
    this.$nextTick(() => {
      var height = window.screen.height//屏幕高度
      var headHeight= document.querySelectorAll("div[class='head']")[0].clientHeight;
      this.screenHeight = (height-headHeight)+"px";
    });
  },
  mounted(){
    this.init();
    this.getPrams();
  },
  methods:{
    init(){
      this.myCropper = new Cropper(this.$refs.image, {
        viewMode: 1,
        dragMode: 'none',
        initialAspectRatio: 1,
        aspectRatio: 1,
        preview: '.before',
        background: false,
        autoCropArea: 0.6,
        zoomOnWheel: false,
      })
    },
    getPrams(){
      // 获取cropper页面的裁剪后图片
      var routerParams = this.$route.params.cimg
      this.avatar = routerParams
      console.log(this.avatar)
    },
    // 保存
    sureSava(){
      this.avatar = this.myCropper.getCroppedCanvas({
        imageSmoothingQuality: 'high'
      }).toDataURL('image/jpeg')
      this.$router.push({
        path:'/information',
        name:'information',
        params:{
          img:this.avatar
        }
      })
    }
  }
}
</script>
<style scoped>
.box{
  background: #000000;
}
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
  display: flex;
  justify-content: center;
}
.upImg .Tailor img{
  max-width: 100%;
  max-height: 100%;
  margin: auto;
}
</style>