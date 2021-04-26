<template>
  <div id="body">
    <div class="seach">
      <van-search v-model="meetingname" placeholder="请输入搜索关键词" @click="onSearch"/>
    </div>
  </div>
</template>
<script>
export default {
  name:'seachItem',
  data () {
    return{
      meetingname:''//搜索框控制
    }
  },
  methods:{
    onSearch(){
      // this.$router.go(-1)
      this.$router.push({
        path:'/Seach'
			})
    },
  }
}
</script>
<style scoped>

</style>