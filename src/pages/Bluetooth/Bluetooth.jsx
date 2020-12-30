import React, { Component, useState, useEffect } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'


const Bluetooth = () => {

    const [currentWIFI, setCurrentWIFI] = useState(null)

    useEffect(() => {



        wx.openBluetoothAdapter({
            success(res) {
                wx.startBluetoothDevicesDiscovery({
                    success: function (res) {
                        console.log(res)
                        wx.getBluetoothDevices({
                            success: function (res) {
                                console.log(res)
                                setCurrentWIFI(res)
                                wx.stopBluetoothDevicesDiscovery()
                            }
                        })
                    }
                })
            }
        })

        // return () => { wx.stopWifi() }
    }, [])

    return (
        <View>
            <View style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '10%'}}>蓝牙</View>
            {
                currentWIFI ?
                    <View>
                        <View>
                            {
                                currentWIFI.devices.map(item => (
                                    <View>
                                        <View>设备名称:{item.name}</View>
                                        <View>Device ID:{item.deviceId}</View>
                                        <View style={{marginBottom: '3%'}}>RSSI:{item.RSSI}</View>
                                    </View>
                                ))
                            }
                        </View>
                    </View> : <View style={{fontSize: '20px', fontWeight: 'bold'}}>数据获取中</View>
            }
        </View>
    )
}

export default Bluetooth