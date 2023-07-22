import styled from '@emotion/native'
import FastImage from 'react-native-fast-image'

interface ITitle {
  isDark: boolean
}

export const Container = styled.View`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  margin-right: 20px;
`

export const Image = styled(FastImage)`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  border-radius: 45px;
  flex: 1;
`

export const WrapTitle = styled.View`
  position: absolute;
`
