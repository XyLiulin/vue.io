<template>
    <article class="goods-detail">
        <v-title :title="title"></v-title>
        <!--轮播-->
        <v-swipe :list="lunbos"></v-swipe>
        <!-- 商品购买 -->
        <div class="mui-card">
            <!-- 名称 -->
            <div class="mui-card-header">{{goods.title}}</div>
            <!-- 价格 -->
            <div class="mui-card-content mui-card-content-inner">
                <div class="price"> <s>市场价:￥{{ goods.market_price }}</s> <span>销售价: </span> <em>￥{{ goods.sell_price }}</em> </div>
                <div> <span>购买数量：</span>
                    <!--数字输入框 -->
                    <v-numbox :initVal="total" @change="upTotal"></v-numbox>
                </div>
            </div>
            <!-- 按钮 -->
            <div class="mui-card-footer">
                <button type="button" class="btn mui-btn mui-btn-success mui-btn-block mui-btn-outlined">结算</button>
                <div></div>
                <button @click="addShopcar" type="button" class="btn mui-btn mui-btn-success mui-btn-block mui-btn-outlined">加入购物车</button>
            </div>
        </div>

        <!-- 评论与介绍 -->
        <div class="mui-card">
            <!-- 选项卡 -->
            <mt-navbar v-model="seaList">
                <mt-tab-item id="tab-container1">商品评论</mt-tab-item>
                <mt-tab-item id="tab-container2">图文介绍</mt-tab-item>
            </mt-navbar>
            <!-- 内容 -->
            <mt-tab-container v-model="seaList">
                <mt-tab-container-item id="tab-container1">
                    <v-comment :id="id"></v-comment>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container2">
                    <v-info :id="id"></v-info>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>

    </article>
</template>

<script>
    import config from '../../js/config.js';
    import Ctitle from '../common/title.vue';
    import Cswipe from '../common/swipe.vue';
    import Ccomment from '../common/comment.vue';
    import Cinfo from './info.vue';
    import Cnumbox from '../common/numbox.vue';
    export default{
        data(){
            return{
                title:'商品购买',
                lunbos:[],
                goods:{},
                seaList:'',
                id:this.$route.params.id,
                total:0
            }
        },
        methods:{
            //轮播图数据
            getDetails(){
                let url = config.photoThumimages + this.id;
                this.$http.get(url).then(rep => {
                    if(rep.body.status == 0){
                        this.lunbos = rep.body.message.map(item => {
                            item.src = config.domainImg + item.src;
                            return item;
                        })
                    }
                })
            },
            //商品价格数据
            getPrice(){
                let url = config.goodsPrice + this.id;
                this.$http.get(url).then(rep => {
                    if(rep.body.status == 0){
                        this.goods = rep.body.message[0];
                    }
                })
            },
            //更新商品数量
            upTotal(v){
                this.total = v;
            },
            //加入购物车
            addShopcar(){
                document.querySelector('.mui-badge').innerHTML = this.total;
            }
        },
        created(){
            this.getDetails();
            this.getPrice();
        },
        components:{
            'v-title':Ctitle,
            'v-swipe':Cswipe,
            'v-comment':Ccomment,
            'v-info':Cinfo,
            'v-numbox':Cnumbox
        }
    }

</script>

<style lang="less">
    .goods-detail {
        .mui-card-content {
            .price {
                color: rgb(51, 51, 51);
                margin-bottom: 4px;
                span {
                    margin-left: 6px;
                }
                em {
                    font-size: 18px;
                    color: red;
                }
            }
        }
        .mui-card-footer {
            .btn{
                color: #26a2ff;
                border:1px solid #26a2ff;
            }
            div {
                width: 100%;
            }
            .mui-btn {
                padding: 8px 0;
                font-size: 16px;
            }
        }
        .mint-tab-item {
            &.is-selected {
                margin-bottom: 0;
                border-bottom: 3px solid #26a2ff;
                color: #26a2ff;
            }
        }
        .mint-tab-item-label {
            font-size: 18px;
            color: #26a2ff;
        }
    }
</style>