//index.js
//获取应用实例
var app = getApp();
var list;

Page({
  data: {
  },
  //事件处理函数
  onLoad: function () {
    var that = this;
    //获取汇率  
    wx.request({
      url: "http://api.svipmovie.com/front/homePageApi/homePage.do",
      success: function (res) {
        list = res.data.ret.list;
        that.setData({
          list: list
        });
        wx.showToast({
          title: res.data.ret.hotSearchList.length+"",
        })
      }
    }) 
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onclik:function(e){
    console.log(e.currentTarget.dataset.url);
    // wx.showToast({title:e});
    wx.navigateTo({
      url: '../videoplay/videoplay?url=' + e.currentTarget.dataset.url,
    })
  }
})

