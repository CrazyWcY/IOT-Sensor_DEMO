import React, { Component, useState, useEffect } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'


const WIFI = () => {

    const [currentWIFI, setCurrentWIFI] = useState(null)

    useEffect(() => {

        wx.startWifi({
            success: function (res) {
              wx.getConnectedWifi({
                  success: function(res) {
                      console.log('wifi', res)
                      setCurrentWIFI(res)
                  }
              })
            }
          })

        return () => { wx.stopWifi() }
    }, [])
    
    return (
        <View>
            <View style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '10%'}}>WIFI</View>
            {
                currentWIFI ? 
                <View style={{fontSize: '20px', fontWeight: 'bold'}}>
                    <View style={{margin: '3%'}}>BSSID: {currentWIFI.wifi.BSSID}</View>
                    <View style={{margin: '3%'}}>SSID: {currentWIFI.wifi.SSID}</View>
                    <View style={{margin: '3%'}}>自动加入: {currentWIFI.wifi.autoJoined ? "true" : "false"}</View>
                    <View style={{margin: '3%'}}>信号强度: {currentWIFI.wifi.signalStrength}</View>
                </View> : <View style={{fontSize: '20px', fontWeight: 'bold'}}>数据获取中</View>
            }
        </View>
    )
}

export default WIFI