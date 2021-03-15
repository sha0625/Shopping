<template>
  <div class="tabberWarp">
    <div class="warp">
      <Item :txt='item.txt' :page='item.page' v-for='item in tabbarList' :sel='selected' v-bind:key="item.txt">

        <!-- <img :src="item.normalImg" slot='normalImg'> -->
        <!-- <img :src="item.activeImg" slot='activeImg'> -->
      </Item>
    </div>
  </div>
</template>
<script type="text/javascript">
import Item from './Item.vue'
export default {
  components: {
    Item
  },
  data: function () {
    return {
      // 默认展示哪一个菜单
      selected: '',
      tabbarList: [{
        txt: '首页',
        page: '',
        normalImg: ('https://img-home.csdnimg.cn/images/20201120101655.png'),
        activeImg: ('https://csdnimg.cn/medal/qiandao1@240.png')

      },
      {
        txt: '微咨询',
        page: 'consultation',
        normalImg: ('https://csdnimg.cn/medal/zhuanlandaren@240.png'),
        activeImg: ('https://csdnimg.cn/medal/qiandao3@240.png')
      },
      {
        txt: '个人中心',
        page: 'person',
        normalImg: ('https://csdnimg.cn/medal/zhuanlandaren@240.png'),
        activeImg: ('https://csdnimg.cn/medal/qiandao5@240.png')
      },
      ]
    }
  },
  methods: {
    getVal: function (res) {
      this.selected = res
    }
  }
}
</script>
<style type="text/css">
  .warp {
    width: 100%;
    border-top: 1px solid #eee;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 0;
  }

  .warp img {
    width: 20px;
    height: 20px;
  }

  .tabberWarp img {
    margin-top: 10px;
    margin-bottom: 5px;

  }

  .tabberWarp {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-bottom: 5px;
    background: #fff;
  }
</style>

