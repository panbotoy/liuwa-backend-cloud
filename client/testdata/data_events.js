module.exports = {

}

var home_events = {
  "id": "0",
  "data": [
    {
      "id": "1001",
      "title": "9/15 Sushi Buffet",
      "description": "幸福的小周末，跟姐妹们一起来聚会吧！",
      "images": {
        "small": "http://www.petspet.org/wp-content/uploads/2015/06/Fat-cat-1.png",
        "large": "http://www.petspet.org/wp-content/uploads/2015/06/Fat-cat-1.png",
      }
    },
    {
      "id": "1002",
      "title": "9/21 玫瑰园野餐",
      "description": "接叶连枝千万绿，一花两色浅深红。玫瑰园花开正艳，快来一起遛娃吧！",
      "images": {
        "small": "http://www.petspet.org/wp-content/uploads/2015/06/Fat-cat-1.png",
        "large": "http://www.petspet.org/wp-content/uploads/2015/06/Fat-cat-1.png",
      }
    },
  ]
}

var my_events = {
  "id": "0",
  "data": [
    {
      "id": "1001",
      "title": "9/15 Sushi Buffet",
      "description": "幸福的小周末，跟姐妹们一起来聚会吧！",
      "images": {
        "small": "http://www.petspet.org/wp-content/uploads/2015/06/Fat-cat-1.png",
        "large": "http://www.petspet.org/wp-content/uploads/2015/06/Fat-cat-1.png",
      },
      "myApplication": {
        "adult": "2",
        "children": "1",
      }
    },
  ]
}

var complete_event = {
  "data": {
    "id": 1001,
    "title": "9/15 Sushi Buffet",
    "description": "幸福的小周末，跟姐妹们一起来聚会吧！",
    "address": "713 Pin Palm Drive, Sunnyvale, 94085",
    "date": "9/15中午12:00PM",
    "suggestedAgeGroup": "0-3",
    "detailedDescription": "店里提供high chair, 欢迎带娃带家属哟！需要提前预定，所以9月12号截止报名。Tommie Buffet有寿司点心中式饭菜，价格实惠，味道还很不错哟！",
    "images": {
      "small": "http://www.petspet.org/wp-content/uploads/2015/06/Fat-cat-1.png",
      "large": "http://www.petspet.org/wp-content/uploads/2015/06/Fat-cat-1.png",
      "wechatGroupQrImage": "http://www.petspet.org/wp-content/uploads/2015/06/Fat-cat-1.png",
    },
    "organizers": [
      {
        "nickname": "Luna",
        "avatar": "http://www.petspet.org/wp-content/uploads/2015/06/Fat-cat-1.png",
        "memberId": "0001",
      },
      {
        "nickname": "Stella",
        "avatar": "http://www.petspet.org/wp-content/uploads/2015/06/Fat-cat-1.png",
        "memberId": "0002",
      }
    ],
    "applications": [
      {
        "memberNickName": "Helen",
        "memberAvatar": "http://www.petspet.org/wp-content/uploads/2015/06/Fat-cat-1.png",
        "application": {
          "adult": "2",
          "children": "2",
        }
      },
      {
        "memberNickName": "Qiuqiu",
        "memberAvatar": "http://www.petspet.org/wp-content/uploads/2015/06/Fat-cat-1.png",
        "application": {
          "adult": "2",
          "children": "1",
        }
      }
    ],
  }
}

module.exports.home_events = home_events;
module.exports.my_events = my_events;
module.exports.complete_event = complete_event;