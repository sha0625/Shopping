<template>
    <div>
        <van-cell-group>
            <van-cell title="头像" value="ee"></van-cell>
        </van-cell-group>
        <span>{{inputName}}</span>
    </div>
</template>
<script>
export default {
    props:{
        inputName: String,
        require: true
    }
}
</script>
<style scoped>

</style>