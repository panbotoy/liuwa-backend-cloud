// client/pages/userActivity/userActivity.js
var util = require('../../utils/util.js')
Page({

  /**
   * Page initial data
   */
  data: {
    myEvents: [],
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var myEvents = util.getMyEvents();
    this.setData({
      myEvents: myEvents.data,
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

  }
})