<template>
  <div class="layout" id="layout">
    <!-- 头部导航 -->
    <c-header></c-header>
    <!-- 左菜单导航 -->
    <slot></slot>
    <!-- 右边页面 -->
    <div class="layout-content">
      <c-lay-rumb></c-lay-rumb>
      <router-view ></router-view>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
  #layout{
    height:100%;
  }
</style>
