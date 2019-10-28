<template>
  <c-layout>
    <c-panel :title='title'>
      <c-menu >
        <template v-if="routerList.length>0">
          <c-menu-item v-for="(item,index) in routerList" :key="index" :path="nowPath+'/'+item.path" :indexNum="index+1" :name="item.meta.title" :childList="item.children"/>
        </template>
      </c-menu>
    </c-panel>
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
      console.log(nowRoute);
      for(let j in allRoutes){
        if(nowRoute.path.indexOf(allRoutes[j].path) > -1){
          this.nowPath = allRoutes[j].path;
          console.log(this.nowPath);
          this.routerList = allRoutes[j].children;
          console.log(this.routerList);
          break;
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