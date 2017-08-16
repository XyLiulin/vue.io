<template>
    <section class="swipe">
        <mt-swipe :auto="2500">
            <mt-swipe-item v-for="(item,i) in list" :key="i">
                <a :href="item.url">
                    <img :src="item.src" />
                </a>
            </mt-swipe-item>
        </mt-swipe>
    </section>
</template>

<script>
    export default {
        props:['list']
    };
</script>

<style lang="less">
    .swipe{
        height:250px;
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>