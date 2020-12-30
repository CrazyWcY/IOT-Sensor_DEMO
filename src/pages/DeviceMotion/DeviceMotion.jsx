import React, { Component, useState, useEffect } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'


const DeviceMotion = () => {

    const [direction, setDirection] = useState(null)
    const [txt, setTxt] = useState(null)

    useEffect(() => {
        Taro.startDeviceMotionListening()

        Taro.onDeviceMotionChange(function (res) {
            setDirection(res)
            setTxt(calDirection(res.alpha))
        })
        return () => { Taro.stopDeviceMotionListening() }
    }, [])
    

    const calDirection = (alpha) => {
        if (alpha > 45 && alpha < 136) {
            return '左倒'
        }
        else if (alpha > 225 && alpha < 316) {
            return '右倒'
        }
        else if (alpha > 135 && alpha < 226) {
            return '倒立'
        }
        else {
            return '正立'
        }
    }

    return (
        <View>
             <View style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '10%'}}>设备方向</View>
            {
                direction ? 
                <View style={{fontSize: '20px', fontWeight: 'bold'}}>
                    <View style={{margin: '3%'}}>alpha: {direction.alpha}</View>
                    <View style={{margin: '3%'}}>beta: {direction.beta}</View>
                    <View style={{margin: '3%'}}>gamma: {direction.gamma}</View>
                    <View style={{margin: '3%'}}>direction: {txt}</View>
                </View> : <View style={{fontSize: '20px', fontWeight: 'bold'}}>数据获取中</View>
            }
        </View>
    )
}

export default DeviceMotion