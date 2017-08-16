// 一、导入第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import 'mui/dist/css/mui.css';
import 'mui/examples/hello-mui/css/icons-extra.css';
import VuePreview from 'vue-preview'

// 1.1、手动启用插件(use)
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(MintUI);
Vue.use(VuePreview);

//导入过滤器
import './filter.js';

// 2.1自己的组件
import App from '../component/App.vue';  // 根组件

// 2.2 配置好的路由对象
import router from './router.js';  // 路由

// 三、创建一个Vue实例，关联视图，把根组件渲染到视图中
new Vue({
    el: '#app',
    render: c => c(App),
    router
});
