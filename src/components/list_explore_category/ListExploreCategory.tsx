import FastImage from 'react-native-fast-image'
import * as Styles from './list_explore_category.styles'
import { Appearance, ColorSchemeName, ColorValue } from 'react-native'
import { ReactNode } from 'react'
import { ConstantsUtils } from '@/utils/constants'

export interface IListExploreCategory {
  uriImage: string
  title: ReactNode
}

export default function ListExploreCategory({
  uriImage,
  title,
}: IListExploreCategory) {
  return (
    <Styles.Container>
      <Styles.Image
        testID={ConstantsUtils.testIdListExplore}
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
