<template>
  <div>	
	<!-- <van-nav-bar title="搜索列表" left-text="返回" left-arrow @click-left="onblack"/> -->
	<!-- vant搜索 -->
	<van-search  autofocus show-action shape="round"  placeholder="请输入搜索关键词" style="">
		
		<template #left>
			<van-icon @click="onblack" style="margin-right: 5px;" size="22px" name="arrow-left" />
		</template>			
		<template #action>
			<van-button size="small" type="danger" style="border-radius: 5px; font-size: 14px;">搜索</van-button>
		</template>
		
	</van-search>
	<!-- 筛选~ -->
	<div class="filterContent ">
		<div class="filterChoose">
			<div class="fillterItem">
				<span class="fillterText">默认排序</span>
				<img src="../../assets/img/button.png" alt="">
			</div>
			<div class="fillterItem">
				<span class="fillterText">折扣</span>
				<img src="../../assets/img/button.png" alt="">
			</div>
			<div class="fillterItem">
				<span class="fillterText">品牌</span>
				<img src="../../assets/img/button.png" alt="">
			</div>
			<div class="fillterItem">
				<span class="fillterText">分类</span>
				<img src="../../assets/img/button.png" alt="">
			</div>
			<div class="fillterItem">
				<span class="fillterText">商家</span>
				<img src="../../assets/img/button.png" alt="">
			</div>
		</div>
	</div>
	
	<!-- END 筛选 -->

	<div class="content">
		<div class="product-item" v-for="(item,index) in activities" :key="index">
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
	<!-- <van-card v-for="(item,index) in activities" :key="index" num="2" price="2.00" desc="描述信息" :title="item.title" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" /> -->
  </div>
</template>
<script>

export default {
	components: {
  },
  data(){
		return{
			activities:[]
		}
	},
	created() {
		let kw = this.$route.query.kw
		const url = '../../../static/sea.json'		
		this.$axios.get(url).then(res=>{
			let goods = res.data.list
				
			goods.map(item=>{
				if(item.title.includes(kw)){
					this.activities.push(item)
				}
			})
		})		
	},
	methods: {
		// 返回
		onblack(){
			this.$router.push({
				path:'/Seach'
			})
		}
	}
}
</script>

<style scoped>
/deep/ .van-button--danger {
	color: #000;
    background-color: #ffffff;
    border: 1px solid #ffffff;
}
/deep/ .van-search--show-action{
	width: 100%;
	position: fixed;
	top: 0px;
	z-index:100
}
.filterContent {
    width: 100%;
    position: fixed;
	top: 50px;
    z-index: 100;
    background-color: #fff;
}
.filterChoose{
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-around;
	box-sizing: border-box;
	margin: 10px 0px;
}
.filterChoose .fillterItem{
	display: flex;
	align-items: center;
	font-size: 12px;
	color: #333;
	font-weight: 600;
}
.filterChoose .fillterItem img{
	width: 6px;
	height: 3px;
	margin-left: 4px;
}
/* #region  猜你喜欢 */
h2{
  padding: 0px;
  margin: 0px;
}
.content{
  display: flex;
  flex-wrap: wrap;
  margin-top: 90px;
}
.product-item{
  display: inline-block;
  width: 49.4%;
  position: relative;
  margin-bottom: 25px;
}
.product-item .img-wrap{
  width: 100%;
  height: 187px;
  margin-bottom: 15px;
  display: flex;
}
.product-item .img-wrap img{
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: auto;
}
.detail{
  margin: 0 15px;
}
.detail .name{
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 16px;
}
.detail .dollar-price{
  font-size: 13px;
  color: #333;
  margin-bottom: 4px;
}
.detail .main-price-area{
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.detail .main-price-area .main-price{
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #333;
}
.detail .main-price-area .like{
  color: #bbb;
  font-size: 12px;
  line-height: 20px;
}
.product-item .color-num{
  position: absolute;
  top: 12px;
  left: 12px;
}
.product-item .color-num .tag{
  background: rgb(242, 242, 242);
  color: rgb(102, 102, 102);
  height: 15px;
  line-height: 16px;
  font-size: 12px;
  white-space: nowrap;
  border-radius: 15px;
  margin-right: 6px;
  padding: 0px 5px;
  position: relative;
}
/* #endregion */

</style>
