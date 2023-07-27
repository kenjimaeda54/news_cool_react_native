import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import WebView from 'react-native-webview'
import * as Styles from './details_screen.styles'
import { useTheme } from '@emotion/react'
import useDetailsViewModel from '@/view_models/useDetailsViewModel'
import ConditionalLoadingWebView from './components/conditional_loading_web_view/ConditionalLoadingWebView'
import { ConstantsUtils } from '@/utils/constants'

export interface IParams {
  uriWebView: string
}

export default function DetailsScreen() {
  const route = useRoute()
  const { uriWebView } = route.params as IParams
  const { colors } = useTheme()
  const { goBack } = useNavigation()
  const { isLoadingWebView, setIsLoadingWebView } =
    useDetailsViewModel()

  return (
    <Styles.Container edges={['top', 'right', 'left']}>
      <ConditionalLoadingWebView
        onPress={goBack}
        isLoading={isLoadingWebView}
      />
      <WebView
        originWhitelist={['*']}
        source={{ uri: uriWebView }}
        testID={ConstantsUtils.testIdWebView}
        mixedContentMode='always'
        collapsable={false}
        cacheEnabled={false}
        cacheMode='LOAD_NO_CACHE'
        domStorageEnabled={true}
        style={{ flex: 1 }}
        androidLayerType='hardware'
        onLoadEnd={() => setIsLoadingWebView(false)}
      />
    </Styles.Container>
  )
}
