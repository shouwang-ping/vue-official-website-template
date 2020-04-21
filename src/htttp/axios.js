/* axios再封装 */
import axios from 'axios'
import { Message, Loading } from 'element-ui'
import store from '../store/index'//vue数据仓库
// import userData from '../assets/js/Self-madeLibrary/userData'
window.loadingInstance = null
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true
function _loading() {
  loadingInstance = Loading.service({
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.2)'
  })
}
axios.interceptors.request.use(config => {
  //显示loading
  if(!loadingInstance || !loadingInstance.close()){
    _loading()
  }
  return config
}, error => {
  return Message.error(error.Message);
})

// axios.interceptors.response.use(response => {
//   return response
// }, error => {
//   return Toast({
//     message: error.message
//   });
// })

const ENV = {
  online: 'http://jianyitong.com',
  testline: 'http://test.jianyitong.com',
  dev: '/3'
}

const API_ROOT = process.env.NODE_ENV === 'production' ? ENV.online : process.env.NODE_ENV === 'testing' ? ENV.testline : ENV.dev

function errorState(response) {
  // 如果http状态码正常，则直接返回数据
   //显示loading
  //  _loading()
  loadingInstance.close()
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return Message.error(response.data.errorMessage || '网络异常')
    // 如果不需要除了data之外的数据，可以直接 return response.data
  } else {
    return Message.error('请求失败');
  }

}

function successState(res, resolve, opts) {
  //统一判断后端返回的错误码
  // _loading()
  if(opts.streamFile){
    return res
  }
  if (res.data.code != 1) {
    loadingInstance.close()
    if(res.data.errorCode && res && res.data.errorCode=="ABC001"||res.data.errorCode=="ABC002"||res.data.errorCode=="ABC003"){
      window.location.href = API_ROOT+'/manager/index.html';
    }else{
      // if(res.data.errorMessage == 'token出错！'){
      //   window.location.href = API_ROOT+'/manager/index.html';
      // }else{
      //   message.error(res.data.errorMessage || '网络异常',2.5)
      //   return false
      // }
      // Message.error(res.data.errorMessage || '网络异常')
      return res
    }
  } else {
    loadingInstance.close()
    return res
  }
}


const httpServer = (opts, data, addressParameter, contentType) => {
// multipart/form-data  文件上传的时候使用的contentType

  // let params = new URLSearchParams()
  // if(fromData){
  //   params = new fromData()
  // }
  // if(JSON.stringify(data) != '{}'){
  //       for (let i in data) {
  //         if (data[i] || data[i] == '0') {
  //           params.append(i, data[i])
  //         }
  //       }
  //       params.append('token',user.get_data('userData').token)
  // }else{
  //   params.append('token',user.get_data('userData').token)
  // }
  store.state.sealData.loading = store.state.sealData.loading+1
  let _url = ''
  if(opts.urlEnd && opts.urlEnd != 'void'){
    _url = opts.url + addressParameter + opts.urlEnd
  }else if(opts.urlEnd && opts.urlEnd == 'void'){
    _url = opts.url + addressParameter
  }else{
    _url = opts.url
  }

  let httpDefaultOpts = { //http默认配置
    method: opts.method,
    // baseURL: opts.baseURL,
    baseURL: API_ROOT,
    url: _url,
    timeout: 30000,
    params: data,
    data: data,
    headers: opts.method == 'get' ? {
      'X-Requested-With': 'XMLHttpRequest',
      "Accept": "application/json",
      "Content-Type": "application/json; charset=UTF-8"
    } : {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  
  if (opts.method == 'get') {
    delete httpDefaultOpts.data
  } else {
    delete httpDefaultOpts.params
  }
  let promise = new Promise(function (resolve, reject) {
    axios(httpDefaultOpts).then(
      (res) => {
        resolve(successState(res, resolve, opts))
        // resolve(res)
      }
    ).catch(
      (response) => {
        reject(errorState(response))
      }
    )

  })
  return promise
}

export default httpServer
