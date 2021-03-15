<template>
  <div>     
	 <van-card v-for="(item,index) in showGoods" :key="index" num="2" price="2.00" desc="描述信息" :title="item.title" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
  </div>
</template>
<script>
export default {
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
	}
}
</script>

<style>

</style>
