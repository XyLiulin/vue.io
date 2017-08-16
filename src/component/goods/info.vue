<template>
    <section>
        <div class="mui-card">
            <div class="mui-card-header">{{info.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner" v-html="info.content"></div>
        </div>
        </div>
    </section>
</template>

<script>
    import config from '../../js/config.js';
    export default{
        props:['id'],
        data(){
            return{
                info:{}
            }
        },
        methods:{
            getInfo(){
                let url = config.goodsDetails + this.id;
                this.$http.get(url).then(rep => {
                    if(rep.body.status == 0){
                        this.info = rep.body.message[0];
                    }
                })
            }
        },
        created(){
            this.getInfo();
        }
    }
</script>