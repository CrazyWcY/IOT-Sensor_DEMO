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
            {
                direction ?
                    <View>
                        <View>X:{direction.x}</View>
                        <View>Y:{direction.y}</View>
                        <View>Z:{direction.z}</View>
                        <View style={`width:600rpx; height:2rpx;background:red;transform:rotate(${Math.atan2(direction.x, direction.y) * 180 / Math.PI}deg)`}></View>
                    </View> : null
            }
        </View>
    )
}

export default Accelerometer