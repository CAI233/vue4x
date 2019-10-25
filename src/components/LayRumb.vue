<template>
  <div class="layrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    props: {
    //   path: {
    //     type: String,
    //     required: true
    //   }
    },
    data () {
      return {
       
      }
    },
    methods: {
      
    },
    mounted () {
    
    }
  }
</script>

<style lang="scss">
    .layrumb{
        padding:10px;
        background-color: #e8ebed;
    }
</style>
