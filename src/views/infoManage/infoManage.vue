<template>
<c-layout>
  <c-panel :title='title'>
    <div slot="right"><div>信息管理</div></div>
    <c-menu>
      <c-menu-item path="/sys/user" icon="address-book" name="用户管理"/>
    </c-menu>
  </c-panel>
  <!-- <div class="contanier">
      <div class="content">
        <c-lay-rumb></c-lay-rumb>
        <div class="cont">
          <p>这是主体</p>
        </div>
      </div>
  </div> -->
</c-layout>
  
</template>

<script>

export default {
  name: "home",
  data() {
    return {
      title:'标题',
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
};
</script>
