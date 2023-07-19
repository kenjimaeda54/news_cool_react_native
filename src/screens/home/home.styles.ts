import styled from '@emotion/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather from 'react-native-vector-icons/Feather'
import { Platform } from 'react-native'

interface IWrapViewInput {
  height: number
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const WrapViewInput = styled.View<IWrapViewInput>`
  padding: 0px 20px;
  padding-left: 35px;
  position: relative;
  border: 0.2px solid ${({ theme }) => theme.colors.black100};
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
  color: ${({ theme }) => theme.colors.black100};
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.montserratSemiBold};
  font-size: 22px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.black100};
  margin-top: 20px;
`
