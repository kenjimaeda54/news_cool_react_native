import ItemExploreCategory from '@/components/list_explore_category/ItemEploreCategory'
import { dataCategories } from '@/mock/data_explore'
import { ConstantsUtils } from '@/utils/constants'
import { FlashList } from '@shopify/flash-list'
import * as Styles from './list_explore.styles'
import { FlatList } from 'react-native'

interface IListExplore {
  handleSelectedCategory: (title: string) => void
  color: string
}

export default function ListExplore({
  handleSelectedCategory,
  color,
}: IListExplore) {
  return (
    <FlatList
      data={dataCategories}
      testID={ConstantsUtils.testIdFlatListExplore}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingRight: 20,
      }}
      style={{
        marginVertical: 20,
      }}
      horizontal
      renderItem={({ item }) => (
        <ItemExploreCategory
          onPress={() => handleSelectedCategory(item.title)}
          testID={ConstantsUtils.testIdItemExplore}
          uriImage={item.uriImage}
          title={
            <Styles.TitleTopCard
              numberOfLines={1}
              style={{
                color: color,
                textShadowColor: '#000',
                textShadowRadius: 16,
                textShadowOffset: {
                  width: 0,
                  height: 12,
                },
              }}>
              {item.title}
            </Styles.TitleTopCard>
          }
        />
      )}
    />
  )
}
