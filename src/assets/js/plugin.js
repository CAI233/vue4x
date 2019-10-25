import Layout from '@/components/layout';
import Menu from '@/components/layaside';
import LayRumb from '@/components/LayRumb.vue';
const allComponents = {
    CLayout:Layout,
    CHeader:Layout.Header,
    CLayoutNoSide:Layout.LayoutNoSide,
    CPanel:Layout.Panel,
    CMenu:Menu,
    CMenuItem:Menu.MenuItem,
    CLayRumb:LayRumb
}

export default {
    install(Vue){
        Object.keys(allComponents).forEach((key) => {
            Vue.component(key, allComponents[key])
        })
    }
}