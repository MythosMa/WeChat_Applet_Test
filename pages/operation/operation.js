// pages/operation/operation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		audioData:{
			poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
			name: '此时此刻',
			author: '许巍',
			src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
		},

		imageSr: "../../images/cat.jpg",

		markers: [{
			id: 0,
			latitude: 23.099994,
			longitude: 113.324520,
			width: 50,
			height: 50
		}],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
		this.audioContext = wx.createAudioContext("myAudio", this) ;
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
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

	showActionSheet : function() {
		wx.showActionSheet({
			itemList: ["A", "B", "C"],
			itemColor: "green",
			success:function(res) {
				if(!res.cancel) {
					console.log(res.tapIndex) ;
				}
			},
		});
	},

	showModal : function() {
		wx.showModal({
			title: '提示',
			content: '这是模态弹窗',
			success:function(res) {
				console.log(res);
			},
		})
	},

	nagivatorTo : function() {
		wx.navigateTo({
			url: '../logs/logs?id=1',
		});
	},

	redirectTo : function() {
		wx.redirectTo({
			url: '../logs/logs?id=1',
		});
	},

	audioPlay : function() {
		this.audioContext.play() ;
	},

	audioPause: function () {
		this.audioContext.pause();
	},

	audioSeek : function() {
		this.audioContext.seek(15);
	},

	getCurrentLocation : function() {
		wx.getLocation({
			type: 'gcj02',
			success: function (res) {
				var latitude = res.latitude
				var longitude = res.longitude

				wx.openLocation({
					latitude: latitude,
					longitude: longitude,
					scale: 28
				})
			}
		})
	}
})