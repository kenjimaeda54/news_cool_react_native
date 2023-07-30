import { useTheme } from '@emotion/react'
import * as Styles from './home.styles'
import {
  Appearance,
  ColorSchemeName,
  Dimensions,
  FlatList,
  Text,
  View,
} from 'react-native'
import CardTopHeadlines from '@/components/card_top_headlines/CardTopHeadlines'
import ListHeader from '@/components/list_header_top_headlines/ListHeaderTopHeadlines'
import { dataCategories } from '@/mock/data_explore'
import ListExploreCategory from '@/components/list_explore_category/ListExploreCategory'
import { ConstantsUtils } from '@/utils/constants'
import LoadingCommon from '@/components/loading_common/LoadingCommon'
import { IColorsTheme } from '@/declaration/theme'
import { FlashList } from '@shopify/flash-list'
import useHomeViewModel, {
  IUseHomeViewModel,
} from '@/view_models/useHomeViewModel'

const { height, width } = Dimensions.get('screen')

interface IContent {
  data: IUseHomeViewModel
  colors: IColorsTheme
  colorScheme: ColorSchemeName
}

export default function HomeScreen() {
  const data = useHomeViewModel()
  const { colors } = useTheme()
  const colorScheme = Appearance.getColorScheme()

  return (
    <Content data={data} colors={colors} colorScheme={colorScheme} />
  )
}

export function Content({ data, colors, colorScheme }: IContent) {
  return (
    <>
      {data.isLoadingHeadlines || data.isFetchingHeadlines ? (
        <LoadingCommon />
      ) : (
        <View style={{ height, width }}>
          <FlashList
            estimatedItemSize={230}
            extraData={data.isLoadingHeadlines}
            data={data.dataTopHeadlines.articles}
            testID={ConstantsUtils.testIdFlatlistNews}
            style={{
              flex: 1,
              backgroundColor: colors.primary,
            }}
            ListHeaderComponent={
              <>
                <ListHeader
                  testID={ConstantsUtils.testIdHeaderFlatlist}
                  inputHeight={data.inputHeight}
                  accessibilityRole='search'
                  multiline
                  value={data.valueInput}
                  style={{
                    paddingVertical:
                      data.returnPaddingIfPlataformIos(),
                  }}
                  onChangeText={data.setValueInput}
                  placeholderTextColor={colors.secondary}
                  onContentSizeChange={(content) =>
                    data.handleHeightInput(
                      content.nativeEvent.contentSize.height + 7
                    )
                  }
                  placeholder='Search article'
                />
                <Styles.Title>Explore</Styles.Title>
                <FlashList
                  data={dataCategories}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    paddingRight: 20,
                  }}
                  style={{
                    marginVertical: 20,
                  }}
                  estimatedItemSize={150}
                  horizontal
                  renderItem={({ item }) => (
                    <ListExploreCategory
                      onPress={() =>
                        data.handleSelectedCategory(item.title)
                      }
                      uriImage={item.uriImage}
                      title={
                        <Styles.TitleTopCard
                          numberOfLines={1}
                          style={{
                            color: data.returnColorText(colorScheme),
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
              </>
            }
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CardTopHeadlines data={item} />
            )}
          />
        </View>
      )}
    </>
  )
}
