import {
  ArticlesModel,
  TopHeadlinesModel,
} from '@/models/top_headlines_model'
import {
  ISearchTopHeadline,
  useSearchTopHeadline,
} from '@/services/useSearchTopHeadline'
import {
  ITopHeadlines,
  useTopHeadlinesServices,
} from '@/services/useTopHeadlinesServices'
import { useTheme } from '@emotion/react'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { ColorSchemeName, NativeSyntheticEvent, Platform, TextInputContentSizeChangeEventData } from 'react-native'

type OmitValue =
  | 'fetchTopHeadlines'
  | 'isSuccess'
  | 'refetchTopHeadlines'
  | 'category'
  | 'refetchSearchTopHeadlines'
  | 'fetchSearchTopHeadlines'
  | 'search'
  | 'dataTopHeadlines'
  | 'dataSearchTopHeadlines'

type IProtocols = ITopHeadlines & ISearchTopHeadline

export interface IUseHomeViewModel
  extends Omit<IProtocols, OmitValue> {
  inputHeight: number
  handleHeightInput: (event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>) => void
  valueInput: string
  returnPaddingIfPlataformIos: () => number
  returnColorText: (color: ColorSchemeName) => string
  handleNavigation: (uriWebView: string) => void
  handleSelectedCategory: (newCategory: string) => void
  handleSearchArticle: (word: string) => void
  returnDataTopHeadlines: () => ArticlesModel[]
}

export default function useHomeViewModel(): IUseHomeViewModel {
  const [inputHeight, setInputHeight] = useState(20)
  const [valueInput, setValueInput] = useState('')
  const { colors } = useTheme()
  const { navigate } = useNavigation()
  const {
    dataTopHeadlines,
    isLoadingHeadlines,
    category,
    refetchTopHeadlines,
    isFetchingHeadlines,
  } = useTopHeadlinesServices()
  const {
    dataSearchTopHeadlines,
    isFetchingSearchTopHeadlines,
    isLoadingSearchTopHeadlines,
    refetchSearchTopHeadlines,
    search,
  } = useSearchTopHeadline()

  const handleHeightInput = (event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>) => setInputHeight(event.nativeEvent.contentSize.height + 7)

  function handleSelectedCategory(newCategory: string,calback?: (newCategory: string) => void) {
    setValueInput('')
    //cuidado pra evitar bug o refetch precisa estar acima para o parametro que vai para fetch api
    refetchTopHeadlines()
    category.current = newCategory
  }

  function handleSearchArticle(word: string) {
    setValueInput(word)

    if (word.length % 3 === 0 && word.length > 2) {
      search.current = word
      refetchSearchTopHeadlines()
    }
  }

  const returnPaddingIfPlataformIos = () =>
    Platform.OS === 'android' ? 0 : 5

  function returnColorText(color: ColorSchemeName) {
    return color === 'dark' ? colors.secondary : colors.white
  }

  function returnDataTopHeadlines(): ArticlesModel[] {
    return valueInput.length > 2
      ? dataSearchTopHeadlines.articles
      : dataTopHeadlines.articles
  }

  const handleNavigation = (uriWebView: string) =>
    navigate('details', { uriWebView })

  return {
    inputHeight,
    handleHeightInput,
    valueInput,
    returnPaddingIfPlataformIos,
    returnColorText,
    handleNavigation,
    isLoadingHeadlines,
    handleSelectedCategory,
    isFetchingHeadlines,
    handleSearchArticle,
    isFetchingSearchTopHeadlines,
    isLoadingSearchTopHeadlines,
    returnDataTopHeadlines,
  }
}
