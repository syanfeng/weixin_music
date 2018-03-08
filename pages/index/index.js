//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    autoplay: true,
    interval: 5000,
    duration: 1000,
    swiperCurrent: 0,
    banners: [
      {
        pic: '../../images/banner01.jpg'
      },
      {
        pic: '../../images/banner02.jpg'
      }
    ],
    toutiaos: [
      {
        content: '这世间的烟云飘渺，怎敌得过舒淇的倾城一笑？',
        tips: '皮皮呀：这世间的烟云飘渺，怎敌得过舒淇的倾城一笑',
        pic: '../../images/banner01.jpg'
      },
      {
        content: '这世间的烟云飘渺，怎敌得过舒淇的倾城一笑？',
        tips: '皮皮呀：这世间的烟云飘渺，怎敌得过舒淇的倾城一笑',
        pic: '../../images/banner02.jpg'
      }
    ],
    audios: [
      {
        id: 1,
        name: 'How Long',
        author: 'Charli',
        poster: '/images/poster-howlong.jpg',
        url: 'http://7xp1db.com1.z0.glb.clouddn.com/how-long.mp3'
      },
      {
        id: 2,
        name: 'How Long',
        author: 'Charli',
        poster: '/images/poster-howlong.jpg',
        url: 'http://7xp1db.com1.z0.glb.clouddn.com/how-long.mp3'
      }
    ]
  },
  swiperChange: function(e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  onLoad: function () {
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx.play()
  },
})
