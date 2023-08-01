import styled from '@emotion/native'
import { Dimensions } from 'react-native'
import FastImage from 'react-native-fast-image'

const { width, height } = Dimensions.get('screen')

export const Container = styled.View`
  padding: 150px 0px;
  justify-content: center;
  align-items: center;
`

export const Image = styled.Image`
  width: 250px;
  height: 150px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.montserratMedium};
  font-size: 20px;
  line-height: 23px;
  color: ${({ theme }) => theme.colors.secondary};
`
