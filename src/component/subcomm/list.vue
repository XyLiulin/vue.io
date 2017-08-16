<tmeplate>
    <section class="slider">
        <ul class="mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
                <a href="#">
                    <img class="mui-media-object" src="">
                    <div class="mui-media-body">幸福就是可以一起睡觉</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
                <a href="#">
                    <img class="mui-media-object" src="../images/muwu.jpg">
                    <div class="mui-media-body">想要一间这样的木屋，静静的喝咖啡</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
                <a href="#"><img class="mui-media-object" src="../images/cbd.jpg">
                    <div class="mui-media-body">Color of SIP CBD</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
                <a href="#">
                    <img class="mui-media-object" src="../images/yuantiao.jpg">
                    <div class="mui-media-body">静静看这世界</div></a></li>
        </ul>
    </section>
</tmeplate>

<script>
    import config from '../../js/config.js';
    export default{
        data(){
            return{
                list:[],
                pageindex:1
            }
        },
        props:['id'],
        methods:{
            getList(){
                let url = `${config.subcommList + this.id}?pageindex=${this.pageindex}`;
//                let url = config.subcommList + this.id;
                this.$http.get(url).then(rep => {
                    if(rep.body.status == 0){
                        this.list = rep.body.message;
                    }
                })
            }
        },
        created(){
            this.getList();
        }
    }
</script>

<style lang="less">

</style>