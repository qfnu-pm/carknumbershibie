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
  },
  qryRuleForbidden() {
    this.setData({
      inputValue: "遮挡号牌，扣12分"
    })
  },
  error(e) {
    console.log(e.detail)
  }
})
