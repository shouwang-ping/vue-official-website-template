import Vue from 'vue';
import axios from 'axios';
axios.default.baseUrl = "http://localhost:9000"
axios.interceptors.response.use((res:any) => {
    return res.data
})
const httpServer = () => {
    method: get,
    // baseURL: opts.baseURL,
    baseURL: API_ROOT,
    url: _url,
}
let promise = new Promise(function (resolve, reject) {
    axios(httpDefaultOpts).then(
      (res:any) => {
        resolve(res)
        // resolve(res)
      }
    )

  })
export default httpServer