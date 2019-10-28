<template>
  <div class="layout-header f-clear">
    <div class="header-l f-clear-l">
        <img class="logo" src="../../assets/logo.png" alt="">
    </div>
    <div class="header-c f-clear-l">
        <el-tabs v-model="activePath" @tab-click="handleClick">
            <el-tab-pane v-for="(item,index) in routerList" :key="index" :label="item.meta.title" :name="item.path"></el-tab-pane>
            <!-- <el-tab-pane label="用户管理" name="/user"></el-tab-pane>
            <el-tab-pane label="配置管理" name="/config"></el-tab-pane>
            <el-tab-pane label="角色管理" name="/role"></el-tab-pane>
            <el-tab-pane label="信息管理" name="/info"></el-tab-pane> -->
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
        activePath: '',
        routerList:[]
        };
    },
    components: {
        
    },
    methods:{
        getPath(){
            let allRoutes = this.$router.options.routes;
            var nowRoute = this.$route;
            console.log(nowRoute);
            console.log(allRoutes);
            for(let j in allRoutes){
                if(nowRoute.path.indexOf(allRoutes[j].path) > -1){
                    this.activePath = allRoutes[j].path;
                    // break;
                }
                if(allRoutes[j].meta){
                    this.routerList.push(allRoutes[j]);
                }
            }

            console.log(this.routerList);
        },
        handleClick(tab, event) {
            console.log(this.activePath);
            this.$router.push({path:this.activePath});
            console.log(tab, event);
        }
    },
    mounted(){
        this.getPath();
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
