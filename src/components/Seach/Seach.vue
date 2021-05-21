<template>
  	<div>	
		<!-- vant搜索 -->
		<van-search @input="onInput" @search="onSearch" autofocus show-action shape="round" v-model="kw" placeholder="请输入搜索关键词">			
			<template #left>
				<van-icon  @click="back" style="margin-right: 5px;" size="22px" name="arrow-left" />
			</template>			
			<template #action>
				<van-button @click="onSearch" size="small" type="danger" style="border-radius: 5px; font-size: 14px;">搜索</van-button>
			</template>			
		</van-search>
		<div class="mainContent">
			<!--搜索-->
			<div class="searchContent" v-show="seachshow">
				<!-- 搜索历史 -->
				<div v-show="isShow" style="margin-top: 65px;">
					<div class="search-host">
						<span class="h2">搜索记录</span>
						<van-icon name="delete" @click="del"/>
					</div>			
					<div>
						<van-tag v-for="(item,index) in kwList" :key="index" @click="searchTs(item)" style="margin: 5px;">{{item}}</van-tag>
					</div>
				</div>

				<!-- 搜索提示 -->
				<van-cell-group v-show="!isShow">
					<van-cell v-for="(item,index) in showList" :key="index" :title="item.title" @click="searchTs(item.title)"/>
				</van-cell-group>

				<!-- 热门搜索 -->
				<div style="margin-top:60px">
					<span class="h2" style="margin-left:5px">热门搜索</span>
					<div>
						<van-tag v-for="(item,index) in sorthostList" :key="index"  @click="searchTs(item.title)">{{item.title}}--{{item.count}}</van-tag>
					</div>
				</div>
			</div>
			<!-- 筛选列表~ -->
			<div class="filterContent"  v-if="!mainshow">
				<div class="filterChoose">
					<div class="fillterItem">
						<span class="fillterText">默认排序</span>
						<img src="../../assets/images/category/button.png" alt="">
					</div>
					<div class="fillterItem">
						<span class="fillterText">折扣</span>
						<img src="../../assets/images/category/button.png" alt="">
					</div>
					<div class="fillterItem">
						<span class="fillterText">品牌</span>
						<img src="../../assets/images/category/button.png" alt="">
					</div>
					<div class="fillterItem">
						<span class="fillterText">分类</span>
						<img src="../../assets/images/category/button.png" alt="">
					</div>
					<div class="fillterItem">
						<span class="fillterText">商家</span>
						<img src="../../assets/images/category/button.png" alt="">
					</div>
				</div>
			</div>	
			<!-- 列表展示 -->
			<div class="productList" v-if="mainshow">
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
		</div>
  	</div>
</template>

<script>
export default {
	data(){
		return{
			kw:'',
			cot:'',
			isShow:true,
			list:[], //所有数据
			goods:[],
			showList:[], //搜索提示数据
			kwList:[],//搜索记录
			hotList:[],//热门记录
			mainshow:true,//展示
			seachshow:true ,
			activities:[]
		}
	},
	computed:{
		sorthostList :function(){
			return this.sortByKey(this.list,'count')
		}
	},
	created() { //初始化保存
		let kwlist = localStorage.kwList
		if(kwlist){
			this.kwList = JSON.parse(kwlist)
		}
	},
	mounted() {
		const url = '../../../static/sea.json'
		let kw = this.$route.query.kw

		this.$axios.get(url).then(res=>{
			this.list = res.data.data
			this.goods = res.data.list				
		})
		// console.log(this.goods)			

	},
	methods:{
		sortByKey(array, key){//热门排序
			return array.sort(function (a,b){
				var x = a[key];
				var y = b[key];
				var pp = ((x>y)? 0:1)
				return ( (x<y)? pp : -1)
			})
		},
		back(){ //返回
     		// this.$router.go(-1)

			this.$router.push({
				path:'/HelloWorld'
			})
		},
		onInput(){ //搜索提示 输入时...
			console.log('onInput。。。');
			this.showList = []
			
			this.list.map(item=>{
				if(item.title.includes(this.kw)){
					this.showList.push(item)
				}
			})
			
			if(this.kw.trim() == ''){ //显示或隐藏搜索提示
				this.isShow = true
			}else{
				this.isShow = false
			}
		},
		searchTs(title){ //点击搜索提示或搜索记录，展示对应商品
			// count = count+1
			this.mainshow = true
			this.seachshow = false

			// const url = '../../../static/sea.json'
			// this.$axios.get(url).then(res=>{
			// 	this.goods = res.data.list		
			// })
			// console.log(this.goods)			
			this.goods.map(item=>{
				if(item.title.includes(title)){
					// this.activities.length = 0
					this.activities.push(item)

				}
			})
			// console.log("start-"+count)
			// count = count
			if(!this.kwList.includes(title)){ //不会重复添加相同搜索记录
				this.kwList.push(title)
				localStorage.kwList = JSON.stringify(this.kwList) //JSON.stringify将json对象转换成字符串形式  localStorage将kwList已键值对方式永久存储
			}
			
		},
		onSearch(){ //确定搜索或点击搜索时触发
			console.log('onSearch。。。');

			if(this.kw.trim() == ''){ //判断内容是否为空
				return
			}
			// const url = '../../../static/sea.json'
			// this.$axios.get(url).then(res=>{
			// 	this.goods = res.data.list					
			// })
			this.goods.map(item=>{
				if(item.title.includes(this.kw)){
					// this.activities.length = 0

					this.activities.push(item)
				}
			})
			// this.$router.push({
			// 	path:'/Showlist',
			// 	query:{
			// 		kw:this.kw
			// 	}
			// })
			if(!this.kwList.includes(this.kw.trim())){ //不会重复添加相同搜索记录
				this.kwList.push(this.kw)
				localStorage.kwList = JSON.stringify(this.kwList)
			}			
		},
		del(){ //删除搜索记录
			this.$dialog.confirm({
			  message: '确定要清空搜索记录吗？',
			})
			//  选择确认~
			.then(() => {
				this.kwList = []
				localStorage.kwList = JSON.stringify(this.kwList)
			})
			.catch(() => {
				// on cancel
			});
		}
		
	}
}
</script>

<style scoped>
/* #region  展示列表 */
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
/*   列表 */
h2{
  padding: 0px;
  margin: 0px;
}
.productList{
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
/deep/ .van-search--show-action{
	width: 100%;
	position: fixed;
	top: 0px;
	z-index:100
}
/deep/ .van-button--danger {
	color: #000;
    background-color: #ffffff;
    border: 1px solid #ffffff;
}
/deep/ .van-tag{
	background: #f1f0f0;
    color: #8c8a8a;
	padding: 4px 11px;
    margin: 5px;
	border-radius: 9px;
}
.search-host{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 5px;
	box-sizing: border-box;
}
.h2{
	color: #333;
    font-family: PingFangSC;
    font-size: 15px;
    font-weight: 700;
}
</style>
