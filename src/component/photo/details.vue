<template>
    <section class="details">
        <v-title :title="title"></v-title>
        <div class="mui-card">
            <div class="mui-card-header headl">
                <h4>{{info.title}}</h4>
                <p>
                    <span>发布时间：{{info.add_time | formatDate('YYYY-MM-DD')}}</span>
                    <span>点击量：{{info.click}}</span>
                </p>
            </div>
            <div class="mui-card-conten contentl">
                <ul class="mui-table-view mui-grid-view">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4" v-for="(item,i) in thums" :key="item.src" @click="$preview.open(i,thums)">
                        <img :src="item.src" class="preview-img"/>
                        <!--<img :src="item.src" class="preview-img" v-for="(item,i) in thums"  height="100" @click="$preview.open(i,thums)" />-->
                    </li>
                </ul>
            </div>
            <div class="mui-card-footer footerl" v-html="info.content"></div>
        </div>
    </section>
</template>

<script>
    import config from '../../js/config.js';
    import Ctitle from '../common/title.vue';
    export default{
        data(){
            return{
                title:'图片详情',
                info:{},
                thums:[]
            }
        },
        methods:{
            //获取图片详情数据
            getDetails(){
                let url = config.phptoImageInfo + this.$route.params.id;
                this.$http.get(url).then(rep => {
                    if(rep.body.status == 0){
                        this.info = rep.body.message[0];
                    }
                })
            },
            //获取缩略图数据
            getThums(){
                let url = config.photoThumimages + this.$route.params.id;
                this.$http.get(url).then(rep => {
                    if(rep.body.status == 0){
                        this.thums = rep.body.message.map(function (photo,i) {
                            photo.src = config.domainImg + photo.src;
                            photo.w = 600;
                            photo.h = 400;
                            return photo;
                        });
                    }
                })
            }
        },
        created(){
            this.getDetails();
            this.getThums();
        },
        components:{
            'v-title':Ctitle
        }
    }
</script>

<style lang="less">
    .details{
        h4{
            color:#26a2ff;
        }
    }
    .headl,.footerl{
        display: block;
    }
    .contentl img{
        width:100%;
    }
</style>