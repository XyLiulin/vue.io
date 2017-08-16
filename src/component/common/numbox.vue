<template>
    <div class="mui-numbox">
        <button class="mui-btn mui-btn-numbox-minus" @click="subtract">-</button>
        <input class="mui-input-numbox" type="number" v-model="value">
        <button class="mui-btn mui-btn-numbox-plus" @click="add">+</button>
    </div>
</template>

<script>
    export default{
        props:['initVal'],
        data(){
            return{
                value:this.initVal || 0
            }
        },
        methods:{
            add(){
                this.value++;
            },
            subtract(){
                this.value && this.value--;
            }
        },
        watch:{
            value(){
                this.$emit('change',this.value)
            }
        }
    }
</script>

<style lang="less">

</style>