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
            <View style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '10%'}}>GPS定位</View>
            {
                data ?
                    <View style={{fontSize: '20px', fontWeight: 'bold'}}>
                        <View style={{margin: '3%'}}>纬度: {data.latitude}</View>
                        <View style={{margin: '3%'}}>经度: {data.longitude}</View>
                        <View style={{margin: '3%'}}>位置的精确度: {data.accuracy}</View>
                    </View> : null
            }
        </View>
    )
}

export default GPS