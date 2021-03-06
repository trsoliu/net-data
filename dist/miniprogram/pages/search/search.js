'use strict';

// pages/storageConsole/storageConsole.js

var app = getApp();

Page({

	data: {
		inputValue: "",
		res: {
			province: '',
			city: '',
			areacode: '',
			zip: '',
			company: ''
		}
	},
	/**
  * 搜索事件
  */
	serach: function serach() {
		var that = this;
		that.data.inputValue != '' ? that.require() : wx.showToast({
			title: '主人，搜索内容不能为空',
			icon: 'none',
			duration: 2000
		});
		that.setData({
			noMore: false
		});
	},
	require: function require(e) {
		var that = this;
		wx.request({
			url: app.globalData.baseApi + '/mobile/get',
			method: 'GET',
			data: {
				"phone": that.data.inputValue,
				"dtype": 'json',
				"key": "0e18a858f4fd7ffff9ef74353d7d2110"
			},
			success: function success(res) {
				console.log(res, 8888);
				if (res.data.resultcode == 200) {
					that.setData({
						res: res.data.result
					});
				}
			},
			fail: function fail() {},
			complete: function complete() {}
		});
	},

	/**
  * 获取搜索框输入的内容
  * @param {*} e 
  */
	getInputValue: function getInputValue(e) {
		var that = this;
		this.setData({
			inputValue: e.detail.value,
			res: !!e.detail.value ? that.data.res : {
				province: '',
				city: '',
				areacode: '',
				zip: '',
				company: ''
			}
		});
	},

	/**
  * 清空搜索框
  * @param {*} e 
  */
	clear: function clear(e) {
		var that = this;
		this.setData({
			inputValue: '',
			res: {
				province: '',
				city: '',
				areacode: '',
				zip: '',
				company: ''
			}
		});
	},

	onLoad: function onLoad(options) {}

});