import styled from '@emotion/native'
import {
  Dimensions,
  Image,
  ImageBackground,
  Text,
  View,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import { scale } from 'react-native-size-matters'

export const Container = styled.View`
  height: 250px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 20px;
`

export const ImageTop = styled(FastImage)({
  width: '100%',
  height: '100%',
  flex: 1,
})

export const CategoryImg = styled(Text)({})

export const Title = styled(Text)({})
