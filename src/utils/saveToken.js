const saveToken = {
  setToken (token) {
    wx.setStorage({
      key: 'getToken',
      data: {
        token: token
      }
    })
  },
  getToken () {
    var res = wx.getStorageSync('getToken')
    return res
  },
  clearToken () {
    wx.clearStorageSync()
  }
}

export default saveToken;
