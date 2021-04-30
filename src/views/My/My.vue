<template>
    <div id="app">
        <!--标签栏Tabbar-->
        <van-tabbar v-model="Tabbleactive" >
            <van-tabbar-item replace to="/HelloWorld" icon="home-o">Hemo</van-tabbar-item>
            <van-tabbar-item replace to="/Category" icon="search">分类</van-tabbar-item>
            <van-tabbar-item to="/My" icon="friends-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data(){
        return{
            Tabbleactive:2
        }
    }
}
</script>