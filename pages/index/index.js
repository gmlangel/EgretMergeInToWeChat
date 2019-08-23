//index.js
//导入游戏库

//获取应用实例
const app = getApp()

Page({
  onLoad: function () {

  },
  onReady:function(){
    //模拟wx.createCanvas返回rootCanvas
    //获取主场景canvas
    const query = wx.createSelectorQuery()
    query.select('#myCanvas').node().exec((res) => {
      console.log("rootCanvas获取成功");
      const gcanvas = res[0].node
      wx.createCanvas = function () {
        return gcanvas;
      }
      //注册游戏引擎相关的脚本
      require("../../gameEngine/weapp-adapter.js")
      //require('../../gameEngine/platform.js');
      //require('../../gameEngine/manifest.js');
    })
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
