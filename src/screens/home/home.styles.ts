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
 