import totast from './totast'
const Authorization = 'Bearer xxx'
class publicRequest {
  static get ({url, data = {}, isJson = false, hasToken = true, header}) {
    let hasNetWork = checkNetWork()
    if (!hasNetWork) {
      totast.msg('网络异常', {})
      return false
    }
    let contentType = isJson ? 'application/json' : 'application/x-www-form-urlencoded'
    let _authorization = hasToken ? {'Authorization': Authorization} : {}
    let _header = Object.assign({'content-type': contentType}, _authorization, header)
    wx.showLoading({title: '加载中...'})
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        header: _header,
        dataType: 'json',
        method: 'get',
        data,
        success: function (res) {
          if (res.resultCode === 200) {
            resolve(res.data)
          }
        },
        fail: function (error) {
          totast.msg(error.errMsg, {})
          reject(error)
        },
        complete: res => {
          if (res.statusCode !== 200) {
            totastMessage({
              statusCode: res.statusCode,
              message: res.data.msg
            })
          }
          wx.hideLoading()
        }
      })
    })
  }
  static post ({url, data = {}, isJson = false, hasToken = true, header}) {
    let hasNetWork = checkNetWork()
    if (!hasNetWork) {
      totast.msg('网络异常', {})
      return false
    }
    let contentType = isJson ? 'application/json' : 'application/x-www-form-urlencoded'
    let _authorization = hasToken ? {'Authorization': Authorization} : {}
    let _header = Object.assign({'content-type': contentType}, _authorization, header)
    wx.showLoading({title: '加载中...'})
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        header: _header,
        dataType: 'json',
        method: 'POST',
        data,
        success: function (res) {
          if (res.resultCode === 200) {
            resolve(res.data)
          }
        },
        fail: function (error) {
          totast.msg(error.errMsg, {})
          reject(error)
        },
        complete: res => {
          if (res.statusCode !== 200) {
            totastMessage({
              statusCode: res.statusCode,
              message: res.data.msg
            })
          }
          wx.hideLoading()
        }
      })
    })
  }
}

const checkNetWork = function () {
  return new Promise(resolve => {
    wx.getNetworkType({
      success: res => {
        let networkType = res.networkType
        if (networkType === 'none' || networkType === 'unknown') {
          resolve(false)
        } else {
          resolve(true)
        }
      },
      fail: () => {
        resolve(false)
      }
    })
  })
}
const totastMessage = function ({statusCode, message}) {
  switch (statusCode) {
    case 502:
      totast.msg('服务器异常', {})
      break
    default:
      totast.msg(message, {})
  }
}
export default publicRequest
