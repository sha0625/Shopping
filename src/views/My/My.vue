<template>
    <div id="body">
        <!--标签栏Tabbar-->
        <van-tabbar v-model="Tabbleactive" >
            <van-tabbar-item replace to="/HelloWorld" icon="home-o">Hemo</van-tabbar-item>
            <van-tabbar-item replace to="/Category" icon="search">分类</van-tabbar-item>
            <van-tabbar-item to="/My" icon="friends-o">我的</van-tabbar-item>
        </van-tabbar>
        <!-- header -->
        <div class="header">
            <div class="he_t">
                <div class="setup"><img src="../../assets/images/icon/setup.png" alt=""></div>
                <div class="news"><img src="../../assets/images/icon/xx.png" alt=""></div>
            </div>
            <div class="he_po" @click="clickPhoto()">
                <div class="photo" ><img :src="photo" alt=""></div>
                <div class="name"><p>{{he_name}}</p></div>
            </div>
            <div class="he_list">
                <div>
                    <div>1</div>
                    <p>商品收藏</p>
                </div>
                <div>
                    <div>0</div>
                    <p>商家收藏</p>
                </div>
                <div>
                    <div>113</div>
                    <p>浏览记录</p>
                </div>
                <div>
                    <div>50</div>
                    <p>代金卷</p>
                </div>
            </div>
        </div>
        <!-- order订单 -->
        <div class="order">
            <div class="order_he">
                <div class="title">我的订单</div>
                <div class="img"><van-icon name="arrow" color="#CACACA"/></div>
            </div>
            <div class="order_details">
                <div class="details_list">
                    <img src="../../assets/images/my/payment.png" alt="">
                    <div class="details_tit">待付款</div>
                </div>
                <div class="details_list">
                    <img src="../../assets/images/my/consignment.png" alt="">
                    <div class="details_tit">确认中</div>
                </div>
                <div class="details_list">
                    <img src="../../assets/images/my/receiving.png" alt="">
                    <div class="details_tit">待收货</div>
                </div>
                <div class="details_list">
                    <img src="../../assets/images/my/comment.png" alt="">
                    <div class="details_tit">待评价</div>
                </div>
                <div class="details_list">
                    <img src="../../assets/images/my/cancel.png" alt="">
                    <div class="details_tit">已取消</div>
                </div>               
            </div> 
            <div class="ad">
                <img src="../../assets/images/my/img.png" alt="">
           </div>
        </div>
        <!-- 下面部分 -->
        <div class="content">
            <div class="list">
                <div class="left">
                    <img class="icon" src="../../assets/images/my/gift.png" alt="">
                    <div class="text">邀请有礼</div>
                </div>                
                <div class="right">
                    <div class="card"><p>邀请可得￥70</p></div>
                    <van-icon name="arrow" color="#CACACA"/>
                </div>
            </div>
            <div class="list">
                <div class="left">
                    <img class="icon" src="../../assets/images/my/share.png" alt="">
                    <div class="text">分享带货</div>
                </div>                
                <div class="right">
                    <div class="text">1000积分</div>
                    <van-icon name="arrow" color="#CACACA" />
                </div>
            </div>
            <div class="list" v-for="(item,index) in contentList" :key="index">
                <div class="left">
                    <img class="icon" :src="item.icon" alt="">
                    <div class="text">{{item.text}}</div>
                </div>                
                <div class="right">
                    <van-icon name="arrow" color="#CACACA"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import info from './information.vue'
export default {
    components: {
        'v-header':info
    },
    data(){
        return{
            aaa: '我是一个首页home组件',
            title: '首页', //将父组件的值传给子组件:父组件绑定子组件属性，子组件接收父组件属性
            flag: true,
            name:'',
            photo:'../../../static/carousel-2.png',
            he_name:'潜入夜',
            Tabbleactive: 2,
            contentList: [
                {"icon":"../../../static/my/security.png","text":"正品保障"},
                {"icon":"../../../static/my/service.png","text":"联系客服"},
                {"icon":"../../../static/my/help.png","text":"帮助文档"}
            ],
        }
    },
    methods:{
        run (data){
            alert("我是父组件My的方法"+data)
        },
        // 点击头像 进入information资料详情
        clickPhoto(){
            this.$router.push({
                path: '/information',
                // path: '/A',
                query: {
                    mallCode: this.photo,
                    name: this.he_name
                }
            })
        }
    }
}
</script>
<style scoped>

