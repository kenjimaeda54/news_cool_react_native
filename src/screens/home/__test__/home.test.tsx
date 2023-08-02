import { renderHook } from '@testing-library/react-hooks'
import { render, act, fireEvent, configure } from '@/utils/test-utils'
import HomeScreen, { Content } from '@/screens/home/HomeScreen'
import useHomeViewModel from '@/view_models/useHomeViewModel'
import { ReactNode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { mockClient } from '@/services/mock_client'
import { ThemeProvider, useTheme } from '@emotion/react'
import { Appearance } from 'react-native'
import { useTopHeadlinesServices } from '@/services/useTopHeadlinesServices'
import lightTheme from '@/themes/light.theme'
import ListHeader from '@/components/list_header_top_headlines/ListHeaderTopHeadlines'
import { ConstantsUtils } from '@/utils/constants'

describe('HomeScreen', () => {
  const mockContentSize = {
    nativeEvent: {
      contentSize: {
        height: 30,
      },
    },
  }

  const wrapperClientProvider = ({
    children,
  }: {
    children: ReactNode
  }) => (
    <QueryClientProvider client={mockClient}>
      {children}
    </QueryClientProvider>
  )

  it('should show LoadingCommon if isLoadingHeadlines or isFetchingHeadlines is true', () => {
    const { getByTestId, debug } = render(<HomeScreen />)

    const loading = getByTestId(ConstantsUtils.testIdLoadingHome)
    console
  })

  it('should the TextInput increase in size as you type', async () => {
    const { result: resultHomeViewModel, waitFor } = renderHook(
      () => useHomeViewModel(),
      {
        wrapper: wrapperClientProvider,
      }
    )

    const { getByRole } = render(
      <ListHeader
        inputHeight={resultHomeViewModel.current.inputHeight}
        returnPaddingIFPlataformIos={
          resultHomeViewModel.current.returnPaddingIfPlataformIos
        }
      />
    )

    act(() => {
      resultHomeViewModel.current.handleHeightInput(
        mockContentSize.nativeEvent.contentSize.height
      )
    })

    const input = getByRole('search')
    fireEvent(input, 'onContentSizeChange', mockContentSize)
    expect(resultHomeViewModel.current.inputHeight).toEqual(30)
  })

  //pra testar plataforma precisei mokar
  //https://stackoverflow.com/questions/43161416/mocking-platform-detection-in-jest-and-react-native
  //olhar jestSetupFile
  it('should have 0 vertical padding TextInput if plataform is Android', () => {
    const { result: resultHomeViewModel, waitFor } = renderHook(
      () => useHomeViewModel(),
      {
        wrapper: wrapperClientProvider,
      }
    )
    const { getByRole } = render(
      <ListHeader
        inputHeight={resultHomeViewModel.current.inputHeight}
        returnPaddingIFPlataformIos={
          resultHomeViewModel.current.returnPaddingIfPlataformIos
        }
      />
    )
    const input = getByRole('search')

    const { result } = renderHook(() => useHomeViewModel(), {
      wrapper: wrapperClientProvider,
    })

    act(() => {
      result.current.returnPaddingIfPlataformIos()
    })

    expect(input.props.style[1].paddingVertical).toEqual(5)
  })
})
