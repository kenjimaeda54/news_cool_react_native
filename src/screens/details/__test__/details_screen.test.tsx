import { fireEvent, render, renderHook } from '@/utils/test-utils'
import ConditionalLoadingWebView from '../components/conditional_loading_web_view/ConditionalLoadingWebView'
import DetailsScreen from '../DetailsScreen'
import { ConstantsUtils } from '@/utils/constants'
import { uriWebViewJest } from 'jestSetupFile'
import useDetailsViewModel from '@/view_models/useDetailsViewModel'
import { act } from 'react-test-renderer'

describe('DetailsScreen', () => {
  it('should render the header title', () => {
    const { getByText, debug } = render(
      <ConditionalLoadingWebView isLoading={false} />
    )
    const text = getByText('Details')
    expect(text).toBeDefined()
  })

  it('should show a correct webview as per the link', () => {
    const { getByTestId } = render(<DetailsScreen />)
    const element = getByTestId(ConstantsUtils.testIdWebView)
    expect(element.props.source.uri).toEqual(uriWebViewJest)
  })

  it('should load the webView set iLoadingWebView to false if the WebView was loaded', () => {
    const { result } = renderHook(() => useDetailsViewModel())

    const { getByTestId } = render(<DetailsScreen />)
    const element = getByTestId(ConstantsUtils.testIdWebView)

    act(() => {
      result.current.setIsLoadingWebView(false)
    })

    fireEvent(element, 'onLoadEnd')
    expect(result.current.isLoadingWebView).toEqual(false)
  })
})
