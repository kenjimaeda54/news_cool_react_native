import styled from '@emotion/native'
import Feather from 'react-native-vector-icons/Feather'

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
