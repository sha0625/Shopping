<template>
  <div>
    <!-- 遮罩层 -->
    <div class="container" v-show="panel">
        <div>
            <img src="../../assets/images/hot/hot_3.jpg" alt="" width="100px">
        </div>
        <button type="button" id="button" @click="commit">使用</button>
        <button type="button" id="cancel" @click="commit">取消</button>
    </div>
    <div class="upshow">
        <div class="avatar" :class="{shadow: !imageShow}" @click="changeImg">
            <div v-show="imageShow">
                <img src=""  @error="imgLoadError" alt="">
            </div>
            <!-- <span v-show="!imageShow">{{name.substr(name.length-2)}}</span> -->
        </div>
        <div class="upfile">
            <input type="file" id="change" accept="image/" @change="change" ref="files">
            <label for="change"></label>
        </div>
    </div>
  </div>
</template>
<script>
import Cropper from 'cropperjs'
export default {
    data(){
        return{
            headerImage: "",
            picValue: "",
            cropper: "",
            newpath: this.path,
            croppable: false,
            panel: false,
            url: "",
            imgCropperData: {
                accept: "image/gif, image/jpeg, image/png, image/jpg"
            }, 
            imageShow: true // 是否显示图片
        }
    },
    mounted(){
        //初始化这个裁剪框
        var self = this;
        var image = document.getElementById("image");
        this.cropper = new Cropper(image, {
            aspectRatio: 1 / 1,
            viewMode: 1, 
            background: false,
            zoomable: true, //是否可以缩放图片 true-可以
            movable: true,//是否能移动图片
            cropBoxMovable: false,//是否允许拖动裁剪框
            cropBoxResizable: false,//是否允许拖动 改变裁剪框大小
            dragMode: 'move', // 是否可以移动图片
            ready: function () {
                self.croppable = true;
            }
        });
    },
    methods:{     
        //  取消上传
        cancel () {
            console.log("cancel....")
            // 关闭弹框
            this.panel = false;
            // 清空此时上传的文件
            this.$refs.files.value = '';
        },
        // 点击头像调用手机相册
        changeImg(){
            console.log("changeImg....")
            this.$refs.files.click();
        },
        // 创建url路径
        getObjectURL(file){
            console.log("getObjectURL....")
            
            var url = null;
            if(window.URL.createObjectURL != undefined){
                // basic
                url = window.URL.createObjectURL(file);
            }else if(window.URL != undefined){
                // mozilla(firefox)
                url = window.URL.createObjectURL(file);
            }else if (window.webkitURL != undefined) {
                // webkit or chrome
                url = window.webkitURL.createObjectURL(file);
            }
            return url;
        },
        // input框change事件，获取到上传的文件
        change(e){
            console.log("input框change事件，获取到上传的文件....")

            let files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            let type = files[0].type; //文件的类型，判断是否是图片
            let size = files[0].size; //文件的大小，判断图片的大小
            if (this.imgCropperData.accept.indexOf(type) == -1) {
                alert("请选择我们支持的图片格式！");
                return false;
            }
            if (size > 5242880) {
                alert("请选择5M以内的图片！");
                return false;
            }
            this.picValue = files[0];
            this.url = this.getObjectURL(this.picValue);
            //每次替换图片要重新得到新的url
            if (this.cropper) {
            this.cropper.replace(this.url);
            }
            this.panel = true;
        },
        // 确认提交
        commit(){
            console.log("commit确认提交....")

            this.panel = false;
            this.$refs.files.value = '';
            var croppedCanvas;
            var roundedCanvas;
            if (!this.croppable) {
                return;
            }
            // Crop
            croppedCanvas = this.cropper.getCroppedCanvas();

            // Round
            roundedCanvas = this.getRoundedCanvas(croppedCanvas);
            this.headerImage = roundedCanvas.toDataURL();
            let a = this.dataURLtoFile(this.headerImage)

            //上传图片
            this.postImg(a);
        },
        //  canvas画图
        getRoundedCanvas (sourceCanvas) {
            console.log("canvas画图....")

            var canvas = document.createElement("canvas");
            var context = canvas.getContext("2d");
            var width = sourceCanvas.width;
            var height = sourceCanvas.height;
            canvas.width = width;
            canvas.height = height;
            context.imageSmoothingEnabled = true;
            context.drawImage(sourceCanvas, 0, 0, width, height);
            context.globalCompositeOperation = "destination-in";
            context.beginPath();
            context.arc(
                width / 2,
                height / 2,
                Math.min(width, height) / 2,
                0,
                2 * Math.PI,
                true
            );

            context.fill(); 
            return canvas;
        },
        // 图片加载错误
        imgLoadError () {
            console.log("imgLoadError....")

            // 隐藏图片
            this.imageShow = false
        }        
    }
}
</script>
<style scoped>

</style>