<template>
    <section class="comment">
        <!--提交列表-->
        <div class="mui-card">
            <div class="mui-card-header">提交评论</div>
            <div class="mui-card-content">
                <textarea v-model="content" id="textarea" rows="5" placeholder="请输入评论内容"></textarea>
                <button @click="submitComment" type="button" class="btnbut mui-btn mui-btn-primary mui-btn-block">发表</button>
            </div>
        </div>

        <!--评论列表-->
        <div class="mui-card">
            <div class="mui-card-header">评论列表</div>
            <div class="mui-card-content">
                <ul class="mui-table-view">
                    <li v-for="(item,i) in list" :key="i" class="mui-table-view-cell">
                        <div>
                            <span>第{{ i + 1 }}楼</span>
                            <span>用户：{{item.user_name}}</span>
                            <span>发表时间：{{item.add_time | formatDate('YYYY-MM-DD')}}</span>
                        </div>
                        <p>{{item.content}}</p>
                    </li>
                </ul>
                <button @click="getComment" type="button" class="btnbut mui-btn mui-btn-primary mui-btn-block">加载更多</button>
            </div>
        </div>
    </section>
</template>

<script>
    import config from '../../js/config.js';
    import { Toast } from 'mint-ui';

    export default{
        data(){
            return {
                content:'',
                pageindex : 1,
                list:[]
            };
        },
        props:['id'],
        methods:{
//            提交评论
            submitComment(){
                let url = config.commentPut + this.id;
//                console.log(url);
                let data = { content:this.content };
                this.$http.post(url,data,{emulateJSON:true}).then(rep => {
                    if(rep.body.status == 0){
                        Toast({
                            message: '操作成功',
                            iconClass: 'icon icon-success'
                        });
                        //将评论添加到评论列表中
                        this.list.unshift({
                            user_name:'M',
                            add_time:Date.now(),
                            content:this.content
                        });
                        this.content = '';//清空输入框
                    }
                })
            },
//            获取评论列表
            getComment(){
                let url = `${config.commentList + this.id}?pageindex=${this.pageindex}`;
//                console.log(url);
                this.$http.get(url).then(rep => {
                    if(rep.body.status == 0 && rep.body.message.length > 0){
                        this.list.push(...rep.body.message);
                        this.pageindex++;
                    }
                })
            }
        },
        created(){
            this.getComment();
        }
    };
</script>

<style lang="less">
    .comment{
        .btnbut{
            background-color: #26a2ff;
        }
    }
</style>