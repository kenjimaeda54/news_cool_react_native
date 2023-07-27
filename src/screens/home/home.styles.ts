import styled from '@emotion/native'

export const ViewHeader = styled.View`
  padding: 0px 15px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.montserratSemiBold};
  font-size: 22px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 20px;
  padding: 15px 15px;
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
