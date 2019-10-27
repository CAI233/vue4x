<template>
  <c-layout>
    <c-panel :title='title'>
      <c-menu>
        <template v-if="routerList.length>0">
          <c-menu-item v-for="(item,index) in routerList" :key="index" :path="nowPath+'/'+item.path" :name="item.name"/>
        </template>
      </c-menu>
    </c-panel>
    <!-- <slot></slot> -->
  </c-layout>
</template>

<script>
  export default {
  name: "confinManage",
  data() {
    return {
      title:'configManage',
      nowPath:'',
      routerList:[]//路由列表
    };
  },
  components: {
    
  },
  methods:{
    handleClick(tab, event) {
      console.log(tab, event);
    },
    getRoutes(){
      let allRoutes = this.$router.options.routes;
      var nowRoute = this.$route;
      for(let j in allRoutes){
        if(nowRoute.path == allRoutes[j].path){
          this.nowPath = allRoutes[j].path;
          this.routerList = allRoutes[j].children;
        }
      }
    }
  },
  mounted () {
    this.getRoutes();
    // let allRoutes = this.$router.options.routes;
    // for(let j in allRoutes){

    // }
  }
}
</script>
  
<style>

</style>