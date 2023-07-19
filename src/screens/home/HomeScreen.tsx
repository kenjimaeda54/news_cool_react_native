import { useTheme } from '@emotion/react'
import * as Styles from './home.styles'
import useHomeViewModel from '@/view_models/useHomeViewModel'
import { FlatList } from 'react-native'
import { mockTopHeadlines } from '@/mock/topHeadlines'
import CardTopHeadlines from '@/components/card_top_headlines/CardTopHeadlines'

export default function HomeScreen() {
  const {
    inputHeight,
    handleHeightInput,
    valueInput,
    returnPaddingIfPlataformIos,
    setValueInput,
  } = useHomeViewModel()
  const { colors } = useTheme()

  return (
    <Styles.Container>
      <Styles.WrapViewInput height={inputHeight + 7}>
        <Styles.IconSearch
          name='search'
          size={15}
          color={colors.black100}
        />
        <Styles.InputSearch
          height={inputHeight}
          accessibilityRole='search'
          multiline
          value={valueInput}
          style={{
            paddingVertical: returnPaddingIfPlataformIos(),
          }}
          onChangeText={setValueInput}
          onContentSizeChange={(content) =>
            handleHeightInput(
              content.nativeEvent.contentSize.height + 7
            )
          }
          placeholder='Search article'
        />
      </Styles.WrapViewInput>
      <Styles.Title>Hottest News</Styles.Title>
      <FlatList
        data={mockTopHeadlines.articles}
        horizontal
        keyExtractor={(item, index) => `${item.source.id}-${index}`}
        renderItem={({ item }) => <CardTopHeadlines data={item} />}
      />
    </Styles.Container>
  )
}
