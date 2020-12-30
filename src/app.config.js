export default {
  pages: [
    'pages/index/index',
    'pages/Accelerometer/Accelerometer',
    'pages/Compass/Compass',
    'pages/Gyroscope/Gyroscope',
    'pages/DeviceMotion/DeviceMotion',
    'pages/GPS/GPS',
    'pages/WIFI/WIFI',
    'pages/Bluetooth/Bluetooth'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  permission: {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序位置接口的效果展示" // 高速公路行驶持续后台定位
    }
  }
}
