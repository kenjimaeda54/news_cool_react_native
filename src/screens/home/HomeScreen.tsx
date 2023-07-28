import { useTheme } from '@emotion/react'
import * as Styles from './home.styles'
import useHomeViewModel from '@/view_models/useHomeViewModel'
import { Appearance, FlatList, Text, View } from 'react-native'
import { mockTopHeadlines } from '@/mock/topHeadlines'
import CardTopHeadlines from '@/components/card_top_headlines/CardTopHeadlines'
import ListHeader from '@/components/list_header_top_headlines/ListHeaderTopHeadlines'
import { mockDataCategories } from '@/mock/dataCategories'
import ListExploreCategory from '@/components/list_explore_category/ListExploreCategory'
import { ConstantsUtils } from '@/utils/constants'

export default function HomeScreen() {
  const {
    inputHeight,
    handleHeightInput,
    valueInput,
    returnPaddingIfPlataformIos,
    setValueInput,
    returnColorText,
  } = useHomeViewModel()
  const { colors } = useTheme()
  const colorScheme = Appearance.getColorScheme()

  return (
    <FlatList
      data={mockTopHeadlines.articles}
      testID={ConstantsUtils.testIdFlatlistNews}
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}
      ListHeaderComponent={
        <>
          <ListHeader
            testID={ConstantsUtils.testIdHeaderFlatlist}
            inputHeight={inputHeight}
            accessibilityRole='search'
            multiline
            value={valueInput}
            style={{
              paddingVertical: returnPaddingIfPlataformIos(),
            }}
            onChangeText={setValueInput}
            placeholderTextColor={colors.secondary}
            onContentSizeChange={(content) =>
              handleHeightInput(
                content.nativeEvent.contentSize.height + 7
              )
            }
            placeholder='Search article'
          />
          <Styles.Title>Explore</Styles.Title>
          <FlatList
            data={mockDataCategories}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingRight: 20,
            }}
            style={{
              marginVertical: 20,
            }}
            horizontal
            renderItem={({ item }) => (
              <ListExploreCategory
                uriImage={item.uriImage}
                title={
                  <Styles.TitleTopCard
                    numberOfLines={1}
                    style={{
                      color: returnColorText(colorScheme),
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
      keyExtractor={(item, index) => `${item.source.id}-${index}`}
      renderItem={({ item }) => <CardTopHeadlines data={item} />}
    />
  )
}
