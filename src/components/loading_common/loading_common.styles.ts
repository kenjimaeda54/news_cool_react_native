import styled from '@emotion/native'
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen')

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 10;
  width: ${width};
  height: ${height};
`
