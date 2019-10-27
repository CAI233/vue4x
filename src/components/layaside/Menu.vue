<template>
  <div class="menuside" ref="mlNavSide">
    <div class="menuside-toggle" @click="toggleDisplay">
      <i class="fa fa-1x fa-chevron-left" :class="{'fa-chevron-left' : !display, 'fa-chevron-right' : display}"></i>
    </div>
    <div class="menuside-menu">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        display: false
      }
    },
    methods: {
      toggleDisplay () {
        this.display = !this.display
        let dom = this.$refs['mlNavSide']
        if (dom.parentElement.classList.contains('menuside-stop')) {
          dom.parentElement.classList.remove('menuside-stop')
        } else {
          dom.parentElement.classList.add('menuside-stop')
        }
      }
    }
  }
</script>

<style>

</style>
