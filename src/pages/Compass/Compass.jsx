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
            <View style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10%' }}>罗盘</View>
            {
                direction ?
                    <View style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        <View style={{ margin: '3%' }}>direction: {direction.direction}</View>
                        <View style={{ margin: '3%' }}>accuracy: {direction.accuracy}</View>
                        <View style={{ margin: '3%' }}>旋转角度: {360 - direction.direction.toFixed(0)}</View>
                        <View style={{ margin: '0 auto', textAlign: 'center' }}>
                            <Image src='https://gss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/94cad1c8a786c917b4e089e5cb3d70cf3ac7570f.jpg'
                                style={`margin-top:300rpx;width:400rpx;height:400rpx;transform: rotate(${360 - direction.direction.toFixed(0)}deg);`}></Image>
                        </View>
                    </View> : <View style={{ fontSize: '20px', fontWeight: 'bold' }}>数据获取中</View>
            }
        </View>
    )
}

export default Compass