import React, { Component, useState, useEffect } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'


const Accelerometer = () => {

    const [direction, setDirection] = useState(null)

    useEffect(() => {
        Taro.startAccelerometer({ interval: 'normal' })

        Taro.onAccelerometerChange(function (res) {
            setDirection(res)
            if (res.x > 1 && res.y > 1) {
                wx.showToast({
                    title: '摇一摇成功',
                    icon: 'success',
                    duration: 2000
                })
            }
        })
        return () => { Taro.stopAccelerometer() }
    }, [])


    return (
        <View>
            <View style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '10%'}}>加速计</View>
            {
                direction ?
                    <View style={{fontSize: '20px', fontWeight: 'bold'}}>
                        <View style={{margin: '3%'}}>X:{direction.x}</View>
                        <View style={{margin: '3%'}}>Y:{direction.y}</View>
                        <View style={{margin: '3%'}}>Z:{direction.z}</View>

                        <View style={{margin: '3%'}}>倾斜角度:{Math.atan2(direction.x, direction.y) * 180 / Math.PI}</View>
                        <View style={`margin: 0 auto; margin-top:200px; width:600rpx; height:5rpx;background:red;transform:rotate(${Math.atan2(direction.x, direction.y) * 180 / Math.PI}deg)`}></View>
                    </View> : 
                    
                    <View style={{fontSize: '20px', fontWeight: 'bold'}}>数据获取中</View>
            }
        </View>
    )
}

export default Accelerometer