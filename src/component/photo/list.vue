<template>
    <section class="list">
        <!--图片分类-->
        <ul class="mui-table-view">
            <li class="mui-table-view-cell floatl">全部</li>
            <li class="mui-table-view-cell floatl" v-for="item in categoryList" :key="item.id">
                <router-link :to="'/photo/list/' + item.id">{{item.title}}</router-link>
            </li>
        </ul>

        <!--图片列表-->
        <div class="mui-card" v-for="item in listPhoto" :key="item.id">
            <router-link :to="'/photo/details/' + item.id">
                <div class="mui-card-header mui-card-media" :style="getStyle(item)"></div>
            </router-link>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>{{item.title}}</p>
                    <p style="color:#333;">{{item.zhaiyao}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import config from '../../js/config.js';
    export default{
        data(){
            return{
                categoryList:[],
                listPhoto:[]
            }
        },
        watch:{
            $route(){
                this.getPhotoList(this.$route.params.id);
            }
        },
        methods:{
            //获取分类列表
            getCategoryList(){
                let url = config.photoImgcategory;
//                console.log(url);
                this.$http.get(url).then(rep => {
                    if(rep.body.status == 0){
                        this.categoryList = rep.body.message;
                    }
                })
            },
            //获取图片列表
            getPhotoList(id){
                let url = config.photoList + id;
//                console.log(url);
                this.$http.get(url).then(rep => {
                    if(rep.body.status == 0){
                        this.listPhoto = rep.body.message.map(function (photo,i) {
                            photo.img_url = config.domainImg + photo.img_url;
                            return photo;
                        })
                    }
                })
            },
            //获取背景样式
            getStyle(item){
                return 'height:40vw; background-image:url("' + item.img_url +'")';
            }
        },
        created(){
            this.getCategoryList();
            this.getPhotoList(this.$route.params.id);
        }
    }
</script>

<style lang="less">
    .list{
        .mui-table-view{
            overflow: hidden;
            .floatl{
                float: left;
            }
        }

    }
</style>