import axios from 'axios'

export function request(config) {
    //1.创建实例
    const instance = axios.create({
      baseURL: 'http://152.136.185',
      timeout: 5000
    })
    //2.1 axios的请求拦截器
    instance.interceptors.request.use(config => {
      // console.log(config);
      //为什么要做拦截
      //1.比如说config中的一些信息不符合服务器要求
      //2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
      //3.某些网络请求（比如登录 （tooken）），必须携带一些特殊的信息
      //拦截器拿到的config一定要return回去
      return config
    }, err => {
    //  console.log(err)
    })
    //2.2 响应拦截
    instance.interceptors.response.use(res => {
      // console.log(res)
      return res.data
    }, err => {
      // console.log(err)
    })
    instance.interceptors.response;
    //3.发送真正的网络请求 instance的返回值就是Promise 
     return instance(config)
}




