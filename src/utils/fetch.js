import axios from "axios";
import router from '../router'
import global from '../global/global'
import store from "../vuex/store";
import { Loading } from 'element-ui';

let loadingInstance = null

// 创建axios实例
const service = axios.create({
    baseURL: '', // api的base_url
    timeout: 100 * 1000, // 请求超时时间
    headers: { "Cache-Control": "no-cache", }
});
// 添加请求拦截器
service.interceptors.request.use(
    request => {
        // 请求头添加token
        let token = sessionStorage.getItem('token');
        if (token) {
            request.headers[global.tokenKey] = token;
        }
        loadingInstance=Loading.service(global.jsonp.loading);
        return request;
    },
    error => {
        return Promise.reject(error);
    }
);

function onError(query){
    // router.push({path:'/error',query:query})
}

// 拦截返回的数据res,通过返回值直接获取到服务器的数据
service.interceptors.response.use(
    response => {
        loadingInstance.close();
        const res = response.data
        switch (res.code) {
            case 200:
                if (res.result==null||res.result==''||res.result=={}||res.result==[]||res.result==undefined){
                    return []
                }else {
                    return res;
                }
                break;
            case 502:
                break;
            case 500:
                onError({code:res.code})
                return Promise.reject('error')
            case 400:
                onError({code:res.code})
                return Promise.reject('error')
        }
    },
    error => {
        loadingInstance.close();
        onError({code:error.response.status})
    }
);

export default service;
