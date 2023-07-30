import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ReactNode } from 'react'
import { TextInputProps, View, ViewProps } from 'react-native'
import * as Styles from './list_header_top_headline.style'
import { useTheme } from '@emotion/react'

interface IListHeader extends TextInputProps {
  inputHeight: number
  returnPaddingIFPlataformIos: () => number
}

export default function ListHeader({
  inputHeight,
  returnPaddingIFPlataformIos,
  ...rest
}: IListHeader) {
  const { top } = useSafeAreaInsets()
  const { colors } = useTheme()

  return (
    <View style={{ marginTop: top + 20, paddingHorizontal: 20 }}>
      <Styles.WrapViewInput height={inputHeight + 7}>
        <Styles.IconSearch
          name='search'
          size={15}
          color={colors.black100}
        />
        <Styles.InputSearch
          {...rest}
          height={inputHeight}
          accessibilityRole='search'
          style={{
            paddingVertical: returnPaddingIFPlataformIos(),
          }}
        />
      </Styles.WrapViewInput>
    </View>
  )
}
