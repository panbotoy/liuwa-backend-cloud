// client/pages/event/event.js
var util = require('../../utils/util.js')
Page({

  /**
   * Page initial data
   */
  data: {
    event: {},
    flag: true,
    pickerArray: ["0","1","2","3","4","5","6"],
    adultPickerIndex: 0,
    childPickerIndex: 0,
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var event = util.getCompleteEvent();
    this.setData({
      event: event.data,
    });
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  preApply: function () {
    this.setData({
      flag: false
    })
  },

  bindAdultPickerChange: function(e) {
    this.setData({adultPickerIndex: e.detail.value})
  },

  bindChildPickerChange: function (e) {
    this.setData({ childPickerIndex: e.detail.value })
  },

  cancelApply: function(e) {
    this.setData({
      flag: true,
      adultPickerIndex: 0,
      childPickerIndex: 0,
    })
  }
})