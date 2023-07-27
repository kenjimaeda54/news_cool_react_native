import { ActivityIndicator } from 'react-native'
import * as Styles from './loading_common.styles'
import { useTheme } from '@emotion/react'

export default function () {
  const { colors } = useTheme()

  return (
    <Styles.Container>
      <ActivityIndicator size={25} color={colors.secondary} />
    </Styles.Container>
  )
}
