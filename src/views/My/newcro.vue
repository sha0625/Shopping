<template>
  <div id="app">
			<div class="item_bock head_p">
				<div class="head_img">
					<!--图片地址动态绑定-->
					<img :src="userInfo.avatar"/>
				</div>
				<div class="setting_right" @click.stop="uploadHeadImg">
					<div class="caption">更改头像</div>
				</div>
				<input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>
			</div>
		</div>
</template>
<script>
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'
export default {
    data(){
        return{
            userInfo: {
                // 初始图片
                avatar: 'img/img.jpg'
            }
        }
    },
    methods: {
        // 打开图片上传
        uploadHeadImg: function () {
            // 获取文档class="hiddenInput"的元素  点击时触发input打开图片上传的点击事件
            this.$el.querySelector('.hiddenInput').click()
        },
        // 将头像显示
        handleFile: function (e) {
            // ie下支持 e.target  || ff火狐下支持e.srcElement  都是调用他的各种属性 
            let $target = e.target || e.srcElement
            // 取第一张图第一个元素
            let file = $target.files[0]
            // 创建对象 使用File对象指定要读取的文件或数据
            var reader = new FileReader() //读取本地文件，以gbk编码方式输出
            reader.onload = (data) => { //成功读取后
                let res = data.target || data.srcElement
                // 成功读取后输出结果
                this.userInfo.avatar = res.result
            }
            reader.readAsDataURL(file)
        },
    }
}
</script>
<style scoped>
.item_bock {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height:94px;
    width: 300px;
    padding:0px 24px 0px 38px;
    border-bottom: 1px solid #f7f7f7;
    background: #fff;
}
.head_p {
    height:132px;
}
.head_img{
    height: 90px;
}
.head_img img{
    width:90px;
    height:90px;
    border-radius:50px
}
.setting_right{
    display: flex;
    height: 37px;
    justify-content: flex-end;
    align-items: center;
}
.hiddenInput{
    display: none;
}
.caption {
    color: #8F8F8F;
    font-size: 26px;
    height: 37px;
}
</style>