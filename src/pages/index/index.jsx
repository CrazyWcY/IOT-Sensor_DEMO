import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import Taro, { Events } from '@tarojs/taro'


import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick(comp) {
      Taro.navigateTo({
          url: '/pages/' + comp + '/' + comp,
          success: function(res) {
              console.log(res)
          }
      })
  }

  render () {
    return (
      <View className='index'>
        <AtButton type='primary' onClick={this.handleClick.bind(this, 'Accelerometer')}>加速计</AtButton>
        <AtButton type='primary' onClick={this.handleClick.bind(this, 'Compass')}>罗盘</AtButton>
        <AtButton type='primary' onClick={this.handleClick.bind(this, 'Gyroscope')}>陀螺仪</AtButton>
        <AtButton type='primary' onClick={this.handleClick.bind(this, 'DeviceMotion')}>设备方向</AtButton>
        <AtButton type='primary' onClick={this.handleClick.bind(this, 'GPS')}>GPS</AtButton>
      </View>
    )
  }
}
