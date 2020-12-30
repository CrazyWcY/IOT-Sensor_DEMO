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
            <View style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '10%'}}>陀螺仪</View>
            {
                direction ? 
                <View style={{fontSize: '20px', fontWeight: 'bold'}}>
                    <View style={{margin: '3%'}}>x: {direction.x}</View>
                    <View style={{margin: '3%'}}>y: {direction.y}</View>
                    <View style={{margin: '3%'}}>z: {direction.z}</View>
                </View> : null
            }
        </View>
    )
}

export default Gyroscope