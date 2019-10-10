// pages/home/HomeScene.js

//应用实例的获取
var app = getApp()
var common = require("../../common/common.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name : "MythosMa",
    password : "000000",
    id : 1,
    count : 0,
    array : [1, 3, 5, 7, 9],
    condition : true,
    person : {
      personName : "MythosMa",
      personAge : 30,
      personTel : 18600361321,
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //setData是用来把数据从逻辑层发送到视图层来显示的
    this.setData({
      password: app.globalData.password
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("home scene onshow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  toIndex : function () {
    console.log("press to index") ;
    wx.navigateTo({
      url: '../test/test',
      success : function() {
        console.log("跳转成功");
      }
    });
  },

  say : function() {
    common.sayHello("hahahahaha") ;
  },

  countAdd : function() {
    this.setData({
      count:++this.data.count,
    });
  },

  conditionChange : function() {
    this.setData({
      condition : !this.data.condition,
    });
  }
})