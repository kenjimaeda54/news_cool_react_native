import { useTheme } from '@emotion/react'
import { useState } from 'react'
import { ColorSchemeName, Platform } from 'react-native'

interface IUseHomeViewModel {
  inputHeight: number
  handleHeightInput: (height: number) => void
  valueInput: string
  setValueInput: (value: string) => void
  returnPaddingIfPlataformIos: () => number
  returnColorText: (color: ColorSchemeName) => string
}

export default function useHomeViewModel(): IUseHomeViewModel {
  const [inputHeight, setInputHeight] = useState(20)
  const [valueInput, setValueInput] = useState('')
  const { colors } = useTheme()

  const handleHeightInput = (height: number) => setInputHeight(height)

  const returnPaddingIfPlataformIos = () =>
    Platform.OS === 'android' ? 0 : 5

  function returnColorText(color: ColorSchemeName) {
    return color === 'dark' ? colors.secondary : colors.white
  }

  return {
    inputHeight,
    handleHeightInput,
    valueInput,
    setValueInput,
    returnPaddingIfPlataformIos,
    returnColorText,
  }
}
