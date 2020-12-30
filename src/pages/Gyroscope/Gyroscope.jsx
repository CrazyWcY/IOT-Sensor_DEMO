import React, { Component, useState, useEffect } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'


const Gyroscope = () => {

    const [direction, setDirection] = useState(null)

    useEffect(() => {

        wx.startGyroscope({
            success: () => {
              wx.onGyroscopeChange(res => {
                setDirection(res)
              })
            }
          })

        return () => { wx.stopGyroscope() }
    }, [])
    
    return (
        <View>
            {
                direction ? 
                <View>
                    <View>x: {direction.x}</View>
                    <View>y: {direction.y}</View>
                    <View>z: {direction.z}</View>
                </View> : null
            }
        </View>
    )
}

export default Gyroscope