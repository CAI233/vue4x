import Vue from "vue";
import VueRouter from "vue-router";
import configManage from '@/views/configManage';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/user',
  },
  {
    path: "/user",
    name: "user",
    meta: {title: '用户管理', resquire:true},
    component: () =>
      import("@/views/userManage/userManage.vue")
  },
  {
    path:'/config',
    component: configManage,
    meta: {title: '配置管理', resquire:true},
    children: [
      {name: 'lingshouScan',path: 'lingshouScan',component: configManage.lingshouScan,meta: {title: '零售扫码',resquire:true,isFoot:false}},
      {name: 'lingshouReturnScan',path: 'lingshouReturnScan',component: configManage.lingshouReturnScan,meta: {title: '零售退货扫码',resquire:true,isFoot:false}},
      // {name: 'lingshouScan',path: 'lingshouScan',component:  () => import("@/views/configManage/lingshouManage/lingshouScan.vue"),meta: {title: '零售扫码',resquire:true,isFoot:false}},
      // {name: 'lingshouReturnScan',path: 'lingshouReturnScan',component: () => import("@/views/configManage/lingshouManage/lingshouReturnScan.vue"),meta: {title: '零售退货扫码',resquire:true,isFoot:false}},
      // {path: '',redirect: 'caigouManage'},
      {
        name: 'caigouManage',
        path: 'caigouManage',
        // component: configManage.caigouManage,
        component: () => import("@/views/configManage/caigouManage/caigouManage.vue"),
        meta: {title: '采购管理',resquire:true,isFoot:true},
        redirect: {name: 'caigouOrder'}, //跳转到下级第一层
        children: [
          {
            name: 'caigouOrder',
            path: 'caigouOrder',
            meta: {title: '采购订单', resquire:true},
            component: () => import("@/views/configManage/caigouManage/caigouOrder.vue")
          },
          {
            name: 'caigouScan',
            path: 'caigouScan',
            meta: {title: '采购扫码', resquire:true},
            component: () => import("@/views/configManage/caigouManage/caigouScan.vue")
          },
          {
            name: 'caigouScanRecord',
            path: 'caigouScanRecord',
            meta: {title: '采购扫码记录', resquire:true},
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
    meta: {title: '角色管理', resquire:true},
    component: () =>
      import("@/views/roleManage/roleManage.vue")
  },
  {
    path: "/info",
    name: "info",
    meta: {title: '信息管理', resquire:true},
    component: () =>
      import("@/views/infoManage/infoManage.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// router升级后加catch
const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
// ------------------------

router.beforeEach(function (to, from, next) {
  // 是否要做登录及权限校验
  let _route = {}
  router.options.routes.forEach(r => {
    if (r.path === to.path) _route = r
  })
  // console.log(_route)
  if (_route === {} || _route.children === undefined || _route.children.length === 0) {
    next()
  } else {
    let _firstR = _route.children[0];
    // console.log(to.path,_firstR.path)
    next(to.path + '/' + _firstR.path)
  }
  
})

export default router;
