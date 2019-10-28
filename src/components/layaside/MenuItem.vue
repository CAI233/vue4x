<template>
  <!-- <div > -->
    <!-- <p>这是{{name}}</p> -->
    <el-submenu :index="indexNum.toString()" v-if="childList && childList.length>0" >
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{name}}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item @click="goName(item.name)" v-for="(item,index) in childList" :key="index" :index="indexNum.toString()+'-'+(index+1).toString()">{{item.meta.title}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item :index="indexNum.toString()" v-else @click="goPath(path)">
      <i class="el-icon-menu"></i>
      <span slot="title">{{name}}</span>
    </el-menu-item>
  <!-- </div> -->
</template>

<script>
  export default {
    props: {
      path: {
        type: String,
        required: true
      },
      isCollapse:{
        type:Boolean,
        default:false
      },
      name:{
        type: String,
      },
      indexNum:{
        type:Number,
        default:0
      },
      childList:{
        type:Array,
      }
      
    },
    data () {
      return {
       
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      goPath(path){
        console.log(path);
        this.$router.push(path)
      },
      goName(name){
        this.$router.push({name:name})
      }
    }
  }
</script>

<style>

</style>
