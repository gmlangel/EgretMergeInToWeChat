//index.js
//导入游戏库
require("../../gameEngine/weapp-adapter.js")

//获取应用实例
const app = getApp()

Page({
  onLoad: function () {

  },
  onReady:function(){
    
  },
  onShow:function(){

  },
  onCanvasTouchStart:function(arg){
    if (wx.onTouchStart)
      wx.onTouchStart(arg)
  },
  onCanvasTouchMove: function (arg) {
    if(wx.onTouchMove)
      wx.onTouchMove(arg);
  },
  onCanvasTouchEnd: function (arg) {
    if(wx.onTouchEnd);
      wx.onTouchEnd(arg)
  },
  onCanvasTouchCancel: function (arg) {
    if(wx.onTouchCancel)
      wx.onTouchCancel(arg);
  }
})
