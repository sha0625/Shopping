<template>
  <div>
    <div class="">
        <div class="top">
            
        </div>
        
        <van-goods-action>
            <van-goods-action-icon icon="wap-home-o" color="#5A5A5A" />
            <van-goods-action-icon icon="service-o" color="#5A5A5A" />
            <van-goods-action-icon icon="bag-o" color="#5A5A5A" />
            <van-goods-action-button text="立即购买" />
            <van-goods-action-button text="加入购物车" />
        </van-goods-action>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
/deep/ .van-goods-action-button--first {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: #000000;
    color: #FFFFFF;
    font-weight: bold;
}
/deep/ .van-goods-action-button--last{
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    background-color: #D17C45;
    color: #FFFFFF;
    font-weight: bold;
}
/deep/ .van-goods-action-icon__icon{
    font-size: 1.6rem;
}
/deep/ .van-goods-action-button{
    height: 3rem;
}
/deep/ .van-goods-action-button--last{
    margin-right: 0;
}
</style>