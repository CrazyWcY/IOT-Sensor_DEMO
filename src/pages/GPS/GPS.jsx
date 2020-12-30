import React, { Component, useState, useEffect } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'


const GPS = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        wx.getLocation({
            success: function (res) {
                setData(res)
            },
            fail: function(res) {
                console.log(res)
            }
        })
    }, [])

    return (
        <View>
            {
                data ?
                    <View>
                        <View>纬度: {data.latitude}</View>
                        <View>经度: {data.longitude}</View>
                        <View>速度: {data.speed}</View>
                        <View>位置的精确度: {data.accuracy}</View>
                        <View>高度: {data.altitude}</View>
                    </View> : null
            }
        </View>
    )
}

export default GPS