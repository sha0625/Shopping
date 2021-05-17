<template>
  <div>
    <h1>这是子组件B</h1>
    <ul>
        <li v-on="user in users" :key="">{{user}}</li>
    </ul>
  </div>
</template>
<script>
export default {
    name:'B',
    props:{
        users:{
            type :Array,
            required: true
        }
    }
}
</script>
<style scoped>

</style>