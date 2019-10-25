<template>
  <div class="layout-header f-clear">
    <div class="header-l f-clear-l">
        <img class="logo" src="../../assets/logo.png" alt="">
    </div>
    <div class="header-c f-clear-l">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first"></el-tab-pane>
            <el-tab-pane label="配置管理" name="second"></el-tab-pane>
            <el-tab-pane label="角色管理" name="third"></el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
        </el-tabs>
    </div>
    <div class="header-r f-clear-r">

    </div>
  </div>
</template>

<script>
  export default {
    data() {
    return {
        activeName: 'second'
        };
    },
    components: {
        
    },
    methods:{
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
  }
</script>

<style lang="scss">
    .layout-header{
        background: #fff;
        padding:15px 15px 0;
        .header-l{
            margin-right:30px;
            .logo{
                width:50px;
                height:50px;
            }
        }
    }
</style>
