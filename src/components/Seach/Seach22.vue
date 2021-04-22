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
		
		<!-- 搜索历史 -->
		<div v-show="isShow">
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
		  	<van-cell v-for="(item,index) in showList" :key="index" :title="item.title" @click="searchTs(item.title,item.count)"/>
		</van-cell-group>

		<!-- 热门搜索 -->
		<div style="margin-top:60px">
			<span class="h2" style="margin-left:5px">热门搜索</span>
			<div>
				<van-tag v-for="(item,index) in sorthostList" :key="index">{{item.title}}--{{item.count}}</van-tag>
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
			showList:[], //搜索提示数据
			kwList:[],//搜索记录
			hotList:[],//热门记录
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
		this.$axios.get(url).then(res=>{
			// console.log(res.data.data[0])
			this.list = res.data.data
		})
		this.list
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
		searchTs(title,count){ //点击搜索提示或搜索记录，展示对应商品
			console.log('searchTs。。。');
			count = count+1

			this.$router.push({
				path:'/Showlist',
				query:{
					kw:title,
					cot:count
				}
			})
			console.log("start-"+count)
			count = count
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
			
			this.$router.push({
				path:'/Showlist',
				query:{
					kw:this.kw
				}
			})
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
