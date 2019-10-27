import Vue from "vue";
import VueRouter from "vue-router";
import configManage from '@/views/configManage/configManage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/user',
  },
  {
    path: "/user",
    name: "user",
    component: () =>
      import("@/views/userManage/userManage.vue")
  },
  {
    path:'/config',
    component: configManage,
    meta: {title: '首页', resquire:true},
    children: [
      {name: 'lingshouScan',path: 'lingshouScan',component: configManage.lingshouScan,meta: {title: '零售扫码',resquire:true,isFoot:false}},
      {name: 'lingshouReturnScan',path: 'lingshouReturnScan',component: configManage.lingshouReturnScan,meta: {title: '零售退货扫码',resquire:true,isFoot:false}},
      // {path: '',redirect: 'caigouManage'},
      {
        name: 'caigouManage',
        path: 'caigouManage',
        component: configManage.caigouManage,
        meta: {title: '采购管理',resquire:true,isFoot:true},
        // redirect: {name: 'caigouOrder'}, //跳转到下级第一层
        children: [
          {
            name: 'caigouOrder',
            path: 'caigouOrder',
            component: () => import("@/views/configManage/caigouManage/caigouOrder.vue")
          },
          {
            name: 'caigouScan',
            path: 'caigouScan',
            component: () => import("@/views/configManage/caigouManage/caigouScan.vue")
          },
          {
            name: 'caigouScanRecord',
            path: 'caigouScanRecord',
            component: () => import("@/views/configManage/caigouManage/caigouScanRecord.vue")
          }
        ]
      },
      {name: 'fenxiaoManage',path: 'fenxiaoManage',component: configManage.fenxiaoManage,meta: {title: '分销管理',resquire:true,isFoot:false}},
    ]
  },
  {
    path: "/role",
    name: "role",
    component: () =>
      import("@/views/roleManage/roleManage.vue")
  },
  {
    path: "/info",
    name: "info",
    component: () =>
      import("@/views/infoManage/infoManage.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// router.beforeEach(function (to, from, next) {
//   // 是否要做登录及权限校验
//   let _route = {}
//   router.options.routes.forEach(r => {
//     if (r.path === to.path) _route = r
//   })
//   console.log(_route)
//   if (_route === {} || _route.children === undefined || _route.children.length === 0) {
//     next()
//   } else {
//     let _firstR = _route.children[0]
//     console.log(to.path,_firstR.path)
//     next(to.path + '/' + _firstR.path)
//   }
  
// })

export default router;
