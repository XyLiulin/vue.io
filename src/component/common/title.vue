<template>
    <section class="list mint-header">
        <div @click="rollback" class="mint-header-button is-left">
            <button class="mint-button mint-button--default mint-button--normal">
                <span class="mint-button-icon color_tit"><i class="mintui mintui-back"></i></span>
                <label class="mint-button-text color_tit">返回</label>
            </button>
        </div>
            <h1 class="mint-header-title color_tit">{{title}}</h1>
            <div class="mint-header-button is-right"></div>
    </section>
</template>

<script>
    export default{
        props:['title'],
        methods:{
            rollback(){
                this.$router.go(-1);
            }
        }
    };
</script>

<style lang="less">
    .list{
        background-color: #fff;
        border-bottom: 1px solid #f8f8f8;
        .color_tit{
            color:#26a2ff;
        }
    }
</style>