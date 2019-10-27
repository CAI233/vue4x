<template>
  <div style="padding: 10px;
    border-bottom: 1px solid #ccc;curser:pointer;" @click="goPath(path)">
    <p>这是{{name}}</p>
    <!-- <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu> -->

  </div>
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
      }
    },
    mounted () {
    
    }
  }
</script>

<style>

</style>
