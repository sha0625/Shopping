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
  
  <sea/>-->
  
  <div id="app">
    <sea></sea>
    <!--标签栏Tabbar-->
    <van-tabbar v-model="Tabbleactive" >
      <van-tabbar-item replace to="/HelloWorld" icon="home-o">Hemo</van-tabbar-item>
      <van-tabbar-item replace to="/Category" icon="search">分类</van-tabbar-item>
      <van-tabbar-item to="/My" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
    <van-tree-select :style="{height: screen11}" :items="items" key="items" :main-active-index.sync="active">
      <template #content>
        <van-image v-if="active ===3" src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
        <!--潮鞋【0】-->
        <div v-if="active ===0">
          <div class="box">
            <div class="title">Jordan</div>
            <div class="pack">
              <div class="item" v-for="(cont,index) in content" :key="index">
                <div class="itemtop">
                  <img :src="cont.img" alt="">
                </div>
                <div class="itembotton">{{cont.text}}</div>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="title">Jordan</div>
            <div class="pack">
              <div class="item" v-for="(cont,index) in content" :key="index">
                <div class="itemtop">
                  <img :src="cont.img" alt="">
                </div>
                <div class="itembotton">{{cont.text}}</div>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="title">Jordan</div>
            <div class="pack">
              <div class="item" v-for="(cont,index) in content" :key="index">
                <div class="itemtop">
                  <img :src="cont.img" alt="">
                </div>
                <div class="itembotton">{{cont.text}}</div>
              </div>
            </div>
          </div>
        </div>
        

        <div v-if="active ===1" class="box">
         <!-- <div v-for="(aa,index) in text" :key="index">
            <div class="title1">111</div>
            <div class="pack">
              <div class="item">
                <div class="itemtop">
                  <img :src="aa[index].title.img" alt="">
                </div>
                <div class="itembotton">{{aa[0][0]}}</div>
              </div>
            </div>
          </div>-->
        </div>

      </template>
    </van-tree-select>  
  </div>
</template>
 
<script>
import sea from '../../components/Seach/seachItem.vue'
export default {
  name: "tabbar",
  components: {sea },
  data() {
    return {
      screen11 :'',
      active: 0,
      Tabbleactive:1,
      items: [],//分类左侧
      content:[],//商品信息
      text:[],//测试一下~~
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
  mounted(){
    const url = '../../../static/category.json'
    this.$axios.get(url).then(res=>{
      this.items = res.data.items
      this.content = res.data.list
      this.text = res.data.kiss
      // console.log(this.content[0])
      for (let i = 0; i < this.text.length; i++) {
        // console.log(this.text[i])        
      }
      // console.log(this.text.length)
    })
    // this.screen = (window.screen.height)//屏幕高度
    this.screen11 = screen.availHeight-50+"px"
    console.log(this.screen11)
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
/* #region  分类 */
/deep/ .van-tree-select__nav{
  flex: 0.6;
  height: 100%;
  width: 100%;
}
/deep/ .van-tree-select__nav-item {
  text-align: center;
  padding: 12px 12px;
}

/deep/ .van-sidebar-item--select::before{
  margin-left: 5px;
  border-radius: 10px;
  background-color: #cb9645;
}
/deep/ .van-sidebar-item--select, .van-sidebar-item--select:active{
  font-weight: bold;
}
.box .title{
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: bold;
}
.pack{
}
.item {
  width: 32%;
  display: inline-block;
  margin-bottom: 0.5rem;
}
.item .itemtop{
  display: flex;
  align-items: center;
  justify-content: center;
}
.item .itemtop img{
  width: 4.25rem;
  height: 4.25rem;
}
.item .itembotton{
  text-align: center;
  margin-top: 0.25rem;
}
/* #endregion */
.active_tab img {
  width: 26px;
  height: 26px;
}
 
.van-tabbar-item--active {
  color: #e10f02;
}
</style>