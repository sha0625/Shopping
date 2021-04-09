<template>
<!--
  <van-tabbar v-model="active" class="active_tab">
    <van-tabbar-item v-for="(item,index) in tabbars" :key="index" @click="tab(index,item.name)" >
      <span :class="currIndex == index ? active:''">{{item.title}}</span>
      <template slot="icon" slot-scope="props">
        <img :src="props.active ? item.active : item.normal">
      </template>
    </van-tabbar-item>
  </van-tabbar>
-->
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <p>刷新次数: {{ count }}</p>
  </van-pull-refresh>
</template>
 
<script>
import { Button, Tabbar, TabbarItem, PullRefresh, Toast } from 'vant';

export default {
  name: "tabbar",
  components: { Button, [Tabbar.name]: Tabbar, [TabbarItem.name]: TabbarItem, [PullRefresh.name]: PullRefresh},
  data() {
    return {
      count: 0,
      isLoading: false,    
      currIndex: 0,
      active: 0,
      tabbars: [
        {
          name: "home",
          title: "首页",
          normal: ("../../assets/img/img01.png"),
          active: ("@assets/img/img01.png")
        },
        {
          name: "category",
          title: "分类",
          normal: ("@assets/img/img01.png"),
          active: ("@assets/img/img01.png")
        },
        {
          name: "message",
          title: "消息",
          normal: ("@assets/img/img01.png"),
          active: ("@assets/img/img01.png")
        }
      ]
    };
  },
  methods: {
    tab(index, val) {
      this.currIndex = index;
      this.$router.push(val);
    },
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  }
};
</script>
 
<style scoped>
.active_tab img {
  width: 26px;
  height: 26px;
}
 
.van-tabbar-item--active {
  color: #e10f02;
}
</style>