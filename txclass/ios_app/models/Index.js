import { reject } from 'async'
import { API } from '../utils/config'
import HTTP from '../utils/http'

// index页面的数据请求方法
export default class IndexModel extends HTTP {
  getCourseDatas() {
    return new Promise((resolve) => {
      this.fetchGet({
        url: API.getCourseDatas,
        success(data) {
          resolve(data)
        },
        error(error) {
          reject(error)
        }
      })
    })
  }
}