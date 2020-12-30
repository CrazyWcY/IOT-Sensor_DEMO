import React, { Component, useState, useEffect } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'


const DeviceMotion = () => {

    const [direction, setDirection] = useState(null)

    useEffect(() => {
        Taro.startDeviceMotionListening()

        Taro.onDeviceMotionChange(function (res) {
            setDirection(res)
        })
        return () => { Taro.stopDeviceMotionListening() }
    }, [])
    
    return (
        <View>
            {
                direction ? 
                <View>
                    <View>alpha: {direction.alpha}</View>
                    <View>beta: {direction.beta}</View>
                    <View>gamma: {direction.gamma}</View>
                </View> : null
            }
        </View>
    )
}

export default DeviceMotion