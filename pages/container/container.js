// pages/container/container.js
var viewArr = ['a', 'b', 'c'];
var index = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: "a",
    imgUrls: [
      'https://goss1.vcg.com/creative/vcg/800/new/VCG211164447878.jpg',
			'https://goss2.vcg.com/creative/vcg/800/new/VCG211164415393.jpg',
			'https://goss3.vcg.com/creative/vcg/800/new/VCG211164402864.jpg'
    ],
		country: [
			{ name: 'USA', value: '美国' },
			{ name: 'CHN', value: '中国', checked: 'true' },
			{ name: 'BRA', value: '巴西' },
			{ name: 'JPN', value: '日本' },
			{ name: 'ENG', value: '英国' },
			{ name: 'TUR', value: '法国' },
		],

		cities: [
			"北京", "上海", "天津", "重庆"
		],
		cityIndex:0,

		changeSpeed:2000,
		isAutoplay:true,
		iconType: [
			'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
		],

		time:"09:00",
		date:"1988-11-17",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  scrolltoupper: function(event) {
    console.log('scrolltoupper');
    console.log(event);
  },

  scrolltolower: function(event) {
    console.log('scrolltolower');
    console.log(event);
  },

  tapChange: function() {
    index++;
    if (index > viewArr.length - 1) {
      index = 0;
    }
    this.setData({
      toView: viewArr[index],
    });
  },

	swiperChange(event) {
		
	},

	sliderChange(event) {
		console.log(event) ;
		this.setData({
			changeSpeed: event.detail.value,
		});
	},

	changeAutoplay() {
		this.setData({
			isAutoplay: !this.data.isAutoplay,
		});
	},

	subCallback : function(event) {
		console.log('subCallback->', event.detail.value);
	},

	resetCallback : function(event) {
		console.log('resetCallback->', event.detail.value);
	},

	checkboxCallback : function(event) {
		console.log(event.detail.value);
	},

	radioCallback : function(event) {
		console.log(event.detail.value);
	},

	pickerNorCallback : function(event) {
		console.log(event.detail.value);
		this.setData({
			cityIndex : event.detail.value,
		});
	},

	pickerTimeCallback : function(event) {
		console.log(event.detail.value);
		this.setData({
			time: event.detail.value,
		});
	},

	pickerDateCallback : function(event) {
		console.log(event.detail.value);
		this.setData({
			date: event.detail.value,
		});
	},

	switchCallback : function(event) {
		console.log(event.detail.value);
	},

	textareaLineCallback : function(event) {
		console.log(event.detail);
	}
})