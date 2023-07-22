import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import WebView from 'react-native-webview'

export interface IParams {
  uriWebView: string
}

export default function DetailsScreen() {
  const route = useRoute()
  const {uriWebView} = route.params as IParams

  return (
    <WebView source={{uri: uriWebView}} style={{flex: 1}} />
     
  )
}