import FastImage from 'react-native-fast-image'
import * as Styles from './litem_explore_category.styles'
import {
  Appearance,
  ColorSchemeName,
  ColorValue,
  Dimensions,
  TouchableOpacityProps,
} from 'react-native'
import { ReactNode } from 'react'
import { ConstantsUtils } from '@/utils/constants'

export interface IItemExploreCategory extends TouchableOpacityProps {
  uriImage: string
  title: ReactNode
}

const { width } = Dimensions.get('screen')

const item = width * 0.24

export default function ItemExploreCategory({
  uriImage,
  title,
  ...rest
}: IItemExploreCategory) {
  return (
    <Styles.Container
      activeOpacity={0.8}
      accessibilityRole='button'
      style={{
        width: item,
        height: item,
        borderRadius: item / 2,
      }}
      {...rest}>
      <Styles.Image
        style={{
          borderRadius: item / 2,
        }}
        testID={ConstantsUtils.testIdImageListExplore}
        source={{
          uri: uriImage,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      {title}
    </Styles.Container>
  )
}
