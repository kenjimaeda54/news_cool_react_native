import styled from '@emotion/native'
import { Dimensions } from 'react-native'
import FastImage from 'react-native-fast-image'

export const Container = styled.TouchableOpacity`
  margin-left: 15px;
`

export const Image = styled(FastImage)`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  flex: 1;
`

export const WrapTitle = styled.View`
  position: absolute;
`
