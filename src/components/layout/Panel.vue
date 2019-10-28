<template>
  <div class="panel">
    <div class="panel-head">
      <div v-if="title && title !== ''" @click="getCollapse" class="panel-title">{{title}}</div>
      <div class="panel-head-right"><slot name="right"></slot></div>
    </div>
    <div class="panel-content">
      <slot ></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        
      }
    },
    props: {
      title: String,
      isCollapse:Boolean
    },
    methods:{
      getCollapse(){
        console.log(this.isCollapse);
        // this.$refs.menuSide.toggleDisplay();
      }
    }
  }
</script>

<style lang="scss">
    .panel{
        width: 240px;
        position: fixed;
        top: 0;
        bottom: 0;
        margin-top: 70px;
        height:calc(100% - 70px);
        overflow: hidden;
        overflow-y: auto;
        transition: padding-top .3s;
        background: #fff
    }
</style>
