// 导入包
import VueRouter from 'vue-router';

// 导入index组件
import Cindex from '../component/index/index.vue';

//导入news组件
import CnewsList from '../component/news/list.vue';
import CnewsDetails from '../component/news/details.vue';
import CphotoList from '../component/photo/list.vue';
import CphotoDetails from '../component/photo/details.vue';
import CgoodsList from '../component/goods/list.vue';
import CgoodsDetails from '../component/goods/details.vue';

// 导出一个路由实例
export default new VueRouter({
    routes: [
        //首页
        { path: '/', redirect: '/index' },
        { path: '/index', component: Cindex },
        //新闻详情
        { path: '/news/list',component: CnewsList},
        { path: '/news/details/:id',component: CnewsDetails},
        //图片分享
        { path: '/photo/list/:id',component: CphotoList},
        { path: '/photo/details/:id',component:CphotoDetails},
        //商品购买
        { path: '/goods/list/',component:CgoodsList},
        { path: '/goods/details/:id',component:CgoodsDetails}
    ]
});
