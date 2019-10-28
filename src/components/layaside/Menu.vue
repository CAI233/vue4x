<template>
  <div class="menuside" ref="menuSide" >
    <div class="menuside-toggle" @click="toggleDisplay">
      <i :class="{'el-icon-arrow-left' : !isCollapse, 'el-icon-arrow-right' : isCollapse}"></i>
    </div>
    <div class="menuside-menu">
      <el-menu default-active="1" @select="handleSelect" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <slot></slot>
      </el-menu>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isCollapse:false,
      }
    },
    props: {
      text: String,
    },
    methods: {
      toggleDisplay () {
        this.isCollapse = !this.isCollapse;
        // this.$emit('cmeb',this.isCollapse)
        // let dom = this.$refs['mlNavSide']
        // if (dom.parentElement.classList.contains('menuside-stop')) {
        //   dom.parentElement.classList.remove('menuside-stop')
        // } else {
        //   dom.parentElement.classList.add('menuside-stop')
        // }
      },
       handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, indexPath){
        console.log(key, indexPath);
      }
    }
  }
</script>

<style lang="scss">
  .menuside{
    .menuside-toggle{
      padding: 10px 15px;
      border-bottom: 1px solid #ccc;
      text-align:right;
      i{
        font-size: 24px;
        color: red;
      }
    }
  }
</style>
