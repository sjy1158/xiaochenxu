var onlinelocation = "https://www.kuayet.com"
const net = {
  get(url, data) {
    wx.showLoading({
      title: '加载中',//数据请求前loading，提高用户体
    })
    return new Promise((resolve, reject) => {
      wx.request({
        url: onlinelocation + url,
        data: data,
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          'content-type':'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        }, // 设置请求的 header
        success: function (res) {
          // success
          if (res.statusCode!=200) {
            wx.stopPullDownRefresh();
            wx.hideNavigationBarLoading();
            wx.hideLoading();
            wx.showToast({
              title: '网络出错，稍后再试',
              icon: 'none'
            });
            return false;
          }
          if (res.data.code == 200) {
            wx.stopPullDownRefresh();
            wx.hideNavigationBarLoading();
            wx.hideLoading();
            resolve(res.data.data);
          } else if (res.data.code == 400) {
            resolve(res.data);
          } else {
            wx.showToast({
              title: '服务器繁忙',
              icon: 'none',
              duration: 2000
            })
          }
        },
        fail: function (error) {
          // fail
          wx.stopPullDownRefresh();
          wx.hideNavigationBarLoading();
          wx.hideLoading();
          reject(error);//请求失败
          wx.showToast({
            title: '服务器繁忙',
            icon: 'none',
            duration: 2000
          });
        },
        complete: function () {
          wx.stopPullDownRefresh();
          wx.hideNavigationBarLoading();
          wx.hideLoading();
          // complete
        }
      })
    })
  },
  post(url, data) {
    wx.showLoading({
      title: '加载中',
    })
    return new Promise((resolve, reject) => {
      wx.request({
        url: onlinelocation + url,
        data: data,
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          'content-type':'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        }, // 设置请求的 header
        success: function (res) {
          // success
          wx.hideLoading();
          resolve(res.data);
        },
        fail: function (error) {
          // fail
          wx.hideLoading();
          reject(error);
        },
        complete: function () {
          // complete
          wx.hideLoading();
        }
      })
    })
  }
}

export default net;//暴露出来供其他文件引用