/* #region  header */
    #body{
        background: #F7F7F7;
        width: 100%;
        height: 100%;
        position: relative;
        margin: 0;
        margin-bottom: 30px;
    }
    .header{
        padding: 0 0.75rem;
        padding-top: 1.25rem;
        padding-bottom: 1rem;
        background: #ffffff;
        border-radius: 0 0 0.5rem 0.5rem;
    }
    .he_t{
        display: flex;
        justify-content: flex-end;
    }
    .he_t div{
        display: inline-block;
    }
    .he_t .setup{
        padding-right: 1.3rem;
    }
    .he_t div img{
        width: 1.5rem;
        height: 1.5rem;
    }
    .he_po div{
        display: inline-block;
        vertical-align: middle;
    }
    .he_po .photo img{
        width: 4rem;
        height: 4rem;
        border-radius: 100%;
    }
    .he_po .name{
        font-size: 1.1875rem;
        font-weight: 700;
        margin-left: 0.4rem;
    }
    .he_list{
        display: flex;
        justify-content: space-around;
        margin-top: 0.5rem;
    }
    .he_list>div{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: emoji;
    }
    .he_list>div>div{
        font-weight: bold;
        font-size: 1rem;
        font-family: Hiragino Sans GB;
    }
    .he_list>div>p{
        font-size: 0.25rem;
        color: #afb2b2;
        font-weight: 100;
        margin-top: 0.25rem;
    }
 /* #endregion  */
/* #region  订单 */
    .order {
        background: #ffffff;
        padding: 0 0.75rem;
        margin-top: 0.875rem;
        padding-bottom: 0.75rem;
        border-radius: 0.5rem;
    }
    .order .order_he {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;    
        padding-top: 0.6rem;    
    }
    .order .order_he .title{
        font-size: 1rem;
        font-weight: bold;
    }
    .order .order_details{
        display: flex;
        justify-content: space-between;
        margin: 1.2rem 0.5rem 1rem 0.5rem;
    }
    .order .order_details .details_list{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .order .order_details .details_list img{
        width: 1.75rem;
        height: 1.75rem;
    }
    .order .order_details .details_list .details_tit{
        font-size: 0.75rem;
        margin-top: 0.2rem;
    }
    .order .ad img{
        width: 100%;
        height: 6.5rem;
    }
 /* #endregion   */
 /* #region  下 */
    .content{
        background: #ffffff;
        padding: 0 0.75rem;
        margin-top: 0.875rem;
        padding-bottom: 0.75rem;
        border-radius: 0.5rem;
    }
    .content .list{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
    }
    .content .list:last-child{
        margin-bottom: 40px;
    }
    .content .list .left,.content .list .right{
        display: flex;
    }
    .content .list .left .icon{
        width: 1.25rem;
    }
    .content .list .left .text{
        font-size: 0.875rem;
        padding-left: 0.75rem;
    }
    .content .list .right{
        align-items: center;
    }
    .content .list .right .card{
        width: 100px;
        height: 30px;
        position: relative;
        background-image: radial-gradient(circle at left, #fff ,#fff 5px , transparent 5px),
        radial-gradient(circle at right, #fff ,#fff 5px , transparent 5px);
        background-color: #FEF0E5;
    }
    .content .list .right p{
        text-align: center;
        font-size: 0.75rem;
        margin-top: 0.4rem;
        color: #CE7E43;
    }
    .content .list .right .text{
        font-size: 0.75rem;
        color: #CE7E43;
    }
    .content .list .right .arrow{
        width: 0.875rem;
        height: 0.875rem;
        margin-left: 0.8rem;
    }
     /* #endregion  展示列表 */
</style>