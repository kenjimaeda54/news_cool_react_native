import Ionicons from 'react-native-vector-icons/Ionicons'
import * as Styles from './conditional_loading_web_view.style'
import LoadingCommon from '@/components/loading_common/LoadingCommon'
import { useTheme } from '@emotion/react'
import { TouchableOpacityProps } from 'react-native'

interface IConditionalLoadingWebViewProps
  extends TouchableOpacityProps {
  isLoading: boolean
}

export default function ConditionalLoadingWebView({
  isLoading,
  ...rest
}: IConditionalLoadingWebViewProps) {
  const { colors } = useTheme()

  return (
    <>
      {isLoading && <LoadingCommon />}
      {!isLoading && (
        <Styles.Header>
          <Styles.Button {...rest}>
            <Ionicons
              name='arrow-back'
              size={20}
              color={colors.secondary}
            />
          </Styles.Button>
          <Styles.Details>Details</Styles.Details>
        </Styles.Header>
      )}
    </>
  )
}
