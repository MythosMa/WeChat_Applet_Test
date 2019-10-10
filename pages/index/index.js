//index.js 逻辑层
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
		positionX : 0,
		positionY : 0,
		positionY_2 : 1104,
  },
  //事件处理函数->在wxml里面调用的
  bindViewTap: function() {
    
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
		
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

		//计时器
		//setInterval(this.viewMove, 5) ;
  },
  onShow:function(){
    console.log("index scene onshow");
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

	viewMove : function() {
		console.log("viewMove") ;
		var positionY_temp = this.data.positionY + 2 ;
		if (positionY_temp > 1104) {
			positionY_temp = -1104 ;
		}
		var positionY_2_temp = this.data.positionY_2 + 2;
		if (positionY_2_temp > 1104) {
			positionY_2_temp = -1104;
		}
		this.setData({
			positionY: positionY_temp ,
			positionY_2: positionY_2_temp,
		});
	},

  //按钮回调，更改motto的数据
  changeMotto:function(){
    this.setData({motto:"你点了我"});
  },

	onShareAppMessage : function(res) {
		console.log(res) ;

		return {
			title: "这是一个转发",
			path: "/pages/index/index",
		};
	}
	
})
