import styled from '@emotion/native'
import { Dimensions, Text } from 'react-native'
import FastImage from 'react-native-fast-image'

const { width } = Dimensions.get('screen')

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 7px;
  height: 140px;
  justify-content: space-between;
  margin: 20px 15px;
`

export const WrapContent = styled.View`
  justify-content: space-between;
  width: 60%;
  padding: 10px 15px;
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
  width: 80%;
`

export const Date = styled.Text`
  font-family: ${({ theme }) => theme.fonts.robotoLight};
  font-size: 15px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.secondary};
`

export const ImageWrap = styled.View`
  height: 100%;
  flex: 1;
`

export const ImageTop = styled(FastImage)`
  height: 100%;
  width: 100%;
  padding: 0px;
  border-radius: 7px;
  margin: 0px;
  background-color: ${({ theme }) => theme.colors.secondary};
`

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
