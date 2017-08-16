/**
 * Created by LIULIN on 2017/8/13.
 */
const domain = 'http://139.199.192.48:8888';
export default{
    domainImg:'http://ofv795nmp.bkt.clouddn.com/',
    domain : domain,
    //新闻api
    newsList : domain + '/api/getnewslist',
    newsDetails : domain + '/api/getnew/',
    //评论api
    commentPut : domain + '/api/postcomment/',
    commentList : domain + '/api/getcomments/',
    //图片列表api
    photoList : domain + '/api/getimages/',
    //图片分类数据api
    photoImgcategory : domain + '/api/getimgcategory',
    //缩略图api
    photoThumimages : domain + '/api/getthumimages/',
    //图片详情api
    phptoImageInfo : domain + '/api/getimageInfo/',
    //商品列表api
    subcommList : domain + '/api/getgoods',
    //商品详情api
    subcommSlider : domain + '/api/goods/getdesc/'
}