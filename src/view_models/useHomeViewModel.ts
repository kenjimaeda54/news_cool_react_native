import {
  ITopHeadlines,
  useTopHeadlinesServices,
} from '@/services/useTopHeadlinesServices'
import { useTheme } from '@emotion/react'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { ColorSchemeName, Platform } from 'react-native'

type OmitValue =
  | 'fetchTopHeadlines'
  | 'isSuccess'
  | 'refetch'
  | 'category'

export interface IUseHomeViewModel
  extends Omit<ITopHeadlines, OmitValue> {
  inputHeight: number
  handleHeightInput: (height: number) => void
  valueInput: string
  setValueInput: (value: string) => void
  returnPaddingIfPlataformIos: () => number
  returnColorText: (color: ColorSchemeName) => string
  handleNavigation: (uriWebView: string) => void
  handleSelectedCategory: (newCategory: string) => void
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
    refetch,
    isFetchingHeadlines,
  } = useTopHeadlinesServices()

  const handleHeightInput = (height: number) => setInputHeight(height)

  function handleSelectedCategory(newCategory: string) {
    //cuidado pra evitar bug o refetch precisa estar acima para o parametro que vai para fetch api
    refetch()
    category.current = newCategory
  }

  const returnPaddingIfPlataformIos = () =>
    Platform.OS === 'android' ? 0 : 5

  function returnColorText(color: ColorSchemeName) {
    return color === 'dark' ? colors.secondary : colors.white
  }

  const handleNavigation = (uriWebView: string) =>
    navigate('details', { uriWebView })

  return {
    inputHeight,
    handleHeightInput,
    valueInput,
    setValueInput,
    returnPaddingIfPlataformIos,
    returnColorText,
    handleNavigation,
    dataTopHeadlines,
    isLoadingHeadlines,
    handleSelectedCategory,
    isFetchingHeadlines,
  }
}
