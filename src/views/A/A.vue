<template>
  <div>
    <h6>父组件</h6>
    <div>
     <B :messagec= "messagec" :msg ="msgc2" v-on="getcData"></B>
    </div>
  </div>
</template>
<script>
import B from './B/B.vue'
export default {
    data(){
        return{
            messagec:{a:1,c:2},
            msg:'',
            msg1:'',
            msgc2:'第二个传给孙组件'
        }
    },
    components:{B}
}
</script>
<style scoped>

</style>