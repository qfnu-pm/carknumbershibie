//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    inputValue: ''
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  }
})
