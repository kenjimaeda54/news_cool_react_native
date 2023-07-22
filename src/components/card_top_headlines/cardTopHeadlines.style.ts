import styled from '@emotion/native'
import { Dimensions, Text } from 'react-native'
import FastImage from 'react-native-fast-image'

const { width } = Dimensions.get('screen')

export const Container = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 7px;
  height: 130px;
  margin: 20px 0px;
  justify-content: space-between;
  padding: 10px 15px;
`

export const ImageWrap = styled.View`
  width: 40%;
  height: 100%;
`
export const WrapContent = styled.View`
  justify-content: space-between;
  width: 50%;
`

export const TopContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Category = styled.Text`
  font-family: ${({ theme }) => theme.fonts.robotoLight};
  font-size: 15px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.secondary};
`

export const Date = styled.Text`
  font-family: ${({ theme }) => theme.fonts.robotoLight};
  font-size: 15px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.secondary};
`

export const ImageTop = styled(FastImage)({
  height: '100%',
  width: '100%',
  padding: 0,
  borderRadius: 7,
  margin: 0,
})

export const CategoryImg = styled(Text)({
  marginTop: 20,
})

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.robotoRegular};
  font-size: 17px;
  line-height: 20px;
  flex: 1;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.secondary};
`
