import { ActivityIndicator } from 'react-native'
import * as Styles from './loading_common.styles'
import { useTheme } from '@emotion/react'
import { ConstantsUtils } from '@/utils/constants'

export default function () {
  const { colors } = useTheme()

  return (
    <Styles.Container testID={ConstantsUtils.testIdLoadingHome}>
      <ActivityIndicator size={25} color={colors.secondary} />
    </Styles.Container>
  )
}
