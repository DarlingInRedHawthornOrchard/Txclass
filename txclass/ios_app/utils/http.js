// 封装fetch请求方法
// options对象为传入的对象，里面有url method等

export default class HTTP {
  fetchGet(options) {
    return fetch(options.url)
    .then(res => {
      res.json()  // 转为json数据
    }).then(resJson => {
      options.success(resJson)
    }).catch(err => {
      options.error(error)
    })
  }
}