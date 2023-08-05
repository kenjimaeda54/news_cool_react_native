import { useTheme } from '@emotion/react'
import * as Styles from './home.styles'
import { Appearance, Dimensions, FlatList, View } from 'react-native'
import CardTopHeadlines from '@/components/card_top_headlines/CardTopHeadlines'
import ListHeader from '@/components/list_header_top_headlines/ListHeaderTopHeadlines'
import ListExplore from './components/list_explore/ListExplore'
import { ConstantsUtils } from '@/utils/constants'
import LoadingCommon from '@/components/loading_common/LoadingCommon'
import useHomeViewModel from '@/view_models/useHomeViewModel'
import Empty from '@/components/empty/Empty'

const { height, width } = Dimensions.get('screen')

export default function HomeScreen() {
  const {
    returnDataTopHeadlines,
    handleSelectedCategory,
    returnColorText,
    isLoadingHeadlines,
    isFetchingHeadlines,
    inputHeight,
    valueInput,
    returnPaddingIfPlataformIos,
    handleSearchArticle,
    handleHeightInput,
  } = useHomeViewModel()
  const data = returnDataTopHeadlines()
  const { colors } = useTheme()
  const colorScheme = Appearance.getColorScheme()

  return (
    <View
      testID={ConstantsUtils.testIdViewHomeScreen}
      style={{ height, width, backgroundColor: colors.primary }}>
      {isLoadingHeadlines ? (
        <LoadingCommon />
      ) : (
        <FlatList
          data={data}
          testID={ConstantsUtils.testIdFlatlistNews}
          ListEmptyComponent={<Empty />}
          style={{
            flex: 1,
            backgroundColor: colors.primary,
            height,
            width,
          }}
          ListHeaderComponent={
            <>
              <ListHeader
                testID={ConstantsUtils.testIdHeaderFlatlist}
                inputHeight={inputHeight}
                accessibilityRole='search'
                multiline
                value={valueInput}
                returnPaddingIFPlataformIos={
                  returnPaddingIfPlataformIos
                }
                onChangeText={handleSearchArticle}
                placeholderTextColor={colors.secondary}
                onContentSizeChange={handleHeightInput}
                placeholder='Search article'
              />
              <Styles.Title>Explore</Styles.Title>
              <ListExplore
                handleSelectedCategory={handleSelectedCategory}
                color={returnColorText(colorScheme)}
              />
            </>
          }
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <CardTopHeadlines data={item} />}
        />
      )}
    </View>
  )
}
