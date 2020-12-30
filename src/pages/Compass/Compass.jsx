import React, { Component, useState, useEffect } from 'react'
import { View, Text, Button, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'


const Compass = () => {

    const handleClick = () => {
        Taro.onCompassChange(res => {
            console.log(res)
        })
    }

    const [direction, setDirection] = useState(null)

    useEffect(() => {
        Taro.startCompass()

        Taro.onCompassChange(function (res) {
            setDirection(res)
        })
        return () => { Taro.stopCompass() }
    }, [])

    

    return (
        <View>
            {
                direction ?
                    <View>
                        <View>direction: {direction.direction}</View>
                        <View>accuracy: {direction.accuracy}</View>
                        <Image src='https://gss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/38dbb6fd5266d01629d11d1f902bd40735fa3538.jpg'
                        style={`position:fixed;z-index:5;margin-top:190rpx;width:400rpx;height:400rpx;transform: rotate(${360 - direction.direction.toFixed(0)}deg);`}></Image>
                    </View> : null
            }
        </View>
    )
}

export default Compass