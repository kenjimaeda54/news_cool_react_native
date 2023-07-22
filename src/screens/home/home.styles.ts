import styled from '@emotion/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather from 'react-native-vector-icons/Feather'
import { Platform } from 'react-native'

interface IContainer {
  paddingTop: number
}

interface IWrapViewInput {
  height: number
}

export const WrapViewInput = styled.View<IWrapViewInput>`
  padding: 0px 20px;
  padding-left: 35px;
  position: relative;
  border: 0.2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  height: ${({ height }) => height}px;
  justify-content: center;
`

export const IconSearch = styled(Feather)({
  position: 'absolute',
  top: 10,
  left: 10,
})

export const InputSearch = styled.TextInput<IWrapViewInput>`
  font-family: ${({ theme }) => theme.fonts.robotoRegular};
  font-size: 17px;
  color: ${({ theme }) => theme.colors.secondary};
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.montserratSemiBold};
  font-size: 22px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 20px;
`

export const TitleTopCard = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.montserratSemiBold};
  font-size: 13px;
  line-height: 20px;
  top: 40%;
  left: 0px;
  right: 0px;
  z-index: 3;
`
