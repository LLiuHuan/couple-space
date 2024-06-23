export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/test/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    // custom: true,
    selectedColor: '#FF0000',
    list: [
      {
        text: '我们',
        pagePath: 'pages/test/index',
        iconPath: 'assets/icons/love.png',
        selectedIconPath: 'assets/icons/love_selected.png',
      },
      {
        text: '我的',
        pagePath: 'pages/index/index',
        iconPath: 'assets/icons/home.png',
        selectedIconPath: 'assets/icons/home_selected.png',
      },
    ]
  }
})
