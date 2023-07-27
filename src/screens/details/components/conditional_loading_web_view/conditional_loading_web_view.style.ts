import styled from '@emotion/native'

export const Header = styled.View`
  flex-direction: row;
  padding: 15px 20px;
  width: 100%;
`

export const Button = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  justify-content: center;
  z-index: 2;
`
export const Details = styled.Text`
  font-family: ${({ theme }) => theme.fonts.montserratSemiBold};
  line-height: 20px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 17px;
  text-align: center;
  position: absolute;
  bottom: 18px;
  left: 0px;
  right: 0px;
`
