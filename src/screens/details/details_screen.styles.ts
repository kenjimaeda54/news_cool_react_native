import styled from '@emotion/native'
import { Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`
