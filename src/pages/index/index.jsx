import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import Taro, { Events } from '@tarojs/taro'


import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'

const comps = [
    {
        name: 'Accelerometer',
        label: '加速计'
    },
    {
        name: 'Compass',
        label: '罗盘'
    },
    {
        name: 'Gyroscope',
        label: '陀螺仪'
    },
    {
        name: 'DeviceMotion',
        label: '设备方向'
    },
    {
        name: 'GPS',
        label: 'GPS'
    },
    {
        name: 'WIFI',
        label: 'WIFI'
    },
    {
        name: 'Bluetooth',
        label: '蓝牙'
    },
]

export default class Index extends Component {

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    handleClick(comp) {
        Taro.navigateTo({
            url: '/pages/' + comp + '/' + comp,
            success: function (res) {
                console.log(res)
            }
        })
    }

    render() {
        return (
            <View className='index'>
                <View style={{ marginTop: '3%',  textAlign: 'center' }}>
                    <Image style={{ width: '208px', height: '54px', marginBottom: '3%'}} src='https://tse3-mm.cn.bing.net/th/id/OIP.okCiVmUJ-z3tM4aLZgyA6wHaB8?pid=Api&rs=1'></Image>
                    <View style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10%', textAlign: 'center' }}>IOT-传感器接口调用演示</View>
                    <View style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '10%', textAlign: 'center' }}>120037910040-王崇宇</View>
                </View>
                <View style={{ margin: '3%' }}>
                    {
                        comps.map(item => (
                            <View style={{ margin: '3%' }}>
                                <AtButton type='primary' style={{ margin: '3%' }} onClick={this.handleClick.bind(this, item.name)}>{item.label}</AtButton>
                            </View>
                        ))
                    }
                </View>
            </View>
        )
    }
}
