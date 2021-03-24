<template>
  <div>
	<!-- <van-nav-bar  title="标题"  left-text="返回"  right-text="按钮"  left-arrow  @click-left="onClickLeft"  @click-right="onClickRight"/> -->
	<van-nav-bar title="搜索列表" left-text="返回" left-arrow @click-left="onblack"/>
	<van-card v-for="(item,index) in showGoods" :key="index" num="2" price="2.00" desc="描述信息" :title="item.title" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
  </div>
</template>
<script>

export default {
	components: {
  },
  data(){
		return{
			showGoods:[]
		}
	},
	created() {
		let kw = this.$route.query.kw
		const url = '../../../static/sea.json'		
		this.$axios.get(url).then(res=>{
			let goods = res.data.list
				
			goods.map(item=>{
				if(item.title.includes(kw)){
					this.showGoods.push(item)
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

<style>

</style>
