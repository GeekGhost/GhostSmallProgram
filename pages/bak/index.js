//index.js
//获取应用实例
var app = getApp();
var mtabW;
var list;

Page({
  data: {
    tabs: ["精选", "专题", "发现", "我的"],
    activeIndex: 0,
    slideOffset: 0,
    tabW: 0,
  },
  //事件处理函数
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        mtabW = res.windowWidth / 4; //设置tab的宽度
        that.setData({
          tabW: mtabW
        })
      }
    });
    //获取汇率  
    wx.request({
      url: "https://api.svipmovie.com/front/homePageApi/homePage.do",
      success: function (res) {
        console.log(res.data.ret.hotSearchList);
        list = res.data.ret.list;
        that.setData({
          list: list
        });
        console.log(list)
      }
    }) 
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  tabClick: function (e) {
    var that = this;
    var idIndex = e.currentTarget.id;
    var offsetW = e.currentTarget.offsetLeft;
    this.setData({
      activeIndex: idIndex,
      slideOffset: offsetW
    });
  },
  bindChange: function (e) {
    var current = e.detail.current;
    if ((current + 1) % 4 == 0) {

    }
    var offsetW = current * mtabW; //2种方法获取距离文档左边有多少距离
    this.setData({
      activeIndex: current,
      slideOffset: offsetW,
    });

  } 

})

