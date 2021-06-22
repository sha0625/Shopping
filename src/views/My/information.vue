<template>
    <div style="background:black">
        <van-cell-group>
            <van-cell title="头像" center >
                <template #right-icon>
                    <img class="photo" @click="clickphoto" :src="photoInfo.avatar" alt="">
                    <van-icon class="arrow" name="arrow" color="#CACACA"/>
                </template>
            </van-cell>
            <van-cell title="昵称" center :value="he_name">
                <template #right-icon>                    
                    <van-icon class="arrow" name="arrow" color="#CACACA"/>
                </template>
            </van-cell>
        </van-cell-group>
 
        <!-- 选择拍照或相册 -->
        <div class="action" v-if="Mask">
            <div class="choice">
                <van-button plain class="photograph">拍照</van-button>
                <van-button plain class="album" @click.stop="uploadHeadImg">从相册选择</van-button>
            </div>          

            <van-button plain class="cancel" @click="cancel">取消</van-button>
            <input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>
        </div>
        <div class="jm-theme" v-if="Mask"></div>
    </div>
</template>
<script>
import cropper from './cropper.vue'
export default {
    components:{
        cropper
    },
    data(){
        return{
            ccc:"头部子组件",
            headerImage:'',
            mallCode: '',
            routerParams:'',
            he_name:'',
            Mask:false,//遮罩显隐
            photoInfo: {
                // 初始图片
                avatar: ''
            },
            id:'',
            cimg:''
        }
    },
    created(){
        this.getParams();
    },
    mounted(){
        this.getParams();
    },
    methods:{
        getParams(){
            // 获取My页面传来的头像等值...
            this.photoInfo.avatar = this.$route.query.mallCode
            this.he_name =this.$route.query.name

            
            // this.mallInfo.searchMap.mallCode = routerParams;
            // console.log(this.photoInfo.avatar +this.he_name)
        },
        // 点击头像~
        clickphoto(){
            this.Mask = true
            // this.$router.push({
            //     path:'/cropper'
            // })
        },
        // 选择图片上传
        uploadHeadImg(){
            this.$el.querySelector(".hiddenInput").click();
            // setTimeout(()=>{
            //     this.$router.push({
            //         path: '/newcro',
            //         name:'newcro',
            //         params:{
            //             cimg: this.photoInfo.avatar
            //         }
            //     })
            // },3000)
            
        },
        ff(){
           
        },
        // 
        handleFile(e){
            // ie下支持 e.target  || ff火狐下支持e.srcElement  都是调用他的各种属性 
            let $target = e.target || e.srcElement
            // 取第一张图第一个元素
            let file = $target.files[0]
            // 创建对象 使用File对象指定要读取的文件或数据
            var reader = new FileReader() //读取本地文件，以gbk编码方式输出
            reader.onload = (data) => { //成功读取后
                let res = data.target || data.srcElement
                // 成功读取后输出结果
                this.photoInfo.avatar = res.result
            // console.log(res.result)
            }
            reader.readAsDataURL(file)
            this.Mask = false
        },
        // 取消上传
        cancel(){
            this.Mask = false
            // 获取cropper页面的裁剪后图片
            var routerParams = this.$route.params.img
            this.photoInfo.avatar = routerParams
        },
    },
    watch: {
        '$router' :'getParams'

    }

}
</script>
<style scoped>
.hiddenInput{
    display: none;
}
@keyframes Loading {
    0% {
      transform: translateY(230px)
    }
    to {
      transform: translateY(0px)
    }
}
.jm-theme::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0);
    opacity: .55;
}
.action{
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 99;
    animation: Loading 0.5s ease-in;
}
.action .choice{
    margin-bottom: 0.75rem;    
}
.action .choice .photograph{
    color: #AE201E;
    border-bottom: none;
    border-radius: 0.5rem 0.5rem 0 0;
}
.action .choice .album{
    border-radius: 0 0 0.5rem 0.5rem;
}
.action .cancel{
    margin-bottom: 0.8rem;
    border-radius: 0.5rem;
}
/deep/ .van-button--plain{
    display: block;
    margin: 0 auto;
    width: 90%;
    height: 50px;
    color: #1E74BD;
    border: 1px solid #DFDFDF;
}

.photo{
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
}
.arrow{
    margin-left: 0.5rem;
}
</style>