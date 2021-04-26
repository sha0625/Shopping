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
<sea/>
</template>
 
<script>
import sea from '../../components/tabbar/seachItem.vue'
export default {
  name: "tabbar",
  components: {sea },
  data() {
    return {
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