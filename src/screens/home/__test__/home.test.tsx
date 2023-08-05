import { renderHook } from '@testing-library/react-hooks'
import {
  render,
 
  fireEvent,
  
} from '@/utils/test-utils'
import HomeScreen from '@/screens/home/HomeScreen'
import { ReactNode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { mockClient } from '@/services/mock_client'
import {  Platform } from 'react-native'
import { useTopHeadlinesServices } from '@/services/useTopHeadlinesServices'
import ListHeader from '@/components/list_header_top_headlines/ListHeaderTopHeadlines'
import { ConstantsUtils } from '@/utils/constants'
import CardTopHeadlines from '@/components/card_top_headlines/CardTopHeadlines'
import { mockTopHeadlines } from '@/mock/top_headlines'
 

describe('HomeScreen', () => {
  const mockHandleHeightInput = jest.fn()
  const mockSelectedCategory = jest.fn()
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

  it('should show the app home screen', () => {
    expect(render(<HomeScreen />)).toBeTruthy
  })

  it('should render the flatlist with the correct data', async () => {
    const { result, waitFor } = renderHook(
      () => useTopHeadlinesServices(),
      { wrapper: wrapperClientProvider }
    )
    await waitFor(() => result.current.isSuccess)
    jest.useFakeTimers()
    const { getByTestId } = render(<HomeScreen />)
    const element = getByTestId(ConstantsUtils.testIdFlatlistNews)
    expect(element.props.data).toEqual(
      result.current.dataTopHeadlines.articles
    )
  })

  it('should show the title of the card', () => {
    const { getByText } = render(
      <CardTopHeadlines data={mockTopHeadlines.articles[0]} />
    )
    const text = getByText(mockTopHeadlines.articles[0].title)
    expect(text).toBeDefined()
  })

  it('should show the title Explore', async () => {
    const { result, waitFor } = renderHook(
      () => useTopHeadlinesServices(),
      { wrapper: wrapperClientProvider }
    )
    await waitFor(() => result.current.isSuccess)
    jest.useFakeTimers()
    const { getByText } = render(<HomeScreen />)
    const text = getByText('Explore')
    expect(text).toBeDefined()
  })

  //cuidado colocar bug no test, se deseja testar uma função crie sempre mocks
  //como o mockHandleHeightInput
  //importante o comportamente do componente e os dados reais ou seja de
  it('should the TextInput increase in size as you type', async () => {
    const { getByRole } = render(
      <ListHeader
        inputHeight={7}
        onContentSizeChange={(content) =>
          mockHandleHeightInput(
            content.nativeEvent.contentSize.height + 10
          )
        }
        returnPaddingIFPlataformIos={() => {
          return 3
        }}
      />
    )

    const input = getByRole('search')
    fireEvent(input, 'onContentSizeChange', mockContentSize)

    expect(mockHandleHeightInput).toHaveBeenCalledWith(40)
  })

  //pra testar plataforma precisei mokar
  //https://stackoverflow.com/questions/43161416/mocking-platform-detection-in-jest-and-react-native
  //olhar jestSetupFile
  it('should have 0 vertical padding TextInput if plataform is Android', async () => {
    const plataforma = Platform.OS

    const { getByRole, debug } = render(
      <ListHeader
        inputHeight={3}
        returnPaddingIFPlataformIos={() =>
          plataforma === 'android' ? 0 : 3
        }
      />
    )

    const input = getByRole('search')

    expect(input.props.style[1].paddingVertical).toEqual(0)
  })
})
