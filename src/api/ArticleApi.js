import {articleDetailsDO, articleListDO, searchArticleDO} from "@/assets/js/DoModel.js";
import  request  from "@/assets/js/Request.js";
import {publicErrorOperate} from "@/assets/js/PublishUtil.js";
import {message} from "ant-design-vue";


export async function getArticleListApi(getData){
    let returnData = articleListDO;
    try {
        const res = await request.GetArticleList(getData);
        returnData = res.data;
    } catch (err) {
        if (err.response && err.response.data) {
            if (!await publicErrorOperate(err)) {
                switch (err.response.data.output) {
                    default:
                        returnData = err.response.data;
                        message.warn(err.response.data.message);
                }
            }
        } else {
            console.warn("[REQUEST] ArticleApi[getArticleListApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] ArticleApi[getArticleListApi]: 请求数据\n', returnData)
    }
    return returnData;
}

export async function getArticleDetailsApi(getData){
    let returnData = articleDetailsDO;
    try {
        const res = await request.GetArticleDetails(getData);
        returnData = res.data;
    } catch (err) {
        if (err.response && err.response.data) {
            if (!await publicErrorOperate(err)) {
                switch (err.response.data.output) {
                    default:
                        returnData = err.response.data;
                        message.warn(err.response.data.message);
                }
            }
        } else {
            console.warn("[REQUEST] ArticleApi[getArticleDetailsApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] ArticleApi[getArticleDetailsApi]: 请求数据\n', returnData)
    }
    return returnData;
}

export async function searchArticleApi(getData){
    let returnData = searchArticleDO;
    try {
        const res = await request.SearchArticle(getData);
        returnData = res.data;
    } catch (err) {
        if (err.response && err.response.data) {
            if (!await publicErrorOperate(err)) {
                switch (err.response.data.output) {
                    default:
                        returnData = err.response.data;
                        message.warn(err.response.data.message);
                }
            }
        } else {
            console.warn("[REQUEST] ArticleApi[searchArticleApi]: 无法找到 response 体");
        }
    } finally {
        console.debug('[REQUEST] ArticleApi[searchArticleApi]: 请求数据\n', returnData)
    }
    return returnData;
}