import { renderHook } from '@testing-library/react-hooks'
import { render, act, fireEvent } from '@/utils/test-utils'
import HomeScreen from '@/screens/home/HomeScreen'
import useHomeViewModel from '@/view_models/useHomeViewModel'
import { Appearance, Text } from 'react-native'
import { ThemeProvider, useTheme } from '@emotion/react'
import { ReactNode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/services/query_client'
import lightTheme from '@/themes/light.theme'
import { useTopHeadlinesServices } from '@/services/top_headlines.services'
import { ConstantsUtils } from '@/utils/constants'
import ListHeader from '@/components/list_header_top_headlines/ListHeaderTopHeadlines'

describe('HomeScreen', () => {
  const mockContentSize = {
    nativeEvent: {
      contentSize: {
        height: 30,
      },
    },
  }

  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )

  it('should the TextInput increase in size as you type', async () => {
    const { result } = renderHook(() => useHomeViewModel(), {
      wrapper,
    })
    const { getByRole } = render(<HomeScreen />)

    act(() => {
      result.current.handleHeightInput(
        mockContentSize.nativeEvent.contentSize.height
      )
    })

    const input = getByRole('search')
    fireEvent(input, 'onContentSizeChange', mockContentSize)
    expect(result.current.inputHeight).toEqual(30)
  })

  //pra testar plataforma precisei mokar
  //https://stackoverflow.com/questions/43161416/mocking-platform-detection-in-jest-and-react-native
  //olhar jestSetupFile
  it('should have 0 vertical padding TextInput if plataform is Android', () => {
    const { getByRole } = render(<HomeScreen />)
    const input = getByRole('search')
    const { result } = renderHook(() => useHomeViewModel(), {
      wrapper,
    })

    act(() => {
      result.current.returnPaddingIfPlataformIos()
    })

    expect(input.props.style[1].paddingVertical).toEqual(5)
  })
})
