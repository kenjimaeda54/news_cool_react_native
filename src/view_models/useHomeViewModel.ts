import {
  ITopHeadlines,
  useTopHeadlinesServices,
} from '@/services/top_headlines.services'
import { useTheme } from '@emotion/react'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { ColorSchemeName, Platform } from 'react-native'

interface IUseHomeViewModel extends ITopHeadlines {
  inputHeight: number
  handleHeightInput: (height: number) => void
  valueInput: string
  setValueInput: (value: string) => void
  returnPaddingIfPlataformIos: () => number
  returnColorText: (color: ColorSchemeName) => string
  handleNavigation: (uriWebView: string) => void
}

export default function useHomeViewModel(): IUseHomeViewModel {
  const [inputHeight, setInputHeight] = useState(20)
  const [valueInput, setValueInput] = useState('')
  const { colors } = useTheme()
  const { navigate } = useNavigation()
  const { data, isLoading } = useTopHeadlinesServices()

  const handleHeightInput = (height: number) => setInputHeight(height)

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
    data,
    isLoading,
  }
}
